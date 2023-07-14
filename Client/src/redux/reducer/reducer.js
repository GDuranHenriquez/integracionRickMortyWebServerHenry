import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, FIRTER_RESET } from "../actions/types";

const initialGlobalState = {
  myFavorites: [],
  allCharacters: [],
  access: false,
  aunMas: [],
  sesion: {user: 'gregorioduran123@gmail.com', pass: 'gregorio1'},
}

export default function rootReducer(state = initialGlobalState, action){
  //Nos fijamos por el type de la accion.
  switch(action.type){
    case ADD_FAV:
      var copy = [...state.allCharacters, action.payload]
      return {...state, myFavorites:copy,  allCharacters: [...copy] };
    case REMOVE_FAV:
      return {...state, myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),  allCharacters: state.allCharacters.filter(fav => fav.id !== action.payload)};
    case FILTER:
      return {...state, myFavorites: state.allCharacters.filter(pj => pj.gender === action.payload)};
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
      return {...state, myFavorites:[...state.allCharacters] };
    default:
      return {...state};
  }

};