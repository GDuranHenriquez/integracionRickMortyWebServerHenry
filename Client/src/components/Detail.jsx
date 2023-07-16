import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StyledDetail from './CSS/Detail.module.css'

const Detail = ()=>{
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/onSearch/${id}`).then(({ data }) => { 
      if (Object.keys(data).length > 0) {
          setDetail(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    }).catch((e) => {
      alert('¡No hay personajes con este ID!');
   });
    return setDetail({});
 }, [id]);
 /* const { url } = character.origin; */
   
  return (<div className={StyledDetail.container}>
    <div className={StyledDetail.divData}>
      <section className={StyledDetail.dataPerson}>
        <span className={StyledDetail.nombre}>Nombre: {detail.name ? detail.name : 'Nombre Desconocido'}</span>
        <span> ❣ Status: {detail.status ? detail.status : 'Status desconocido'}</span>
        <span> 👽 Specie: {detail.species ? detail.species : 'Specie desconocida'}</span>
        <span> 👥 Gender: {detail.gender ? detail.gender : 'Gender no especificado'}</span>
        <span> 🌍 Origin: {detail.origin?.name}</span>
      </section>
      
    </div>
    <div className={StyledDetail.divImage}>
      <img src={detail.image} alt={detail.name} />
    </div>
  </div>)
}

export default Detail;