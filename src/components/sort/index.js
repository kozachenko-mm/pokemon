import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	getAllPokemonTypes,
	getPokemon,
	getPokemonByTypes,
} from '../../redux/operations/pokemonOperations'
import { pokemonTypes } from '../../redux/selectors/pokemonSelector'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export const Sort = () => {
	const dispatch = useDispatch()
	const typesPokemon = useSelector(pokemonTypes)
	const [value, setValue] = useState('none')

	useEffect(() => {
		dispatch(getAllPokemonTypes())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleChange = e => {
		const value = e.target.value
		setValue(value)
		if (value === 'none') {
			dispatch(getPokemon())
		} else {
			dispatch(getPokemonByTypes(value))
		}
	}

	return (
		<div className="select">
			<p>Select the type of pokemon</p>
			<Select value={value} onChange={handleChange} labelId="select-demo">
				<MenuItem value="none">
					<em>None</em>
				</MenuItem>
				{typesPokemon.types.map(el => (
					<MenuItem key={el.name} value={el.name}>
						{el.name}
					</MenuItem>
				))}
			</Select>
		</div>
	)
}
