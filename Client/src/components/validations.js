export function validate(datos){
  const regex = new RegExp(/\S+@\S+\.\S+/);
  const regexOneNumber = new RegExp(/\d/);

  let incorrect = {};
  /* if(datos.username.lenght <= 4){
    incorrect.username = 'Username must be 5 characters long least'
  } */
  if(datos.email === ''){
    incorrect.email = 'Empty email...'
  }else if(!regex.test(datos.email)){
    incorrect.email = 'You must enter a valid email'
  }else if(datos.email > 35){
    incorrect.email = 'Username must be less than 35 characters long'
  }

  if(!regexOneNumber.test(datos.password)){
    incorrect.password = 'your password must have at least one number'
  }else if(datos.password.length < 5){
    incorrect.password = 'Must be 6 to 10 characters long'
  }else if(datos.password.length >= 11){
    incorrect.password = 'Must be 6 to 10 characters long'
  }
  return incorrect;
}

