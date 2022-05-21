export const PokemonMoves = ({ moves }) => {
	return (
		<div className="details_block">
			<h4 className="details_title">Moves: </h4>
			<ul className=" details_list details_list--grid">
				{moves.map((item, i) => (
					<span key={i}>{item.move.name}</span>
				))}
			</ul>
		</div>
	)
}
