import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function LoginCom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/user/reg", {
        name: name,
        email: email,
        phonenumber: phonenumber,
        address: address,
        password: password,
        img: img,
      })
      .then((res) => {
        // alert(res.data.messege)
        history.push("/");
      });
  };
  return (
    <>
      <Container className="p-5 border border-dark mt-5">
        <center>
          <h1>Register Form</h1>
        </center>
        <Form className="abc m-5" onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phonenumber"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              placeholder="Enter Your Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" size="sm" onChange={(e) => setImg(e.target.value)}/>
          </Form.Group>

          <div className="text-center">
            <Button className="mt-3" variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
