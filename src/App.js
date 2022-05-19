import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Main } from './components';
import { Footer } from './components/footer';
import { getPokemon } from './redux/operations/pokemonOperations';
import { pokemonsInfo } from './redux/selectors/pokemonSelector';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
