import { useState } from 'react';
import StyleNav from './CSS/Nav.module.css'
import SearchBar from './SearchBar.jsx';


function onSearch(){

}

const Nav = (props)=>{
  
  const handleClass = (nameClas) =>{
    if(nameClas){
      
      return (StyleNav.navsearch + ' ' + StyleNav.scrolled) 
    }
    return (StyleNav.navsearch)
  }

  return (<div className={handleClass(props.newaddclass)}  >
    <SearchBar onSearch = {props.onSearch} addCardRandom = {props.addCardRandom}></SearchBar>
  </div>)
};

export default Nav;

