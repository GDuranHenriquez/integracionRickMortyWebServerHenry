import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, FIRTER_RESET } from "./types";
// actions create
export function addFavorite(objCharacter){
  return {type: ADD_FAV, payload: objCharacter}
};

export function removeFavorite(id){
  return {type: REMOVE_FAV, payload: id}
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
