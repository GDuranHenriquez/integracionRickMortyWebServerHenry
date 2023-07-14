import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imgBackName from '../assets/fondos/card/name.jpg'
import imgBackData from '../assets/fondos/card/data.jpg' 
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../redux/actions/actions";
import { connect } from "react-redux"; 


const DivCard = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   margin: 8px;
   width: 240px;
   height: 350px;
   color: white;
   border-radius: 10px;
   border: 1px solid rgba(255, 255, 255, 0.3);
   font-size: 10px;
   &:hover{
      box-shadow: 0px 0px 8px 8px rgba(255, 255, 255, 0.6);
   }

   .btnFavorite{
      padding: 2px;
      border-radius: 10px;
      background: none;
      background-color: none;
      position: absolute;
      height: 25px;
      width: 25px;
      top: 1px; 
      left: 1px;
   }

   .name-person {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-size: cover;
      width: 100%;
      height: 80px;
      border-radius: 10px 10px 0 0;
      border-bottom: 1px solid;
      
   }

   .btnRemoveCard{
      padding: 2px;
      border-radius: 10px;
      border: 1px solid;
      background-color: #86F533;
      position: absolute;
      top: 1px; 
      right: 1px;
      height: 20px;
      width: 20px;

   }

   .data-person{
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-size: cover;
      width: 100%;
      height: 100%;
      border-radius: 0 0 10px 10px;
      background-position: center;
      }

   .data-person > img{
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 0 0 10px 10px;
      background-size: 100% 100%;
      background-repeat:no-repeat;
      background-size: cover;
   }

   .data-card{
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-template-rows: 25px 1fr;
      width:100%;
      height:80px;
      bottom: 0px;
      opacity: 0.75;
      border-radius: 0 0 10px 10px;
      right:0px;
      position:absolute;
      font-size: 8px;
      font-weight: bold;
      grid-auto-rows: minmax(30%, 50%);
      align-items: center;
   }

   .data-card > .one {
      grid-column: 1;
      grid-row: 1;
      border-bottom: 1px solid;
      
    }
    .data-card > .two {
      grid-column: 2;
      grid-row: 1;
      border-bottom: 1px solid;
    }
   .data-card > .three {
      grid-column: 1;
      grid-row: 2;
      
   }
   .data-card > .four {
      grid-column: 2;
      grid-row: 2;
      
   }

   .link{
      width: 80%;
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 12px;
   }


`;

function Card(props){
      const data = {id: props.id,
      name: props.name,
      status: props.status,
      species: props.species,
      gender: props.gender,
      origin: props.origin,
      image: props.image,
      onClose: props.onClose};

      const id = data.id;
      const [isFav, setIsFav] = useState(false);

      function handleFavorite(){
         if(isFav){
            setIsFav(false);
            props.removeFavorite(Number(id))
         }else{
            setIsFav(true);
            props.addFavorite(data)
         }
      };

      useEffect(() => {
         props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
               setIsFav(true);
            }
         });
      }, [props.myFavorites]);

      function onCloseANDFavorite(idCharacter){
         data.onClose(idCharacter);
         if(isFav){
            setIsFav(false);
            props.removeFavorite(Number(idCharacter))
         }
      }

      return (
         <DivCard>
            {isFav?(
                  <button onClick={handleFavorite}  className="btnFavorite">❤️</button>
               ):(
                  <button onClick={handleFavorite}  className="btnFavorite">🤍</button>
               )}

            <button onClick={() => {onCloseANDFavorite(data.id)}} className="btnRemoveCard">X</button>
            <div className="name-person" style= {{backgroundImage: `url(${imgBackName})`}}>
               <Link to={`/detail/${id}`} className="link">
                  <h3>{data.name}</h3>         
               </Link>
            </div> 
            <div className="data-person" style= {{backgroundImage: `url(${data.image})`}}>
               {/* <img src = {data.image} alt= 'img'></img> */}
               <div className = 'data-card' style= {{backgroundImage: `url(${imgBackData})`}}>
                  <div className="one"><h2>{data.status}</h2></div>
                  <div className="two"><h2>{data.species}</h2></div>
                  <div className="three"><h2>{data.gender}</h2></div>
                  <div className="four"><h2>{data.origin}</h2></div>              
                  
               </div>
                          
            </div>           
         </DivCard>
      );
};

//
export function mapDispatchToProps(dispatch){
   return{
      addFavorite: function(character){
         //enviando una accion al reducer
         //const objAction = addFavorite(character)
         dispatch(addFavorite(character));
      }, 
      removeFavorite: function(id){
         dispatch(removeFavorite(id));
      }
   };
};

export function mapStateToProps(globalState){
   return {
      myFavorites: globalState.myFavorites,
   }
}

//Voy a enviar nuevas props
//connet('Recibir estados', 'despacho acciones')
export default connect(mapStateToProps, mapDispatchToProps)(Card)