import './App.css';
import { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate  } from 'react-router-dom';

/* import Card from './components/Card.jsx'; */
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx'
import Forms from './components/Forms.jsx';
import Nav from './components/Nav.jsx';
import Favoritos from './components/Favoritos';
/* import PageNotFound from './components/PageNotFound'; */
/* import SearchBar from './components/SearchBar.jsx'; */
/* import characters, { Rick } from './data.js'; */




function App() {

   /* const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }; */

   const [characters, setCharacters]  = useState([]);
   const [scrollClass, setScrollClass] = useState('');
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   /* const login = (userData)=>{
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('Email or Password incorrect')
      }
   } */

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = "http://localhost:3001/rickandmorty/user/login/";
         const { data } = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         if(access) navigate('/home')
         else alert("User or password incorret");
           
      } catch (axiosError) {
         alert(axiosError.message);
      }
      /* const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/user/login/";
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      }); */
   }

   const onSearch = async (id) =>{      
         try {
            id = Number(id);
            const repetido = characters.filter(character => character.id === id);
            if(repetido.length > 0){
               return alert(`Este personaje con id:${id} se encuentra ya agregado.`)
            };

            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
            if ( Object.keys(data).length  > 0) {
               setCharacters((characters) => [...characters, data]);
            }else{
               alert('¡No hay personajes con este ID!');
            };
      } catch (axiosError) {
         alert(axiosError.message);
      }
      
      /* axios(`http://localhost:3001/rickandmorty/character/${id}`).then(( {data} ) =>{
           
         if ( Object.keys(data).length  > 0) {
            setCharacters((characters) => [...characters, data]);
         }
      }).catch((e) => {
         alert('¡No hay personajes con este ID!');
      }); */
   };

   useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Cambia el valor según la posición de desplazamiento en la que deseas agregar la clase
          setScrollClass('scrolled');
        } else {
          setScrollClass('');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   const onClose = (id) =>{
      const newCharacters = characters.filter(character => character.id !== id);
      setCharacters(newCharacters)

   }

   const addCardRandom = ()=>{
      const idRandom = Math.floor(Math.random() * (826 + 1));
      onSearch(idRandom)
   }

   const location = useLocation();

   // App.js
   useEffect(() => {
      !access && navigate('/');
   }, [access]);



   return (
      <div className='App'>
         {(location.pathname !== '/') ? (<Nav onSearch = {onSearch} newaddclass = {scrollClass} addCardRandom = {addCardRandom}></Nav>):null}
         {/* <BackgroundVideo ></BackgroundVideo> */}
         <BackgroundVideo ></BackgroundVideo>
         {/* <Nav onSearch = {onSearch} newaddclass = {scrollClass} addCardRandom = {addCardRandom}></Nav> */}
          <Routes>
            <Route path='/' element= {<Forms login = {login}></Forms>}></Route>
            {/* <Route path='*' element = {<Nav onSearch = {onSearch} newaddclass = {scrollClass} addCardRandom = {addCardRandom}></Nav>} /> */}
            <Route path='/home' element = {<Cards characters={characters} onClose = {onClose}/>} />
            <Route path='/about' element = {<About></About>} />
            <Route path='/detail/:id' element= {<Detail></Detail>}></Route>
            <Route path='/favorites' element= {<Favoritos onClose = {onClose} ></Favoritos>}></Route>

            {/* <Route path='/*' element={<PageNotFound></PageNotFound>}></Route> */}
            {/* <Route path="*" element={<Navigate to="/404" />} /> */}
          </Routes>
            
         
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />  */}    
      </div>
   );
}



export default App;


         
