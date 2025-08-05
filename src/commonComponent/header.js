import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {  useEffect, useState } from "react";
import queryString from "query-string";
import axios from 'axios';
import {Form,Col,Row, Button} from 'react-bootstrap';

const Header = () => {
  const [courseCategories,setCourseCategories] = useState([]);
  const [services,setServiceData] = useState([]);
  const [hoverClass, onHover] = useState({newdrop:'',course:''})
  useEffect(()=>{
    getCoursesData();
    getServiceData()
  },[]);
  const getCoursesData = () =>{
    axios({
      // Endpoint to send files
      url: "http://localhost:3131/api/allCategories",
      method: "GET",
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },

      // Attaching the form data
      data: {},
  })
      // Handle the response from backend here
      .then((res) => {
        console.log('resresres',res);
        setCourseCategories(res?.data?.result)
      })

      // Catch errors if any
      .catch((err) => {
        console.log('resresres',err)

      });
  }
  const getServiceData = () =>{
    axios({
      // Endpoint to send files
      url: "http://localhost:3131/api/allServices",
      method: "GET",
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },

      // Attaching the form data
      data: {},
  })
      // Handle the response from backend here
      .then((res) => {
        console.log('resresres',res);
        setServiceData(res?.data?.result)
      })

      // Catch errors if any
      .catch((err) => {
        console.log('resresres',err)

      });
  }
  return (
    <Navbar bg="primary" expand="md" className='bg-primary rd-navbar-menu-wrap clearfix"'>
   
      <Container>
       
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us" id="service"  onMouseEnter={()=>{
              let hoverClass={
                newdrop:'newdrop'
              }
              onHover(hoverClass)
            }} onMouseLeave={()=>{
              let hoverClass={
                newdrop:''
              }
              onHover(hoverClass)
            }
              } >Services <div className='rd-navbar--has-megamenu rd-navbar-submenu' >
              <div className={`rd-navbar-megamenu ${hoverClass?.newdrop}`}>
                {services?.map((li,ind)=>{
                  return(<div key={ind}>
                      <a href="#">{li?.service_name}</a><br />
                  </div>)
                })}
              </div> </div>
            </Nav.Link>
            <Nav.Link className='rd-navbar--has-megamenu rd-navbar-submenu' onMouseEnter={()=>{
              let hoverClass={
                course:'course'
              }
              onHover(hoverClass)
            }} onMouseLeave={()=>{
              let hoverClass={
                course:''
              }
              onHover(hoverClass)
            }}> Courses</Nav.Link>
            <div className={`rd-navbar-megamenu ${hoverClass?.course}`}>
              <div className="row section-relative">
                <div className="row section-relative">
               
                  {
                    courseCategories?.map((data,index)=>{
                      return(
                        <ul className="col-lg-3" key={index} >
                        <li >
                        <h6>{data?.categery_name
                        } </h6>
                        {
                          data.courses?.map((li,ind)=>{
                            return(
                              <ul className="list-unstyled offset-lg-top-20" key={ind}>
                              <li><a href="android-app-development-training-course-in-chandigarh.php">{li?.course_name}</a></li>
                            
                            </ul>
                            )
                          })
                        }
                      </li>
                      </ul>
                      )
                    })
                  }
              
                </div>
               
              </div>
            </div>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
            <Nav.Link href="#" >
              <a id="shk">
                <button class="btn btn-sm" style={{backgroundColor:'#3eb2cf', color:"white"}} id="">Pay Online</button>
                </a>
               </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header