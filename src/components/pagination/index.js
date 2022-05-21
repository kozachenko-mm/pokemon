import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../../redux/operations/pokemonOperations'
import { getPagination } from '../../redux/selectors/pokemonSelector'
import { Button } from '../shared'

export const Pagination = () => {
	const pagination = useSelector(getPagination)
	const dispatch = useDispatch()

	const onPrevHandler = () => {
		dispatch(getPokemon(pagination.previous))
	}
	const onNextHandler = () => {
		dispatch(getPokemon(pagination.next))
	}

	if (!pagination.previous && !pagination.next) return

	return (
		<div className="button-block">
			<Button type="button" onClick={onPrevHandler} disabled={!pagination.previous} variant="prev">
				previous
			</Button>
			<Button type="button" onClick={onNextHandler} disabled={!pagination.next} variant="next">
				next
			</Button>
		</div>
	)
}
