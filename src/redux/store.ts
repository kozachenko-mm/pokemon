import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers/rootReducer';

const enhancer = applyMiddleware(thunk);

// export const store = createStore(persistedReducer, enhancer) //production

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
