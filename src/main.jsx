import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import  CartProvider from './Context/CartContext.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
<BrowserRouter basename='/React-project'>
 
 
    
    <App />
    
 
    
 
  </BrowserRouter>
  
  </React.StrictMode>,

)
