import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Card from 'react-bootstrap/Card';
import logo1 from '../images/logo.png';
import Container from 'react-bootstrap/Container';
import { collection, addDoc } from "firebase/firestore"; 
import '../config/firebase';
import { getFirestore } from "firebase/firestore";
import { db } from "../config/firebase";





function Bookings() {
const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [email,setEmail]=useState('');
    const [time,setTime]=useState('');
    const [checkin,setCheckin]=useState('');
    const [checkout,setCheckout]=useState('');
    const [from,setFrom]=useState('');
    const [people,setPeople]=useState('');
    const [person,setPerson]=useState('');
    const [phone,setPhone]=useState('');
    const [number,setNumber]=useState('');
   
    
    
    
  
 const BookNow=()=>{
    

    try {
        const docRef =  addDoc(collection(db, "users"), {
          First_Name: name,
          Last_Name: surname,
          Email_Address: email,
          Check_in: from,
          Check_out:time,
          People: person,
          Phone: number,

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        
      }
   }

  return (
    <Container>
    <div  className="go">
<Card>
        <Card.Img variant="top" src={logo1}  alt="homepage"/>
      </Card>
     </div>


    <div className='bkg'>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>first Name</Form.Label>
        <Form.Control type="text" placeholder="First Name"   onChange={(event) => setName(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your User name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name"  onChange={(event) => setSurname(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(event) => setEmail(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Check Inn</Form.Label>
        <Form.Control type="text" placeholder="Enter Check in"  onChange={(event) => setCheckin(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Check Out</Form.Label>
        <Form.Control type="text" placeholder="Enter Check out"  onChange={(event) => setCheckout(event.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>People </Form.Label>
        <Form.Control type="text" placeholder="Enter Person(s)"  onChange={(event) => setPeople(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone number"  onChange={(event) => setPhone(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={BookNow}>
        Submit
      </Button>
    </div>
    </Container>
  );
}

export default Bookings;