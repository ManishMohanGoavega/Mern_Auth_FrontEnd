import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { AuthenticationStore } from "../store/authStore";
import {useNavigate} from 'react-router-dom';
import state from "../store/store";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setName(state.user.name);
    setEmail(state.user.email);
  }, []); 

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const request = {
      name,
      email,
    };
    const response = await AuthenticationStore.update(request);
    if (!response?.success && response?.message) {
      setError(response?.message);
    }
    if (response?.success) {
      setName("");
      setEmail("");
      navigate('/')
    }
    setShowAlert(true);
  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>
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
        <Button type="submit" variant="primary" className="mt-3">
          Update Profile
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Profile;
