import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./style.css"




function AppNavbar() {
    return (
        <>
  <Navbar  expand="lg" className="mt-5">
    <Navbar.Brand as={Link} to="/" className="ml-5 name">Jason Meli</Navbar.Brand>
    <Nav className="ml-auto mr-5">
      <Link className="link mr-5" to="/">About</Link>
      <Link className="link mr-5" to="/Contact">Contact</Link>
      <Link className="link mr-3" to="/Portfolio">Portfolio</Link>
    </Nav>
  
  </Navbar>
    </>
    )
}



export default AppNavbar;
