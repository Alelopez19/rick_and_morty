import { AGREGAR_FAV, ELIMINAR_FAV, FILTER, GET_FAVORITES, ORDER} from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case AGREGAR_FAV:
            return {
                ...state, 
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };

        case ELIMINAR_FAV:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
            };

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
            };

        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload
            };

        default:
            return {...state}
    }
};

export default rootReducer;