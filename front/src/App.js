import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Fav/Fav'
import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';

function App () {

  //! HOOKS
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/')
  }, [access]);


  //! CREDENCIALES FAKES
  const username = 'chinardo@email.com';
  const password = 'chinardo10';


  //! FUNCIONES
  function onSearch(id) {
    const URL_BASE = 'http://localhost:3001/rickandmorty';
    // const KEY = '3e8950feeb2e.eebbc02f058e931a9228';

    fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('No hay personajes con ese ID');
        }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((chars) => chars.id !== id))
  }
  
  const login = (data) => {
    if (data.username === username && data.password === password) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Datos incorrectos')
    }
  };


  //!APP

  return (
    <div className={styles.App}>
    {pathname !== '/' && <Nav onSearch={onSearch} />}
    <Routes>
      <Route path='/' element= {<Form login={login} />} />
      <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/>} />
      <Route path='/about' element={<About />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/detail/:id' element={<Detail />}/>
    </Routes>
    </div>
  )
}

export default App
