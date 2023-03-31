import { Link } from 'react-router-dom';
import styles from './Card.module.css';   
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions';

function Card({ id, name, species, gender, image, onClose, myFavorites}) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   
   const agregarFav = (character) => {
      axios.post('http://localhost:3001/rickandmorty/fav', character)
      .then(res => console.log('ok'));
   };

   const eliminarFav = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert('Eliminado con exito')
   };

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         eliminarFav(id);
      } else {
         setIsFav(true);
         agregarFav({ id, name, species, gender, image});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){setIsFav(true);}
      });
   }, [myFavorites])
   
   return (
      <>
      <div className={styles.divCarta}>
         { isFav ? 
         (<button onClick={handleFavorite} className={styles.corazon} >❤️</button>) : 
         (<button onClick={handleFavorite} className={styles.corazon} >🤍</button>)}
         <button className={styles.buttonX} onClick={() => onClose(id)}>X</button>
         <h2 className={styles.h2} > 
         <Link to={`/detail/${id}`}>{name}</Link>
         </h2>
         <img className={styles.img} src={image} alt="" />
         <h2 className={styles.h2} > {species} </h2>
         <h2 className={styles.h2} > {gender} </h2>
      </div>
      </>
   );
};


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps)(Card);
