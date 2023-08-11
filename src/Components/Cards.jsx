import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import { useContext } from "react";
import contextInfo from "../Context/CartContext";
import {useNavigate }from'react-router-dom'
const Cards = () => {
 
  const [data, setData] = useState(CardData);
         const contextItem = useContext(contextInfo)
         console.log(contextItem)
  const navigte = useNavigate();

  const cardDisplay = data.map((item, key) => {
    return (
      <Card style={{ width: "22rem" }} key={item.id} className="mx-2 mt-4">
        <Card.Img
          variant="top"
          src={item.imgdata}
          style={{ height: "16rem" }}
          className="mt-3"
        />
        <Card.Body>
          <Card.Title>{item.rname}</Card.Title>
          <Card.Text>Price : ₹ {item.price}</Card.Text>
          <Button variant="primary" onClick={() =>{
          
            navigte("/cart")
            
            contextItem.addToCart(item)
          
          
          }}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <h1 className="text-center">Add To Cart </h1>
      <div className="row ml-auto">{cardDisplay}</div>
    </div>
  );
};

export default Cards;
