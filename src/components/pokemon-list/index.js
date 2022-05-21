import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../../redux/operations/pokemonOperations'
import { pokemonsInfo, pokemonsLoading, pokemonTypes } from '../../redux/selectors/pokemonSelector'
import { Pagination } from '../pagination'
import { PokemonItem } from '../pokemon-item'
import { SkeletonList } from '../sceletonList'

export const PokemonList = () => {
	const dispatch = useDispatch()
	const pokemons = useSelector(pokemonsInfo)
	const loading = useSelector(pokemonsLoading)
	const error = useSelector(pokemonTypes).error

	useEffect(() => {
		if (pokemons.length <= 0) {
			dispatch(getPokemon())
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (error) return <h2 className="error"> Opps! somthing went wrong!</h2>

	return (
		<div className="block">
			<ul className="list">
				{!loading ? (
					pokemons.map(pokemon => (
						<PokemonItem key={pokemon.id} name={pokemon.name} img={pokemon.sprites.front_default} />
					))
				) : (
					<SkeletonList />
				)}
			</ul>
			<Pagination />
		</div>
	)
}
