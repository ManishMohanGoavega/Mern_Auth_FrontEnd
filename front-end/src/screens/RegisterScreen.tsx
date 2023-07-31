import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { AuthenticationStore } from "../store/authStore";
import {useNavigate} from 'react-router-dom'

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const request = {
      name,
      email,
      password,
      confirmPassword,
    };
    const response = await AuthenticationStore.register(request);
    console.log("response", response);
    if (!response?.success && response?.message) {
      setError(response?.message);
    }
    if (response?.success) {
      setName("");
      setEmail("");
      setConfirmPassword("");
      setPassword("");
      navigate('/login')
    }
    setShowAlert(true);
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Alert
        show={showAlert}
        variant={AuthenticationStore.error ? "danger" : "success"}
      >
        {AuthenticationStore.error ? AuthenticationStore.error : "User registered Successfully!!"}
      </Alert>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={AuthenticationStore.error.indexOf("Name") >= 0}
          ></Form.Control>
          <Form.Text id="passwordHelpBlock" muted>
            {AuthenticationStore.error.indexOf("Name") >= 0}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={AuthenticationStore.error.indexOf("Email") >= 0}
          ></Form.Control>
          <Form.Text id="passwordHelpBlock" className="text-danger">
            {AuthenticationStore.error.indexOf("Email") >= 0}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={AuthenticationStore.error.indexOf("Password") >= 0}
          ></Form.Control>
          <Form.Text id="passwordHelpBlock" muted>
            {AuthenticationStore.error.indexOf("Password") >= 0}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={AuthenticationStore.error.indexOf("Passwords") >= 0}
          ></Form.Control>
          <Form.Text id="passwordHelpBlock" muted>
            {AuthenticationStore.error.indexOf("Passwords") >= 0}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Sign Up
        </Button>
        <Row>
          <Col>
            Already have an account? <Link to="/login">Sign In</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
