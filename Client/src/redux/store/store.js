import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducer/reducer';
//const { createStore } = require('redux')

/* Para configurar el store necesito crear el reducer, ta que el createStore recibe por parametro el reducer */
let store = createStore(reducer);

export default store;