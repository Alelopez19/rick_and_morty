import axios from 'axios';
export const AGREGAR_FAV = 'AGREGAR_FAV';
export const ELIMINAR_FAV = 'ELIMINAR_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_FAVORITES = 'GET_FAVORITES'

export const getFavorites = () => {
    return async function(dispatch){
        const URL = 'http://localhost:3001';
        const response = await axios.get(`${URL}/rickandmorty/fav`);
        dispatch({ 
            type: GET_FAVORITES,
            payload: response.data
        })
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id,
    }
};