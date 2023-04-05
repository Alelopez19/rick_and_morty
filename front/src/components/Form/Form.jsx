import { useState } from 'react';
import validation from './validation';
import styles from './Form.module.css'

const Form = ({login}) => {

    const [data, setData] = useState({
        username:'',
        password:'',
    });

    const [errors, setErrors] = useState({
        username:'',
        password:'',
    })
    
    const handlerChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setData({...data, [property]: value});
        setErrors(validation({...data, [property]: value}, errors))
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        login(data);
    };



    return(
        <form className={styles.formulario} onSubmit={handlerSubmit} >
            <div className={styles.username} >
                <label htmlFor='username' className={styles.label} >Username: </label>
                <input type = 'text' 
                name = 'username' 
                value = {data.username}
                onChange = {handlerChange} 
                placeholder = 'email...' 
                className = {errors.username ? styles.mal : styles.bien} />
                <p className={styles.span}> {errors.username}</p>
            </div>
            <div className={styles.password} >
                <label htmlFor='password' className={styles.label} >Password:</label>
                <input 
                type = 'text' 
                name = 'password' 
                value = {data.password} 
                onChange = {handlerChange} 
                placeholder ='password...' 
                className = {errors.username ? styles.mal : styles.bien}/>
                <p className={styles.span}>{errors.password}</p>
            </div>
                <button className={styles.btn} >LOGIN</button>
        </form>
    )

};

export default Form;