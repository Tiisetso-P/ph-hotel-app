import {useState} from "react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from '../config/firebase';
import { useNavigate } from 'react-router-dom';

import  {signInWithEmailAndPassword} from 'firebase/auth';



function Login () {
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  

  const logIn = ()=>{
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      alert("wewa")
      navigate('/home')

    }).catch((error)=>{
      console.log(error)

    })
    
  }
 
  return(
    <div>
<Container className='con' >
<div className='LogIn'>
   <h1 className='si'>Log In</h1>
   </div>
   <br></br><br></br><br></br><br></br><br></br><br></br>
   <div>
    <img   className='lg' src={Logo} alt="login"></img>
   </div>
<Container className='tain'>
   <div className='content'>
   
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter password" />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      

        
     
      
      
       
      <Button onClick={logIn} className='but' variant="success" type="log in">
      Log In
      </Button><br></br><br></br>

      <small className="dh">Dont have an account  ?  <Button href='/signup' className="cr" >Create here </Button></small>

    
   
   </div>
</Container>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>

</Container>

</div>
  );

}
export default Login;