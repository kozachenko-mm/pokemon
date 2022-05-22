import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Button } from '..';

export const Pagination: React.FC = () => {
  const { previous, next } = useTypedSelector((state) => state.pokemonList);
  const { getPokemon } = useActions();

  const onPrevHandler = () => {
    getPokemon(previous);
  };
  const onNextHandler = () => {
    getPokemon(next);
  };
  if (!previous && !next) return null;

  return (
		<div className="button-block">
			<Button type="button" onClick={onPrevHandler} disabled={!previous} variant="prev">
				previous
			</Button>
			<Button type="button" onClick={onNextHandler} disabled={!next} variant="next">
				next
			</Button>
		</div>
  );
};
