import axios from 'axios';
import { fetchAllPokemons, fetchPokemonsInfo } from '../actions/pokemonActions';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const getPokemon = () => async (dispatch) => {
  try {
    const { data } = await axios('https://pokeapi.co/api/v2/pokemon');
    dispatch(fetchAllPokemons(data));
    console.log('first', data);

    const pockemon = await Promise.all(
      data.results.map(async (el) => {
        const { data } = await axios(el.url);
        return data;
      })
    );
    dispatch(fetchPokemonsInfo(pockemon));
  } catch (error) {
    console.log(error);
  }
};
