import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../redux/operations/pokemonOperations';
import { pokemonsInfo } from '../../redux/selectors/pokemonSelector';
import { PokemonItem } from '../pokemon-item';

export const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonsInfo);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <ul className="list">
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.id}
          name={pokemon.name}
          img={pokemon.sprites.front_default}
        />
      ))}
    </ul>
  );
};
