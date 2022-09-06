import { useState } from "react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth"



function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((() => {

        navigate('/home')

      }))
      .catch(error =>
        console.error(error))
  };



  return (
    <div>
      <Container className='con' id='book-now'>
        <div className='SignUp'>
          <h1 className='si'>Sign Up</h1>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <div>
          <img className='lg' src={Logo} alt="signup"></img>
        </div>
        <Container className='tain'>
          <div className='content'>

           

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter password" />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>



            <Button onClick={signUp} className='but' variant="success" type="Sign Up">
              Sign Up
            </Button>



          </div>
        </Container>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>

      </Container>

    </div>
  );

}
export default SignUp;







