import React, { useState } from "react";
import { useContext } from "react";
import Table from "react-bootstrap/Table";
import contextInfo from "../Context/CartContext";
const CardDetails = () => {

  const contextItem = useContext(contextInfo)
 // console.log("item" ,contextItem.product)
  const cartItem = contextItem.product;

function totalPrice()  {
    let bill =0;
    cartItem.map(val =>{
       bill = val.price +bill;
    })
    return bill;
  }
  
  return (
    <div>
      <h2 className="text-center">Iteams Details Page</h2>


      <section className="container mt-3">
      {  cartItem.map( (val,key) =>(

           
        <div className="itemdetails d-flex mt-5">

          <div className="item-img mt-2" style={{marginLeft: '17rem'}} key={val.id}>
            <img src={val.imgdata} style={{width:"16rem"}} />
          </div>
          <div className="details  " style={{marginLeft: '10rem'}}>
            <Table>
              <tbody>
              <tr>
                <td>
                  <p>
                  
                    <strong> {val.rname}</strong> : 
                  </p>
                  <p>
                    
                    <strong>Price</strong> : {val.price}
                  </p>
                  <p>
                    
                    <strong>Dishes</strong> :  {val.address}
                  </p>
                  <p>
                    
                    <strong>Total</strong> : 3000
                  </p>
                </td>
              </tr>

              <tr>
                
              <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{val.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >	good</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
              </tr>
              </tbody>
            </Table>
          </div>
        </div>


      ))
}
      </section>

      <div className="total"> <strong>Total :{totalPrice}</strong> </div>
    </div>
  );
};

export default CardDetails;
