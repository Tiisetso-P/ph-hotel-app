
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Ga from '../images/Ga.webp';
import Ga1 from '../images/Ga1.jpg';
import Ga2 from '../images/Ga2.jpg';
import Ga3 from '../images/Ga3.jpg';
import Ga4 from '../images/Ga4.jpg';
import Ga5 from '../images/Ga5.jpg';
import Ga6 from '../images/Ga6.webp';


function Grid() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='gal'>
    <Container> 

<div className='our' id='gallery'><br></br><br></br><br></br><br></br><br></br>
      <h1>_ _ _ Explore </h1>
             <h1 className='sui'>Our Suites</h1> 
        </div><br></br><br></br><br></br><br></br><br></br>

  <div className='car'>

    <Carousel className='del' activeIndex={index} onSelect={handleSelect}>

    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga"
        src={Ga}
        alt="First slide"/></a>
      
      <Carousel.Caption>
        <h3>Our Restaurants Bar and Patio </h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga1"
        src={Ga1}
        alt="Second slide"/></a>
      

      <Carousel.Caption>
        <h3>Our Upper luxury Styled Retreat Bedroom</h3>
        <h4>R 3050 </h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga2"
        src={Ga2}
        alt="Third slide"/></a>
      

      <Carousel.Caption>
        <h3>Our Upper luxury Styled Retreat Bedroom</h3>
        <h4>R 3050 </h4>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga3"
        src={Ga3}
        alt="Fourth slide"/></a>
      
      <Carousel.Caption>
        <h3>Our Styled Retreat Bedroom</h3>
        <h4>R 950 </h4>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga4"
        src={Ga4}
        alt="Fifth slide"/></a>
      
      <Carousel.Caption>
        <h3>Our Styled Retreat Bedroom with a Kitchen</h3>
        <h4>R 1350 </h4>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga5"
        src={Ga5}
        alt="Sixth slide"/></a>
      
      <Carousel.Caption>
        <h3>Our Styled Retreat Rooms</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <a href='/bookings'><img
        className="Ga6"
        src={Ga6}
        alt="Seventh slide"/></a>
      
      <Carousel.Caption>
        <h3>Our Styled Private Entertainment On a Prequest
       </h3>
       <h4></h4>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel> <br></br><br></br><br></br><br></br><br></br>
  <br></br><br></br><br></br><br></br><br></br><br></br>

  
  </div>

</Container>

</div>
  )
}
export default Grid;