export const AGREGAR_FAV = 'AGREGAR_FAV';
export const ELIMINAR_FAV = 'ELIMINAR_FAV';

export const agregarFav = (characters) => {
    return {
        type: AGREGAR_FAV,
        payload: characters,
    };
};

export const eliminarFav = (id) => {
    return {
        type: ELIMINAR_FAV,
        payload: id,
    };
};