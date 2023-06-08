import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import { FaUser} from 'react-icons/fa';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import MyLogo from '../pictures/stylewise-logo-zip-file/png/logo-no-background.png'


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={MyLogo} alt="My Online Store Logo" height="35" className="d-inline-block align-top mr-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className='nav-elements-wrapper'>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#women">Women</Nav.Link>
          <Nav.Link href="#men">Men</Nav.Link>
          <Nav.Link href="#kids">Kids</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          </div>
          <div className='icon-wrapper'>
          <Nav.Link className="ml-3" href="#login">
            <FaUser />
          </Nav.Link>
          <Nav.Link className="ml-3" href="#search">
            <FaSearch />
          </Nav.Link>
          <Nav.Link className="ml-3" href="#cart">
            <FaShoppingCart />
          </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <div className='header'>
    //     <h1><Link to='/'>Bmazon</Link></h1>
    //     <input className='search-bar' type='text' placeholder='Search'/>
    //     <div className='account'>
    //         <h5>Sign In</h5>
    //         <button>Cart</button>
    //     </div>
        
    // </div>
  )
}

export default Header