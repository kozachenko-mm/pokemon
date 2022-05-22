import { TextTransformName } from '../../helpers/utils';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface PokemonItemProps {
  name: string;
  img: string;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({ name, img }) => {
  const { getPokemonDetails } = useActions();
  const { list } = useTypedSelector((state) => state.pokemonList);

   const choosePokemon = () => {
    const pokemon = list.find((item) => item.name === name);
    getPokemonDetails(pokemon);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={choosePokemon}>
      <img src={img} alt={`pokemon ${name} avatar`} width="96px" height="96px" />
      <p className="name">{TextTransformName(name)}</p>
    </div>
  );
};
