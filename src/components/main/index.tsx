import { PockemonDetails, PokemonList, Sort, Search } from '..';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Main: React.FC = () => {
 const { error } = useTypedSelector((state) => state.pokemonList);

 if (error) return <h2 className='error'>Opps!!! Somsing went wrong!</h2>;

 return (
  <main className='main'>
   <div className='dashboard'>
    <Sort />
    <Search />
   </div>
   <div className='content'>
    <PokemonList />
    <PockemonDetails />
   </div>
  </main>
 );
};
