import React, {useState} from "react";
import StyledForms from './CSS/Form.module.css'
import imgLogin from '../assets/fondos/login.jpeg'
import {validate} from './validations'

export default function Form({login}){
  const [user, setUser] = useState({email: '', password:''});
  const [errors, setErrors] = useState({});

  function handleSubmit(event){
    event.preventDefault();
    login(user);
  };

  /* function validate(datos){
    const regex = new RegExp(/\S+@\S+\.\S+/);

    let incorrect = {};
     if(datos.username.lenght <= 4){
      incorrect.username = 'Username must be 5 characters long least'
    } 
    if(!regex.test(datos.email)){
      incorrect.email = 'You must enter a valid email'
    }

    return incorrect;
  } */

  function handleChange(event){
    /* if(event.target.name === 'nombre'){
      setUser({...user, username: event.target.value});
    }else if(event.target.name === 'email'){
      setUser({...user, email: event.target.value});
    }else{
      setUser({...user, password: event.target.value});
    } */

    setUser({...user, [event.target.name] : event.target.value});
    setErrors(validate({...user, [event.target.name] : event.target.value}));
  };

  return <div className={StyledForms.container}>
    <form onSubmit={handleSubmit} className={StyledForms.formData}>
      {/* <label>Userneme</label>
      <input key= '1' name='username' onChange={handleChange} value={user.username} type="text" placeholder="username..." />

      {errors.username ? (
        <span  style={{ color:"withe" }}>{errors.username}</span>
        ) : null} */}
      <img className={StyledForms.imgLogin} src={imgLogin} alt="" />      
      <div className={StyledForms.sectionForm}>
        <label className={StyledForms.labelInput}>Email:</label>        
        <input key= '1' className={StyledForms.inpText} name='email' onChange={handleChange} value={user.email} type="text" placeholder="email..." />
        {errors.email ? (<span style={{ color:"red" }}>{errors.email}</span>):null}

        <label className={StyledForms.labelInput}>Password:</label>
        <input key= '2' className={StyledForms.inpText} name='password' onChange={handleChange} value={user.password} type="password" placeholder="password..."/>
        {errors.password ? (<span style={{ color:"red" }}>{errors.password}</span>):null}
        <input type="submit" className={StyledForms.inpSubmit} onSubmit={handleSubmit}></input>
      </div>
    </form>
  </div>

};