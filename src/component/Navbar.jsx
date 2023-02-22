import {Container, Navbar, Nav, Button, Stack, Modal, Form} from "react-bootstrap";
import React, { useState } from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    const [showLogin, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => {
    setShow(false);
    setShowRegister(false);
    }

    const handleShow = () => setShow(true);

    const handleShowRegister = () => {
    handleClose(true);
    setShowRegister(true);
    }
    
    const handleShowLogin = () => {
    handleClose(true);
    setShow(true);
    }
    return (
    <>
        <Navbar bg="light shadow -3 " expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to="/"><img src="/image/Icon.png" width= "100px" alt=""/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Stack direction="horizontal" gap={3}>
                    <Button onClick={handleShow} variant="outline-secondary" style={{paddingLeft:"25px", paddingRight:"25px", paddingTop:"1px", paddingBottom:"1px", color:"#613D2B", border:"2px solid"}} size="sm"> Login </Button>
                    <Button onClick={handleShowRegister} style={{backgroundColor:"#613D2B", paddingLeft:"15px", paddingRight:"15px", paddingTop:"1px", paddingBottom:"1px" , border:"2px solid #613D2B" }} size="sm"> Register </Button>
                    </Stack>
                </Nav>
            </Navbar.Collapse>
      </Container>
      </Navbar>

      <Modal show={showLogin} onHide={handleClose} centered>       
          <Form className="pt-4 pb-4 ps-5 pe-5 bg-body rounded">
            <h2 style={{color:"#613D2B"}} className="d-flex fw-bold mb-4 mt-3 justify-content-center">Login</h2>
              <div className="d-grid gap-2">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" name="email" id="email" placeholder="Enter email" style={{border: "1px solid #613D2B", backgroundColor:"#F6E6DA"}} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" name="password" id="password" className="form-check-label" placeholder="Password" style={{border: "1px solid #613D2B", backgroundColor:"#F6E6DA"}} />
                  </Form.Group>
              <div className="d-grid">
                  <Button style={{backgroundColor:"#613D2B", border:"none"}} type="submit">Login</Button>
              </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                 <p>Don't have an account? Klik <Link to="/" onClick={handleShowRegister} className="text-decoration-none text-black fw-bold"> Here </Link></p>
              </div>
          </Form>
      </Modal>

      <Modal show={showRegister} onHide={handleClose} centered>
          <Form className="pt-4 pb-4 ps-5 pe-5 bg-body rounded">
            <h2 style={{color:"#613D2B"}} className="d-flex fw-bold mb-4 justify-content-center">Register</h2>
              <div className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" style={{border: "1px solid #613D2B", backgroundColor:"#F6E6DA"}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" className="form-check-label" placeholder="Password" style={{border: "1px solid #613D2B", backgroundColor:"#F6E6DA"}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Full name" style={{border: "1px solid #613D2B", backgroundColor:"#F6E6DA"}} />
                </Form.Group>
              <div className="d-grid">
                <Button style={{backgroundColor:"#613D2B", border:"none"}} type="submit">Register</Button>
              </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                 <p>Already have an account? Klik <Link to="/" onClick={handleShowLogin} className="text-decoration-none text-black fw-bold"> Here </Link></p>
              </div>
          </Form>
      </Modal>
    </>

    );
}