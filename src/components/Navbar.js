import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux/es/hooks/useSelector'; // for getting the updated state form the redux store

export default function NavbarPanel() {

  const cartProducts = useSelector(state=>state.cart)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand to="/" as={Link}>Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Navbar.Toggle/>
       <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
        <Nav.Link to="/cart" as={Link}>My Cart {cartProducts.length}</Nav.Link>
        </Navbar.Text>
       </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
