
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {Form,Col,Row, Button} from 'react-bootstrap';



function SignIn() {
    const [form_Data, set_Form_Data] = useState({
		password: "",
		email: "",
	});
    const [validated, set_Validated] = useState(false);
    useEffect(()=>{
    },[]);
    const chngFn = (event) => {
		const { name, value } = event.target;
		set_Form_Data({
			...form_Data,
			[name]: value,
		});
	};
    const submitFn = async(event) => {
		const form = event.currentTarget;
			event.preventDefault();
			event.stopPropagation();
		
		set_Validated(true);
        if(form_Data?.email!==""){
            try {
                 await axios.post("http://localhost:3131/api/login", form_Data).then((res) => {
                     console.log(res); });
         } catch (error) { console.log(error); }
            
        }
       
	};
    return (
        <div className="signIn">
            <Row  lg="12" className="p-5  justify-content-md-center">
            <Col xs lg="5">
            <Form noValidate validated={validated} onSubmit={submitFn}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" 
                    name="email"
                    value={form_Data.email}
                    onChange={chngFn}
                    required
                    isInvalid={
                        validated &&
                        !/^\S+@\S+\.\S+$/.test(form_Data.email)
                    }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>passwordword</Form.Label>
                    <Form.Control type="text" placeholder="passwordword" required
                    name="password"
                    value={form_Data.password}
                    onChange={chngFn}
                    minLength={5} 
                    isInvalid={
                        validated && form_Data.password.length < 5
                    }/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button variant="primary mb-3" size="lg" type="submit" className='btn-primary'>Sign In</Button>
                <p class="text-left">Don't have an account? <a href='/sign-up'>Sign Up</a></p>

                </div>
            </Form>
            </Col>
            </Row>
        </div>
    );
}

export default SignIn;
