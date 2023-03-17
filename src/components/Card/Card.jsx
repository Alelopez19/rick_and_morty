import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { agregarFav, eliminarFav } from '../../redux/action';
import { useState } from 'react';
import { connect } from 'react-redux';


function Card({ id, name, species, gender, image, onClose, agregarFav, eliminarFav}) {
   
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
   
   return (
      <>
      <div className={styles.divCarta}>
         <button className={styles.buttonX} onClick={() => onClose(id)}>X</button>
         { isFav ? 
         (<button onClick={handleFavorite}>❤️</button>) : 
         (<button onClick={handleFavorite}>🤍</button>)}
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

const mapDispatchToProps = (dispach) => {
   return {
      agregarFav: (characters)=>{
         dispach(agregarFav(characters))
      },
      
      eliminarFav: (id) => {
         dispach(eliminarFav(id))
      }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
