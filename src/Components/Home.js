import React from "react";
import { Carousel } from 'react-bootstrap';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
export const Home=()=>{
    return(
        <div>
        <div className='container-fluid' >
        <div className="row">
        <div className="col-sm-12">
        <h3>Welcome To Educademy</h3>
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <Carousel>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>Join Us</h3>
          <p>
            We have been preparing the students for the future. Sign up for
            the best academic experience.
          </p>
          <a href="#" class="btn btn-lg btn-primary">Sign up Today</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h1>Excel</h1>
          <p>
            We offer a wealth of opportunities for you to learn and apply new
            skills and help you prepare for your professional endeavors. Check
            our courses.
          </p>
          <a href="#" class="btn btn-lg btn-primary">Course list</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h1>Admissions and Aid</h1>
          <p>
            We provide a distinctive and supportive academic environment at an
            affordable price. Check our pricing model for more information.
          </p>
          <a href="#pricing" class="btn btn-lg btn-primary">Pricing model</a>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        </div>
        </div>
        </div>
    )
}   