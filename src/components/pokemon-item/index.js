import { useDispatch, useSelector } from 'react-redux'
import { TextTransformName } from '../../helpers/utils'
import { successFetchPokemonDetails } from '../../redux/actions/pokemonActions'
import { pokemonsInfo } from '../../redux/selectors/pokemonSelector'

export const PokemonItem = ({ name, img }) => {
	const dispatch = useDispatch()
	const pokemons = useSelector(pokemonsInfo)

	const choosePokemon = () => {
		const pokemon = pokemons.find(item => item.name === name)
		dispatch(successFetchPokemonDetails(pokemon))
	}

	return (
		<li className="list-item" onClick={choosePokemon}>
			<img src={img} alt={`pokemon ${name} avatar`} width="96px" height="96px" />
			<p className="name">{TextTransformName(name)}</p>
		</li>
	)
}
