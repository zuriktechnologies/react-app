
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Form, Col, Row, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../commonComponent/ButtonComponent';
import ButtonComponent from '../commonComponent/ButtonComponent';
const AboutOurCompany = () => {
    return (
        <div>
            <section className="section-70 section-md-114 bg-index-body">
                <div className="shell">
                    <div className="range text-sm-left range-sm-justify">
                        <Row className='p-20'>
                            <Col>
                                <div className="img-wrap-2">
                                    <figure>
                                        <img srcset="https://piford.com/images/piford-images/demopix.jpg" width="720" height="450" alt="images/piford-images" className="img-responsive reveal-inline-block" />
                                    </figure>
                                </div>
                            </Col>
                            <Col> <div className="cell-sm-5 offset-top-50 offset-sm-top-0">
                                <span className="h1 home-headings-custom text-bold view-animate fadeInLeftSm delay-04 cblue cyellow offset-top-35 active"><span className="first-word">About</span> Our Company</span><br />
                                <div className="offset-top-35 offset-md-top-20 view-animate fadeInLeftSm delay-08 active">
                                    <p>Piford Technologies (www.piford.com) is a "Software Development Company" with its development and training centre at IT Park, Mohali. We have business development offices at USA, Israel, UK and Austria. We are having team of Experts of Corporate Professionals from IT Delhi, Oxford University (London), Infosys, RBS, Cadence, Sanyo, Motorola, Indiabulls, TCS Alumni having a Vast and Rich Corporate Global Experience of more than 16+ years.</p></div>
                                <div className="offset-top-30 view-animate fadeInLeftSm delay-1 active"><a href="historypiford.php" className="btn btn-ellipse btn-icon btn-icon-right btn-default">
                                    <span className="icon fa-arrow-right"></span><ButtonComponent  variant="outline-warning" buttonTitle={'Learn More'}/></a></div>
                            </div></Col>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutOurCompany;