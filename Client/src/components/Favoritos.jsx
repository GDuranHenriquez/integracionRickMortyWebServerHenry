import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Card from "./Card";
import imgBackName from '../assets/fondos/card/name.jpg'
//import { addFavorite, removeFavorite } from "../redux/actions/actions";
import { filterCards, orderCards, filterReset } from "../redux/actions/actions";

const DivContainer = styled.div`
   max-width: 80%;
   display: flex;
   flex-wrap: wrap;
   padding: 10px;
   margin: 120px auto;
   justify-content: center;

   .container-cards {
      max-width: 100%;
      display: flex;
   }
   .btnRemoveCard{
      //display: none;
   }
   .slects-filter{
      display:flex;
      justify-content: center;
      width: 100%;
      height: 40px;
      font-size: 16px;
      gap: 10px;
      select{
         background-color: #57dc57;
         height: 30px;
         width: 140px;
         font-size: 14px;
         color: black;
         font-weight: bold;
         border-radius: 5px;
         padding: 4px;
      }
      button{
         background-image: url(${imgBackName});
         height: 30px;
         width: 80px;
         font-size: 16px;
         border-radius: 5px;
         padding: 4px;
         color: white;
         font-weight: bold;
      }
   }
`
export default function Favoritos(props){

   const favorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();
   const [booleano, setBooleano] = useState(false);
   const [filterGender, setFilterGender] = useState('');

   function handleOrder(event){
      dispatch(orderCards(event.target.value));
      setBooleano(!booleano);
   };
   function handleFilter(event){
      switch (event.target.value) {
         case 'unknown':
            setFilterGender('unknown');
            dispatch(filterCards(event.target.value));            
            break;
         case 'Genderless':
            setFilterGender('Genderless');
            dispatch(filterCards(event.target.value));            
            break;
         case 'Female':
            setFilterGender('Female');
            dispatch(filterCards(event.target.value));            
            break;
         case 'Male':
            setFilterGender('Male');
            dispatch(filterCards(event.target.value));            
            break;      
         default:
            setFilterGender('');
            dispatch(filterReset());
            break;
      }
     /*  if(!event.target.value){
         dispatch(filterReset());
      }else{
         dispatch(filterCards(event.target.value));
      } */
   };
   function onClickReset(){
      setFilterGender('');
      dispatch(filterReset());
   }

  return (<DivContainer>
      <div className="slects-filter">
         <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
         </select>

         <select value = {filterGender} onChange={handleFilter}>
            <option ></option>
            <option value="unknown">UNKNOWN</option>
            <option value="Genderless">GENDERLESS</option>
            <option value="Female">FEMALE</option>
            <option value="Male">MALE</option>
         </select>
         <button onClick={onClickReset}>RESET</button>
      </div>
      
      
      
         {favorites.map((elem) => 
         (<Card
            key ={elem.id}
            id = {elem.id}
            name={elem.name}
            status={elem.status}
            species={elem.species}
            gender={elem.gender}
            origin={elem.origin}
            image={elem.image}
            onClose={props.onClose}
         />)
      )}
      
    
  </DivContainer>)
};

/* export function mapStateToProps(globalState){
  return {
     myFavorites: globalState.myFavorites
  }
} */


//export default connect(mapStateToProps, null)(Favoritos);