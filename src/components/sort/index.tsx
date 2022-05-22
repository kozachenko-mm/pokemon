import { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Sort: React.FC = () => {
  const { getAllPokemonTypes, getPokemon, getPokemonByTypes } = useActions();
  const { types } = useTypedSelector((state) => state.pokemonTypes);
  const [name, setName] = useState('none');

  useEffect(() => {
    getAllPokemonTypes();
  }, []);

  const handleChange = ({ target }: SelectChangeEvent) => {
    const { value } = target;
    setName(value);
    if (value === 'none') {
      getPokemon();
    } else {
      getPokemonByTypes(value);
    }
  };

  return (
    <div className="select">
      <p>Select the type of pokemon</p>
      <Select value={name} onChange={handleChange} labelId="select-demo">
        <MenuItem value="none">
          <em>None</em>
        </MenuItem>
        {types.map((el) => (
          <MenuItem key={el.name} value={el.name}>
            {el.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
