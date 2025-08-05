
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Form,Col,Row, Image} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../commonComponent/ButtonComponent';
import AboutOurCompany from './AboutOurCompany';
import GetInTouch from './GetInTouch';
import OurServices from './OurServices';
import { useNavigate } from "react-router-dom";

 const Home = () =>{
    const navigate = useNavigate();

    return(
        <div>
            <div className='sliderContainer'>
            <Carousel>
            <Carousel.Item>
            <Row>
            <Carousel.Caption>
            <h3>Designing, Developing<br/> and Deploying affordable and efficient<br/> AI systems.</h3>
             <div className="d-flex gap-3 mb-3">
               <Button  variant="primary" buttonTitle={'About US'} onClick={()=>{ navigate("/about-us");}}/>
               <Button  variant="outline-warning" buttonTitle={'Courses Offered'} onClick={()=>{ navigate("/courses") }}/>
               </div>
                </Carousel.Caption>
                <img
                className="d-block w-100"
                src="https://piford.com/images/piford-images/banners/slider1.png"
                alt="First slide"
                />
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                <Carousel.Caption>
                <h3>Crafting Simple Solutions <br/> 
                To Complex Problems.</h3>
                 <div className="d-flex gap-3 mb-3">
               <Button  variant="primary" buttonTitle={'About US'} onClick={()=>{ navigate("/courses");}}/>
               <Button  variant="outline-warning" buttonTitle={'Courses Offered'} onClick={()=>{ navigate("/courses") }}/>
               </div>
                </Carousel.Caption>
                </Row>
                <img
                className="d-block w-100"
                src="https://piford.com/images/piford-images/banners/slider2.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                <Carousel.Caption>
                <h3>We are Thoughtful Minds.</h3>
                <p>At Piford we believe that any problem can be solved through the power<br/> of "Lateral Thinking". We train ourselves, repeatedly, to maintain the<br/> levels of creativity to continuously deliver excellence across the globe.</p>
                 <div className="d-flex gap-3 mb-3">
               <Button  variant="primary" buttonTitle={'About US'} onClick={()=>{}}/>
               <Button  variant="outline-warning" buttonTitle={'Courses Offered'} onClick={()=>{ navigate("/courses") }}/>
               </div>
                </Carousel.Caption>
                <img
                className="d-block w-100"
                src="https://piford.com/images/piford-images/banners/slider3.png"
                alt="Third slide"
                />  
                </Row>
               
                 </Carousel.Item>
            </Carousel>
            <AboutOurCompany />
            <GetInTouch />
            <OurServices/> 

            </div>
           
        </div>
    )
}

export default Home;