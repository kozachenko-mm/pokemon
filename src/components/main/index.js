import { PockemonDetails } from '../pokemon-details'
import { PokemonList } from '../pokemon-list'
import { Search } from '../'
import { useSelector } from 'react-redux'
import { pokemonsError } from '../../redux/selectors/pokemonSelector'
import { Sort } from '../sort'

export const Main = () => {
	const error = useSelector(pokemonsError)

	if (error) return <h2 className="error">Opps!!! Somsing went wrong!</h2>

	return (
		<main className="main">
			<div className="dashboard">
				<Sort />
				<Search />
			</div>
			<div className="content">
				<PokemonList />
				<PockemonDetails />
			</div>
		</main>
	)
}
