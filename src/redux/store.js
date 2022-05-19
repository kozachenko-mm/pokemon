import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemonReducer } from './reducers/pokemonReducer';

const rootReducer = combineReducers({ pokemon: pokemonReducer });
const enhancer = applyMiddleware(thunk);

// export const store = createStore(persistedReducer, enhancer) //production

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
