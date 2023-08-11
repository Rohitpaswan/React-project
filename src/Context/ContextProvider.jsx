import React from 'react'
import contextInfo from './CartContext'
import { useState } from 'react'
const ContextProvider = (props) => {
    const [product , setProduct]= useState([])
    const addToCart = (item) => {
        setProduct((prevCartItems) => [...prevCartItems, item]);
      };
  return (<>
  <contextInfo.Provider value={{product,setProduct,addToCart}}>
{props.children}



  </contextInfo.Provider>
  
  
  
  
  
  </>
  )
}

export default ContextProvider
