import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, FIRTER_RESET, ACCESS, ADD_CHARACTER, NEW_CHARACTERS } from "../actions/types";

const initialGlobalState = {
  myFavorites: [],
  allCharacters: [],
  allFavorites: [],
  access: false,
  aunMas: [],
}

export default function rootReducer(state = initialGlobalState, action){
  //Nos fijamos por el type de la accion.
  switch(action.type){
    case NEW_CHARACTERS:
      return {...state, allCharacters: action.payload};
    case ADD_CHARACTER:
      return {...state, allCharacters:[...state.allCharacters, action.payload]};
    case ADD_FAV:
      return {...state, myFavorites:action.payload,  allFavorites: action.payload };
    case REMOVE_FAV:
      return {...state, myFavorites: action.payload, allFavorites: action.payload };
      /* state.myFavorites.filter(fav => fav.id !== action.payload),  allCharacters: state.allCharacters.filter(fav => fav.id !== action.payload) */
    case FILTER:
      return {...state, myFavorites: state.allFavorites.filter(pj => pj.gender === action.payload)};
    case ORDER:
      var copy = state.myFavorites.sort((a, b) => {
        if(action.payload === 'A'){
          if(a.id > b.id) return 1;
          if(a.id < b.id) return -1;
          return 0;
        }else{
          if(a.id > b.id) return -1;
          if(a.id < b.id) return 1;
          return 0;
        };
      });
      return {...state, myFavorites: copy};
    case FIRTER_RESET:
      return {...state, myFavorites:[...state.allFavorites] };
    case ACCESS:
      return {...state, access: action.payload}
    default:
      return {...state};
  }

};