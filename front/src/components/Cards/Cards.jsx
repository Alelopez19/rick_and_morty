import Card from '../Card/Card';
import styles from './Cards.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavorites } from '../../redux/actions';

export default function Cards({characters, onClose}) {
   const dispatch = useDispatch();
   useEffect(()=> {
      dispatch(getFavorites())
   }, []); 

   return (
      <div className={styles.Container}>
      {characters.map( ({ id, name, species, gender, image}) => {
         return(
            <>
            <Card
            key= {id}
            id = {id}
            name = {name}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {onClose}
            />
            </>)
         })}
         </div>
   )
}
