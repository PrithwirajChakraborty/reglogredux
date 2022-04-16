import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export default function LoginCom() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const submitForm =(e) =>{
    e.preventDefault()
    axios.post("http://localhost:4001/user/login",{
        email:email, 
        password:password,
    }).then((res)=>{
      console.log(res)
      if(res.data.success){
        setLoginStatus("successfully login"+ res.data.success.email);
      }else{
        setLoginStatus(res.data.messege);
      }
    });
    
};
  return (
    <>
      <Container className="ab p-5 border border-dark mt-5">
        <center>
          <h1>Login Form</h1>
        </center>
        <Form className="abc m-5" action="" onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <center>
            <Button className="mt-3" variant="primary" type="submit">
              Login
            </Button>
          </center>
          <h1>{loginStatus}</h1>
        </Form>
        
      </Container>
    </>
  );
}
