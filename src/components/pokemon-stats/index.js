import { TextTransformName } from '../../helpers/utils'

export const PokemonStats = ({ stats }) => {
	return (
		<div className="details_block">
			<h4 className="details_title">Stats:</h4>
			<ul className="details_list details_list--flex">
				{stats.map((item, i) => (
					<li key={i} className="details_listItem">
						<p>
							<strong>{TextTransformName(item.stat.name)}:</strong> <span>{item.base_stat}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}
