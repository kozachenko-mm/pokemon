import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { successFetchPokemonDetails } from '../../redux/actions/pokemonActions'
import { getPokemonByName } from '../../redux/operations/pokemonOperations'
import { Button } from '../shared'

export const Search = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const onChange = ({ target }) => setValue(target.value)

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(successFetchPokemonDetails({}))
		const name = value
			.trim()
			.split(' ')
			.filter(el => el)
			.join('-')
			.toLocaleLowerCase()
		dispatch(getPokemonByName(name))
		setValue('')
	}
	return (
		<form className="searchForm">
			<input name="search" value={value} onChange={onChange} placeholder="Search by name" />
			<Button onClick={handleSubmit} type="submit" variant="next">
				Search
			</Button>
		</form>
	)
}
