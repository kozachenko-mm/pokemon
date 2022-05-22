/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { Skeleton, Stack } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Pagination, PokemonItem } from '..';
import { IPokemonItems } from '../../types';
import { useActions } from '../../hooks/useAction';

export const PokemonList: React.FC = () => {
  const { getPokemon } = useActions();
  const { loading, list, error } = useTypedSelector((state) => state.pokemonList);

  useEffect(() => {
    getPokemon();
  }, []);

  if (error) return <h2 className="error"> Opps! somthing went wrong!</h2>;

  return (
    <div className="block">
      <ul className="list">
        {(!loading ? list : Array.from(new Array(20))).map((pokemon: IPokemonItems, i) => (
          <li className="list-item" key={i}>
          {pokemon
            ? (
              <PokemonItem
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.sprites.front_default}
              />
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="circular" width={96} height={96} />
                <Skeleton className="center" variant="text" width={80} height={18} />
              </Stack>
            )}

          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
