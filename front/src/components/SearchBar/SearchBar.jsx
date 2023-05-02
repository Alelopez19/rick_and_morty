import styles from './SearchBar.module.css'
import { useState } from "react";

const SearchBar = (props) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const numRandom = () => {
      var idRandom = Math.floor(Math.random() * (826 - 1) + 1)
      return idRandom
   };

   return (
      <>
         <div>
            <button 
            className={styles.btn} 
            onClick={() => {props.onSearch(numRandom())}}>CARTA ALEATORIA</button>
         </div>
         
         <input type='search' 
         className={styles.input} 
         onChange={handleChange} />
         <button 
         className={styles.btn} 
         onClick={ () => {props.onSearch(id)}}>AGREGAR</button>
      </>
   );
}

export default SearchBar;
