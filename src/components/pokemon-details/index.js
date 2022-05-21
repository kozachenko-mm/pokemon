import { useSelector } from 'react-redux'
import { pokemonDetails } from '../../redux/selectors/pokemonSelector'
import { PokemonType, PokemonMoves, PokemonStats } from '../'
import { PokemonLoader } from '../shared'

export const PockemonDetails = () => {
	const pokemonData = useSelector(pokemonDetails)

	console.log(pokemonData)

	if (pokemonData.error) return <h2 className="error">{pokemonData.error.data}</h2>

	return (
		<div className="details">
			{pokemonData.loading ? (
				<PokemonLoader />
			) : pokemonData.info ? (
				<div className="card">
					<h2 className="name">{pokemonData.info.name}</h2>
					<img
						src={pokemonData.info.sprites.front_default}
						alt={`pokemon ${pokemonData.info.name} avatar`}
						width="96px"
						height="96px"
						className="image"
					/>
					<ul className="type-list">
						{pokemonData.info.types.map((item, i) => (
							<PokemonType key={i} type={item.type.name} />
						))}
					</ul>
					<PokemonStats stats={pokemonData.info.stats} />
					<PokemonMoves moves={pokemonData.info.moves} />
				</div>
			) : (
				<h2 className="no-card">Select a pokemon to see detailed information</h2>
			)}
		</div>
	)
}
