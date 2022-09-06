import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Room from '../images/images(8).jpg';
import Room01 from '../images/download01.jpg';
import Cube1 from '../images/Cube1.png';
import bath from '../images/bath.jpg';
import bed from '../images/bed.jpg';

function GroupExample() {
  return (
<Container>
    <div className='GroupExample'>
     <div className='our' id='suites'>
      <h1>_ _ _ Explore  </h1>
      <h1 className='acc'>Our Accomodation </h1>
        </div>
        
        
    <CardGroup>
      <Card>
        <a href='/bookings'>
        <Card.Img variant="top" src= {Room}  alt="rooms"/>
        </a>
        <Card.Body>
          <Card.Title>Delux Suite</Card.Title>
          <Card.Text>
          <img className='cube1' src={Cube1} alt="rooms" ></img>
           <h5 className='mi'>70m2</h5>
           <img className='bath' src={bath} alt="rooms" ></img>
           <h5 className='ba'>1 Bathroom</h5>
           <img className='bed' src={bed} alt="rooms" ></img>
           <h5 className='be'>2 Bedroom</h5>

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <a href='/bookings'>
        <Card.Img variant="top" src= {Room01}   alt="rooms" />
        </a>
        <Card.Body>
          <Card.Title>Executive Suite With Outdoor Poolside and Jacuzzi</Card.Title>
          <Card.Text>
           <img className='cube1' src={Cube1} alt="rooms" ></img>
           <h5 className='mi'>50m2</h5>
           <img className='bath' src={bath} alt="rooms" ></img>
           <h5 className='ba'>1 Bathroom</h5>
           <img className='bed' src={bed} alt="rooms" ></img>
           <h5 className='be'>1 Bedroom</h5>

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    
    </div>

    <a href='/bookings'><div  className='pri'>
     <h3>R 950 per Occupance</h3><br></br><h3 className='bo1'>Book Now</h3>
    </div></a>
    <a href='/bookings'><div  className='price'>
    <h3>R 3050 per Occupance</h3><br></br><h3 className='bo'>Book Now</h3>
    </div></a>


    </Container>
  );
}

export default GroupExample;