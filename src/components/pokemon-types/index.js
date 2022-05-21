import React from 'react'

export const PokemonType = ({ type }) => {
	return (
		<li className={`${type} type-item`}>
			<span>{type}</span>
		</li>
	)
}
