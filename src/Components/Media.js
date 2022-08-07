import React from "react";
/*import { Carousel } from 'react-bootstrap';*/

import seminar from '../images/seminar.jpg';
import '../styles/styles.css';
export const Media=()=>{
    return(
        <div className="header">
            <div className="img parent">
                <div className="img">
                    <img src={seminar} alt="seminar"/>
                </div>  
            </div>
            <div className="img-content">
                <h2>EVENTS AND NEWS</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                </span>
            </div>
        </div>
        /*
        <div>
        <div className='container-fluid' >
        <div className="row">
        <div className="col-sm-12">
        <h3>React Bootstrap Carousel</h3>
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
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        </div>
        </div>
        </div>
        */
    )
}   