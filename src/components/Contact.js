import React from "react";
import Container from 'react-bootstrap/Container';
import Phone from '../images/Phone.png';
import Email from '../images/Email.png';
import Face from '../images/Face.png';
import Gram from '../images/Gram.png';



function Contact() {

return(
<Container>
  <br></br><br></br><br></br><br></br><br></br><br></br>
  <div className='con'>
    
  </div>

<div className='Contact'>
   <h1 className='us'>Contact Us</h1>
   <br></br><br></br><br></br><br></br><br></br><br></br>

   <div><img  className='ph' src={Phone} alt="contact"/><p className="num">0616368374</p> </div>
    <img  className='em' src={Email} alt="contact"/>
    
    <img  className='fa' src={Face} alt="contact"/>
  
    <img  className='in' src={Gram} alt="contact"/>
    
   


</div>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
</Container>
)

}

export default Contact;