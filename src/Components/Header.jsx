import React ,{ useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <div>

      <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/cart" className='text-decoration-none text-light mx-3' >Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className='text-decoration-none text-light'>Home</NavLink>
          </Nav>
          
          
    <Badge badgeContent={4} color="primary"
    
    
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
    <i className="fa fa-shopping-cart text-light" aria-hidden="true" style={{fontSize: 25, cursor: "pointer"}}></i>
    </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10}}>
        <i className='fas fa-close smallclose'
            style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}
            onClick={handleClose}
        
        ></i>
          <p style={{fontSize:22}}>This cart is empty</p>
          <img src="src\Image\cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
          
        </div>
      </Menu>
      </Navbar>
   
    </div>
  
  )


      
   
}

export default Header
