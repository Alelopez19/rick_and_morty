import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { agregarFav, eliminarFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';


function Card({ id, name, species, gender, image, onClose, agregarFav, eliminarFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         eliminarFav(id);
      } else {
         setIsFav(true);
         agregarFav({ id, name, species, gender, image, onClose, agregarFav, eliminarFav});
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
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

const mapDispatchToProps = (dispatch) => {
   return {
      agregarFav: (characters)=>{
         dispatch(agregarFav(characters))
      },
      
      eliminarFav: (id) => {
         dispatch(eliminarFav(id))
      }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
