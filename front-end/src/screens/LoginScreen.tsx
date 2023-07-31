import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { AuthenticationStore } from "../store/authStore";
import { useSnapshot } from "valtio";
import state from "../store/store";
import Header from "../components/Header";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const snap = useSnapshot(state);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const request = {
      email,
      password,
    };
    const response = await AuthenticationStore.login(request);
    console.log("response", response);
    if (!response?.success && response?.message) {
      setError(response?.message);
    }
    if (response?.success) {
      const { email, name } = response;
      setEmail("");
      setPassword("");
      state.isAuthenticated = true;
      state.user.name = name;
      state.user.email = email;
      navigate('/home');
    }
    setShowAlert(true);
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Alert
        show={showAlert}
        variant={AuthenticationStore.error ? "danger" : "success"}
      >
        {AuthenticationStore.error ? AuthenticationStore.error : ""}
      </Alert>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
        <Row>
          <Col>
            New Customer? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
      );
};

export default LoginScreen;
