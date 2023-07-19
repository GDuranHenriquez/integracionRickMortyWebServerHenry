import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk';
//const { createStore } = require('redux')

/* Para configurar el store necesito crear el reducer, ta que el createStore recibe por parametro el reducer */
let store = createStore(reducer, 
  composeWithDevTools(applyMiddleware(thunk)));

//composeWithDevTools(applyMiddleware(thunk))
//Le pasamos como parametros los middleware que queremos utilizar.

export default store;