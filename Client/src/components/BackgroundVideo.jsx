import React from "react";
import rick_one from '../assets/fondos/rick_one.mp4'

export default function BackgroundVideo(){
  return (<div className='backgroundVideo'>
    <div className="overly"></div>
    <video 
      src = {rick_one} 
      autoPlay 
      loop 
      muted 
      width="100%" 
      height="100%"/>
  </div>)
}