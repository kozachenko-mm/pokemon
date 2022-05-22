import { useState } from 'react'
import { useActions } from '../../hooks/useAction'
import { Button } from '../shared'

export const Search: React.FC = () => {
  const { getPokemonByName } = useActions()
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const name = value
      .trim()
      .split(' ')
      .filter((el) => el)
      .join('-')
      .toLocaleLowerCase()
    getPokemonByName(name)
    setValue('')
  }
  return (
		<form className="searchForm">
			<input name="search" value={value} onChange={onChange} placeholder="Search by name" />
			<Button onClick={handleSubmit} type="submit" variant="next" disabled={false}>
				Search
			</Button>
		</form>
  )
}
