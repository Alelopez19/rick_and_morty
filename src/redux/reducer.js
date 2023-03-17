import { AGREGAR_FAV, ELIMINAR_FAV } from "./action";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case AGREGAR_FAV:
            return {...state, myFavorites: [...state.myFavorites, state.payload]};

        case ELIMINAR_FAV:
            return {...state, myFavorites: state.myFavorites.filter(char => char.id !== action.payload)};

        default:
            return {...state}
    }
};

export default rootReducer;