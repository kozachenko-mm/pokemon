import axios from 'axios'
import {
	failuteFetchPokemonDetails,
	failuteFetchPokemonList,
	failuteFetchPokemonTypes,
	fetchAllPokemons,
	fetchPokemonsList,
	fetchPokemonTypesSuccess,
	startFetchPokemonDetails,
	startFetchPokemonList,
	successFetchPokemonDetails,
} from '../actions/pokemonActions'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2'

export const getPokemon =
	(url = 'https://pokeapi.co/api/v2/pokemon') =>
	async dispatch => {
		try {
			dispatch(startFetchPokemonList())

			const { data } = await axios(url)
			dispatch(fetchAllPokemons(data))

			const pokemon = await Promise.all(
				data.results.map(async el => {
					const { data } = await axios(el.url)
					return data
				}),
			)
			dispatch(fetchPokemonsList(pokemon))
		} catch (error) {
			dispatch(failuteFetchPokemonList(error))
		}
	}

export const getAllPokemonTypes = () => async dispatch => {
	try {
		const { data } = await axios('https://pokeapi.co/api/v2/type')
		dispatch(fetchPokemonTypesSuccess(data.results))
	} catch (error) {
		dispatch(failuteFetchPokemonTypes(error))
	}
}

export const getPokemonByTypes = value => async dispatch => {
	try {
		dispatch(startFetchPokemonList())
		dispatch(fetchAllPokemons({}))

		const { data } = await axios(`https://pokeapi.co/api/v2/type/${value}`)
		const pokemon = await Promise.all(
			data.pokemon.map(async el => {
				const { data } = await axios(el.pokemon.url)
				return data
			}),
		)

		dispatch(fetchPokemonsList(pokemon))
	} catch (error) {
		dispatch(failuteFetchPokemonTypes(error))
	}
}

export const getPokemonByName = name => async dispatch => {
	try {
		dispatch(startFetchPokemonDetails())

		const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
		dispatch(successFetchPokemonDetails(data))
	} catch (error) {
		dispatch(failuteFetchPokemonDetails(error.response))
	}
}
