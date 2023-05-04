import React, { useContext, useState } from "react";
import "./login.css";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import app from "../../firebase/firebase.config";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const auth = getAuth(app);

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [logError, setLogError] = useState("");

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
        setLogError(error.message);
      });
    console.log(email, password);
  };
  const handlePopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogError(error.message);
      });
  };
  const handleGithub = () => {
    signInWithPopup(auth, providerGit)
      .then((result) => {
        const logedInUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogError(error.message);
      });
  };

  return (
    <div className="my-5">
      <Container>
        <Col className="m-auto border p-5" lg={6}>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
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
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text className="text-muted ms-3">
              Already have an account? <Link to="/register">Register here</Link>
            </Form.Text>
            <p className="text-danger mt-3">{logError}</p>
          </Form>
          <div className="">
            <p className="mt-3">Or you can sign in with</p>
            <div className="d-flex">
              <div className="">
                <Button className="signup_btn" onClick={handlePopup}>
                  <FaGoogle />
                </Button>
              </div>
              <div className="ms-5">
                <Button className="signup_btn" onClick={handleGithub}>
                  <FaGithub />
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
