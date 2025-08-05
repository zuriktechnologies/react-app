
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Form,Col,Row, Button} from 'react-bootstrap';



const SignUp=() =>{
    useEffect(()=>{
    },[])
    return (
        <div className="signUp">
            <Row  lg="12" className="p-5  justify-content-md-center">
            <Col xs lg="5">
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" placeholder="Contact Number" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="primary mb-3" size="lg" className='btn-primary'>Sign Up</Button>
                <p class="text-left">Already have an account? <a href='/sign-in'>Sign Up</a></p>
                </div>
            </Form>
            </Col>
            </Row>
        </div>
    );
}

export default SignUp;
