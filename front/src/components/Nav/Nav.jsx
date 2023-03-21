import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'



export default function Nav(props) {
    return (
        <div className={styles.navBar}>
            <Link to='/'>
                <button className={styles.btn}>INICIO</button>
            </Link>
            <Link to='/home'>
            <button className={styles.btn}>HOME</button>
            </Link>

            <Link to='/about'>
            <button className={styles.btn}>ABOUT</button>
            </Link>

            <Link to='/favorites'>
            <button className={styles.btn}>FAVORITOS</button>
            </Link>
            
            <SearchBar onSearch = {props.onSearch} />
        </div>
    );
}