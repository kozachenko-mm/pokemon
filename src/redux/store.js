import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { pokemonDetailsReducer } from './reducers/pokemonDetailsReducer'
import { paginationReducer } from './reducers/paginationReducer'
import { pokemonListReducer } from './reducers/pokemonListReducer'
import { pokemonTypesReducer } from './reducers/pokemonTypesReducer'

const rootReducer = combineReducers({
	pokemonDetails: pokemonDetailsReducer,
	pagination: paginationReducer,
	pokemonList: pokemonListReducer,
	pokemonTypes: pokemonTypesReducer,
})
const enhancer = applyMiddleware(thunk)

// export const store = createStore(persistedReducer, enhancer) //production

export const store = createStore(rootReducer, composeWithDevTools(enhancer))
