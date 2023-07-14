import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import  { Provider }  from 'react-redux'
import store from './redux/store/store'


ReactDOM.render(
  //Encierro mi app para que funcionen las configuraciones de las Routes en app.js
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')  
)
