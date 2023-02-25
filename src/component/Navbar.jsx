// import { useContext } from "react";
// import { AppContext } from "../App";
import { Container, Navbar, Nav, Stack, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { GlobalContext } from "../context/GlobalContext";

export default function Header() {
  const [showLogin, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowRegister(false);
  };

  const handleShow = () => setShow(true);

  const handleShowRegister = () => {
    handleClose(true);
    setShowRegister(true);
  };

  const handleShowLogin = () => {
    handleClose(false);
    setShow(true);
  };

  const { state } = useContext(GlobalContext);
  const { isLogin } = state;

  return (
    <>
      <Navbar bg="light shadow -3 " expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src="/image/Icon.png" width="100px" alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Stack direction="horizontal" gap={3}>
                {isLogin ? (
                  <div>
                    <p>UDAH LOGIN</p>
                  </div>
                ) : (
                  <>
                    <Button
                      onClick={handleShow}
                      variant="outline-dark"
                      style={{
                        paddingLeft: "25px",

                        paddingRight: "25px",
                        paddingTop: "1px",
                        paddingBottom: "1px",
                        border: "2px solid",
                      }}
                      size="sm"
                    >
                      {" "}
                      Login{" "}
                    </Button>
                    <Button
                      onClick={handleShowRegister}
                      style={{
                        backgroundColor: "#613D2B",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        paddingTop: "1px",
                        paddingBottom: "1px",
                        border: "2px solid #613D2B",
                      }}
                      size="sm"
                    >
                      {" "}
                      Register{" "}
                    </Button>
                  </>
                )}
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Props */}
      <ModalLogin
        show={showLogin}
        onHide={handleClose}
        onClick={handleShowRegister}
      />
      <ModalRegister
        show={showRegister}
        onHide={handleClose}
        onClick={handleShowLogin}
      />
    </>
  );
}
