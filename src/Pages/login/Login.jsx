import React, { useContext } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    signInUser(email, password)
      .then((result) => {
        const signedUser = result.user;
        console.log(signedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email, password);
  };
  return (
    <div className="my-5">
      <Container>
        <Col className="m-auto" lg={6}>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
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
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text className="text-muted ms-3">
              Already have an account? <Link to="/register">Register here</Link>
            </Form.Text>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
