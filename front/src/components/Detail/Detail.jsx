import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import style from './Detail.module.css'

function Detail (){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    const URL_BASE = 'http://localhost:3001/rickandmorty/';
    // const KEY = '3e8950feeb2e.eebbc02f058e931a9228';

    useEffect(() => {
        fetch(`${URL_BASE}/detail/${id}`)
        .then((response) => response.json())
        .then((character) => {
            if (character.name) {
                setCharacter(character);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
        }, [id]);
    
    return(
        <>
            {character.name ? (
                <>
                <p className={style.h1}>Nombre: {character.name} </p>
                <p className={style.h1}>Status: {character.status} </p>
                <p className={style.h1}>Species: {character.species} </p>
                <p className={style.h1}>Gender: {character.gender} </p>
                <p className={style.h1}>Origin: {character.origin?.name} </p>
                <img className={style.img} src={character.image} alt="" />
                </>
                ) : 
                (<p className={style.h1}>Loading...</p>)
        }
        </>
    )
}

export default Detail