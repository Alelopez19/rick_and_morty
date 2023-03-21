
const validation = (data, errors) => {
    const errores = {...errors};
    
    //! USERNAME
    if (!data.username) 
    {errores.username = 'Escribir un username';}
    else if (data.username.length > 35)
    {errores.username = 'Debe contener menos de 35 caracteres';}
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(data.username))
    {errores.username = 'Email Invalido'}
    else 
    {errores.username = ''};
    
    //! PASSWORD
    if (data.password.length < 6 && data.password.length < 10){
        errores.password = 'Longitud de password invalida'}
    else if (!/\d/.test(data.password)){
        errores.password = 'Debe contener al menos un numero'
    }
    else {
        errores.password = ''
    }

    return errores;
};



export default validation;