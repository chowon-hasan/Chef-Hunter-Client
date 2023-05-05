import React, { useContext, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password < 6) {
      setRegError("Please provide at least 6 characters");
    } else if (!/(?=.[A-Z])/.test(password)) {
      setRegError("Please add at least one uppercase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        navigate("/chefDetails/1");
      })
      .catch((error) => {});
  };

  return (
    <div className="my-5">
      <Container>
        <Col className="m-auto border p-5" lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control type="text" name="photo" placeholder="Photo URL" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text className="text-muted ms-3">
              Already have an account? <Link to="/login">LogIn</Link>
            </Form.Text>
            <p className="text-danger mt-3">{regError}</p>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Register;
