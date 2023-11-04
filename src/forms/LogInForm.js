import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from '../store/actions/user-actions';

const LogInForm = (props) => {
  const inputRefPassword = useRef();
  const inputRefEmail = useRef();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const errorHandler = () => {
    setError((prevState) => !prevState);
  }

  const SubmissionHandler = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(inputRefEmail.current.value, inputRefPassword.current.value)
    if (inputRefEmail.current.value === '' || inputRefPassword.current.value === '' ) {
      errorHandler();
      return;
    }

    const user = {
      email: inputRefEmail.current.value,
      password: inputRefPassword.current.value,
    }

    console.log('user', user);
    //yaha mujhe call krni hai iss --> /signup endpoint ke liye backend ko
    dispatch(authSignUp(user));

    // toggleFun();
  }



    return (
        <Form onSubmit={SubmissionHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={inputRefEmail}  type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={inputRefPassword}type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me" />
          </Form.Group>
          <Button variant="primary" type="submit" className='me-3' onClick={props.onHide}>Sign Up</Button>
          <Button variant="primary" type="submit" onClick={props.onHide}>Log In</Button>
        </Form>
      );
}

export default LogInForm;