import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import logo1 from '../images/logo.png';
import Narbar from './Narbar';
import Coverpage from './Coverpage';
import Rooms from './Rooms';
import Gallery from './Gallery';
import Contact from './Contact';
import Price from './Price';




function Homepage () {
  

return(
  
  <div>
  <Narbar/>
  <Coverpage/>
  <Rooms/>
  <Gallery/>    
  <Contact/>
   
  <Container className="Homepage">
  
<div className='hm' >
      
      <h1 className="mh">_ _ _ Home</h1>
        </div>

<div  className="go">
<Card>
        <Card.Img variant="top" src={logo1}  alt="homepage"/>
      </Card>
     </div>

<div className='par' >
  <h2> <br></br><br></br>About Us</h2><br></br><br></br>
<p className='para'>welcome to PH Hotels,a retreat in the diamond city of <br></br>
kimberley and where your stay is for those who are seeking an <br></br> elegance in/for comfort
is our aim to please you in comfort away from home and be of the buzzness of the grid and rather be at a 
santuary for travellers and connoisseurs of fine crafted luxury at quiet neighbourhood of klisserville in
kimberley.our aim to offer a bridge where touristic vibes of the historical town with its natural characteristic
surroundings that are designed for those who are fond of site seeking that connects you back to mother nature herself


</p>
</div>


</Container>

</div>
  
)

}
export default Homepage;