import { ADD_FAV, ACCESS, ORDER, FILTER, FIRTER_RESET, ADD_CHARACTER, NEW_CHARACTERS } from "./types";

import axios from "axios";

// actions create
/* export function addFavorite(objCharacter){
  return {type: ADD_FAV, payload: objCharacter}
}; */

// ACTION | addFav
export const addFavorite = (character) => {
  //console.log(character)
  const endpoint = 'http://localhost:3001/rickandmorty/favorites';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  };
};

/* export function removeFavorite(id){
  return {type: REMOVE_FAV, payload: id}
}; */

// ACTION | removeFav
export const removeFavorite = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/favorites/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: 'REMOVE_FAV',
           payload: data,
     });
     });
  };
};

export function filterCards(gender){
  return {
    type: FILTER,
    payload: gender,
  };
};

export function orderCards(orderType){
  return{
    type: ORDER,
    payload: orderType,
  };
};

export function filterReset(){
  return {
    type: FIRTER_RESET,
  }
};

export function Access(access){
  return {
    type: ACCESS,
    payload: access,
  }
}

export function AddCharacter(character){
  return {
    type: ADD_CHARACTER,
    payload: character,
  }
}

export function NewCharacters(characters){
  return {
    type: NEW_CHARACTERS,
    payload: characters,
  }
}