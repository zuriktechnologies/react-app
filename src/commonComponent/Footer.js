import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useEffect, useState } from "react";
import queryString from "query-string";
import axios from 'axios';
import { Form, Col, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="shell-wide">
                <div className="hr bg-gray-light"></div>
            </div>
            <div className="shell section-60">
                <div className="range range-lg-justify range-xs-center">
                    <Row className='row-contactUs'>
                        <Col>
                            <div className="cell-md-3 cell-lg-2">
                                <a href="index.php" className="reveal-inline-block"><img style={{ width: '180px', height: '130px' }} src="https://piford.com/images/piford-images/piford-logo.png" alt="images/piford-logo" />
                                    <div>
                                        <h6 className="barnd-name text-bold offset-top-25"></h6>
                                    </div>
                                    <div>
                                        <p className="brand-slogan text-gray text-italic font-accent"></p>
                                    </div></a>
                            </div>
                        </Col>
                        <Col>
                            <div className="cell-xs-10 cell-md-5 cell-lg-4 text-lg-left offset-top-50 offset-md-top-0"><h6 className="text-bold">Contact us</h6>
                                <div className="text-subline"></div>
                                <div className="offset-top-30">
                                    <ul className="list-unstyled contact-info list">

                                        <li className="offset-top-15">
                                            <div className="unit unit-horizontal unit-middle unit-spacing-xs">
                                                <div className="unit-left"><span className="icon mdi mdi-map-marker text-middle icon-xs text-madison"></span></div>
                                                <div className="unit-body text-left"><a href="#" className="text-dark">Piford Technologies (P) Ltd,  <br className="visible-lg-inline" /> IT Park, Sector 67, SAS Nagar, Mohali (Chandigarh),
                                                    Punjab – 160062
                                                    , INDIA</a></div>
                                            </div>
                                        </li>
                                        <li className="offset-top-15">
                                            <div className="unit unit-horizontal unit-middle unit-spacing-xs">
                                                <div className="unit-left"><span className="icon mdi mdi-email-open text-middle icon-xs text-madison"></span></div>
                                                <div className="unit-body"><a href="mailto:#">info@piford.com</a></div> &nbsp; &nbsp;
                                                <div className="unit-body"><a href="mailto:#">sales@piford.com</a></div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="unit unit-horizontal unit-middle unit-spacing-xs">
                                                <div className="unit-left"><span className="icon mdi mdi-phone text-middle icon-xs text-madison"></span></div>
                                                <div className="unit-body"><a href="callto:#" className="text-dark">9779444127, 9779444172, 9779452435, 7986432629, 01723554401</a> <br />
                                                    Fax: +91-172-3554401
                                                </div>


                                            </div>
                                        </li>


                                    </ul>
                                </div>
                                <div className="offset-top-15 text-left">
                                    <ul className="list-inline list-inline-xs list-inline-madison">
                                        <li><a href="https://www.facebook.com/PifordTech/" className="icon icon-xxs fa-facebook icon-circle icon-gray-light-filled"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#" className="icon icon-xxs fa-twitter icon-circle icon-gray-light-filled"></a></li>
                                        <li><a href="#" className="icon icon-xxs fa-google icon-circle icon-gray-light-filled"></a></li>
                                        <li><a href="#" className="icon icon-xxs fa-instagram icon-circle icon-gray-light-filled"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <div className="cell-xs-10 cell-md-8 cell-lg-4 text-lg-left offset-top-50 offset-lg-top-0">
                        <h6 className="text-bold">Support Offices:</h6>
                        <div className="text-subline"></div>
                            <div className="offset-top-30 text-left">
                                <div className="unit-body"><a href="mailto:#" className="h6 text-regular">Piford Technologies (P) Ltd,
                                    <br className="visible-lg-inline" />T-18, Hem Bagh Complex, NOC, Patiala, Punjab – 147001
                                    , INDIA</a></div>

                                <div className="unit-body"><span className="icon mdi mdi-email-open text-middle icon-xs text-madison"></span><a href="mailto:#">contact.pb@piford.com</a></div>

                                <div className="unit-body"><span className="icon mdi mdi-phone text-middle icon-xs text-madison"></span><a href="mailto:#">Mobile: +91-9814226227</a></div><a href="mailto:#">
                                    <div className="text-subline"></div>
                                    <div className="offset-top-15"></div>

                                </a>
                                <div className="unit-body"><a href="mailto:#"></a><a href="mailto:#" className="h6 text-regular"> Piford Technologies (P) Ltd, &nbsp;<br className="visible-lg-inline" />ATS VILLAGE, Sector -93, Noida (NCR) - 201305, INDIA
                                </a>
                                </div>
                                <div className="unit-body"><span className="icon mdi mdi-email-open text-middle icon-xs text-madison"></span><a href="mailto:#">contact.ncr@piford.com</a></div>

                                <div className="unit-body"><span className="icon mdi mdi-phone text-middle icon-xs text-madison"></span><a href="mailto:#">Mobile: +91-7863800004</a></div><a href="mailto:#">

                                    <div className="offset-top-10">
                                    </div>
                                    <div id="form-subscribe-footer" className="form-output"></div>

                                </a>
                            </div>
                            <a href="mailto:#">
                            </a>
                         </div>
                        <a href="mailto:#">
                        </a>
                        </Col>
                    </Row>


                  
                           
                    </div>
                <a href="mailto:#">
                </a>
            </div><a href="mailto:#">
            </a><div className="bg-madison context-dark"><a href="mailto:#">
            </a><div className="shell text-md-left section-15"><a href="mailto:#">
            </a><a href="#" style={{ borderBottom: 'none' }}> </a><p><a href="#" style={{ borderBottom: 'none', color: '#fff' }}>© <span id="copyright-year">2025</span> All Rights Reserved Terms of Use and</a> <a href="privacy.html" style={{ borderBottom: 'none', color: '#fff' }}>Privacy Policy</a></p>
                </div>
            </div>
        </footer>)
}
export default Footer;