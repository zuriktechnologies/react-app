
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Form,Col,Row, Button, Image} from 'react-bootstrap';
 const ButtonComponent = ({variant,buttonTitle,onClick}) =>{
    return(
        <div> 
       <Button variant={variant} onClick={()=>{onClick()}}>{buttonTitle}</Button>
        </div>
    )
}

export default ButtonComponent;