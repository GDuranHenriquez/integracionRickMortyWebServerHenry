import React from "react";
import StyledAbout from './CSS/About.module.css'
import imgPerfil from '../assets/about/perfil.jpg'

const About = (props)=>{

  return (<div className={StyledAbout.about}>
    <div className= 'aboutText'>
      <h1>Gregorio J. Duran H.</h1>
      <h2>Gracias por visitar este proyecto de integración, espero que la temática de Rick and Morty te guste</h2>
    </div>
    <img src={imgPerfil} alt='Gregorio Duran'></img>
  </div>)

}
export default About;