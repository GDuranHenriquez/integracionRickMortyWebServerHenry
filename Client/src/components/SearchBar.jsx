import styled from "styled-components";
import imgBackName from '../assets/fondos/card/name.jpg'
import { useRef, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import imgData from '../assets/fondos/card/data.jpg'


const DivSearchBar = styled.div`
   border: 2px solid withe;
   padding: 10px;
   display: flex;
   margin: 5px auto;
   justify-content: center;
   width: 90%;
   height: 40px;
   align-items: center;
   justify-content: space-between;
   box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.6);
   .active{
      background-image: url(${imgData});
   }
   .divNavigate,
   .divSearch{
      display: flex;
      margin: 0;
      align-items: center;
      justify-content: center;
      width: max-content;
   }
   .divNavigate{
      gap: 15px;
   }
`
const InpSearch = styled.input`
   padding: 8px;
   height: 35px;
   width: 150px;
   border-radius: 10px;
   font-size: 16px;
`
const BtnSearch = styled.button`
   font-size: 14px;
   font-weight: bold;
   padding: 5px;
   margin-left: 10px;
   pading: 10px;
   border-radius: 10px;
   height: 35px;
   width: 70px;
   color: white;
   /* border: none; */
   
   &:hover{
      box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.6);
   }
`
const BtnAddRamdon = styled.button`
   background-size: 100% 100%;
   background-repeat:no-repeat;
   background-size: cover;
   padding: 5px;
   height: 40px;
   width: 110px;
   border-radius: 10px;
   font-size: 13px;
   color: white;
   font-weight: bold;
   margin-left: 10px;
`
const NavbarLink = styled(Link)`
   background-image: url(${imgBackName});
   background-size: 100% 100%;
   background-repeat:no-repeat;
   background-size: cover;
   padding: 5px;
   height: 25px;
   width: 70px;
   text-decoration: none;
   border-radius: 10px;
   font-size: 13px;
   color: white;
   font-weight: bold;
   margin: 0px auto 0px 0px;
   align-content: center;
   &:hover{
      background-image: url(${imgData});
   };   
`


export default function SearchBar(props) {

   const [id, setId] = useState('');
   const inpSearchRef = useRef(null);

   const  handleChange = (e) =>{
      const idInput = e.target.value;
      setId(idInput);           
   };
   const handleClick = () => {
      inpSearchRef.current.focus();
    };

   return (
      <DivSearchBar className = 'search-box'>

         <div className = 'divNavigate'>
            <NavbarLink to='/about' className={({ isActive}) => isActive ? "active" : undefined} >ABOUT</NavbarLink>

            <NavbarLink to='/home' className={({ isActive}) => isActive ? "active" : undefined} >HOME</NavbarLink>

            <NavbarLink to='/create' className={({ isActive}) => isActive ? "active" : undefined} >ADD CHARACTER</NavbarLink>

            <NavbarLink to='/favorites' className={({ isActive}) => isActive ? "active" : undefined} >FAVORITES</NavbarLink>
         </div>        

         <div className = 'divSearch'>
            <InpSearch type='search' ref={inpSearchRef} onChange = {handleChange} value = {id}/> 

            <BtnSearch onClick={() => {props.onSearch(id); setId(""); handleClick()}} style= {{backgroundImage: `url(${imgBackName})`}}>Agregar</BtnSearch>

            <BtnAddRamdon style= {{backgroundImage: `url(${imgBackName})`}} onClick = {()=> {props.addCardRandom()}}>AGREGAR ALEATORIO</BtnAddRamdon>
         </div>
      </DivSearchBar>
      
   );
}
