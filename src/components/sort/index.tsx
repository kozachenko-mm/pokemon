import { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';
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
  if (!value) {
   getPokemon();
  } else {
   getPokemonByTypes(value);
  }
 };

 return (
  <div className='select'>
   <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
    <InputLabel id='select'>Select the type of pokemon</InputLabel>
    <Select
     value={name}
     onChange={handleChange}
     labelId='select'
     label='Select the type of pokemon'
    >
     <MenuItem value=''>
      <em>None</em>
     </MenuItem>
     {types.map((el) => (
      <MenuItem key={el.name} value={el.name}>
       {el.name}
      </MenuItem>
     ))}
    </Select>
   </FormControl>
  </div>
 );
};
