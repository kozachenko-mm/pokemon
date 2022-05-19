import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetails } from '../../redux/actions/pokemonActions';
import { pokemonsInfo } from '../../redux/selectors/pokemonSelector';

export const PokemonItem = ({ name, img }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector(pokemonsInfo);

  const choosePokemon = () => {
    const pokemon = pokemons.find((item) => item.name === name);
    dispatch(getPokemonDetails(pokemon));
  };
  return (
    <li className="list-item" onClick={choosePokemon}>
      <div className="imgBox">
        <img src={img} alt={`pokemon ${name} avatar`} />
      </div>
      <p className="name">{name}</p>
    </li>
  );
};
