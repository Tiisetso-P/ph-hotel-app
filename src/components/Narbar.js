import React from "react";
import '../css/nav.css';
import '../css/rooms.css';
import '../css/coverpage.css';
import '../css/homepage.css';
import '../css/gallery.css';
import '../css/contact.css';
import '../css/signup.css';
import '../css/login.css';
import '../css/bookings.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../images/logo.png';


function Narbar(){

return(

  
  <Container>
    <Navbar Nav expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home"> <Card.Img className='logo' variant="top" src={logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#suites">Suites</Nav.Link>
        <Nav.Link href="#gallery">Gallery</Nav.Link>
      </Nav>
      
      

          <Form className="e-flex">
          
          <Button variant="outline-success" href="#book-now" >Book Now</Button>
          </Form>

    </Navbar.Collapse>
    </Navbar>
     
    
  </Container>


)

}

export default Narbar;





 //* <NavDropdown.Item href="#action/3.2">
  //*          Another action
   //*       </NavDropdown.Item>
   //*       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   //*       <NavDropdown.Divider />
   //*       <NavDropdown.Item href="#action/3.4">
     //*       Separated link
    //*      </NavDropdown.Item>//*


   //* <Nav>
   //*     <Nav.Link href="#deets">More deets</Nav.Link>
    //*    <Nav.Link eventKey={2} href="#memes">
      //*    Dank memes
       //* </Nav.Link>
    //*      </Nav>