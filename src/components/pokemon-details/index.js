import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails } from '../../redux/actions/pokemonActions';
import { pokemonDetails, pokemonsInfo } from '../../redux/selectors/pokemonSelector';

export const PockemonDetails = () => {
  const pokemon = useSelector(pokemonDetails);
  const pokemons = useSelector(pokemonsInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons[0]) dispatch(getPokemonDetails(pokemons[0]));
  }, [dispatch, pokemons]);

  return <div className="card">{pokemon ? pokemon.name : 'null'}</div>;
};
