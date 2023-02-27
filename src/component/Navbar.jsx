import {
  Container,
  Navbar,
  Nav,
  Stack,
  Button,
  NavDropdown,
} from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

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

  const hapusData = () => {
    localStorage.removeItem("session_user");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const session = JSON.parse(localStorage.getItem("session_user")) || [];

  const user = users.find((v) => v.email === session.email);

  return (
    <>
      <Navbar bg="light shadow -3 " expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src="/image/Icon.png" width="100px" alt="" />
            </Link>
          </Navbar.Brand>
          <Stack direction="horizontal">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {user && user.role === "user" ? (
                <>
                  <Link to="/cart" className="d-flex me-3">
                    <div>
                      <img
                        src="./image/Keranjang.png"
                        width="35px"
                        height="32.26px"
                        alt=""
                      />
                    </div>
                    <div className="mt-2 me-2">
                      {/* <Badge className="rounded-5" bg="danger">
                        1
                      </Badge> */}
                    </div>
                  </Link>
                  <NavDropdown align="end">
                    <NavDropdown.Item>
                      <Link
                        className="d-flex text-decoration-none"
                        style={{ color: "black" }}
                        to="/profile"
                      >
                        <img
                          src="./image/User.png"
                          width="20px"
                          height="20px"
                          alt=""
                        ></img>
                        <div className="ms-2">Profile</div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item className="d-flex" onClick={hapusData}>
                      <img
                        src="./image/Logout.png"
                        className="me-2"
                        width="20px"
                        height="20px"
                        alt=""
                      ></img>
                      <div>Log Out</div>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <div className="ms-2">
                    <img
                      src="./image/Ellipse 1.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              {user && user.role === "admin" ? (
                <>
                  <NavDropdown align="end">
                    <NavDropdown.Item>
                      <Link
                        className="d-flex text-decoration-none"
                        style={{ color: "black" }}
                        to="/addproduct"
                      >
                        <img
                          src="./image/Coffe.png"
                          width="20px"
                          height="20px"
                          alt=""
                        ></img>
                        <div className="ms-2">Add Product</div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link
                        className="d-flex text-decoration-none"
                        style={{ color: "black" }}
                        to="/tablelistproduct"
                      >
                        <img
                          src="./image/Coffe.png"
                          width="20px"
                          height="20px"
                          alt=""
                        ></img>
                        <div className="ms-2">List Product</div>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item className="d-flex" onClick={hapusData}>
                      <img
                        src="./image/Logout.png"
                        className="me-2"
                        width="20px"
                        height="20px"
                        alt=""
                      ></img>
                      <div>Log Out</div>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <div className="ms-2">
                    <img
                      src="./image/Ellipse 1.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                </>
              ) : (
                ""
              )}

              {user ? <></> : ""}

              {!user ? (
                <>
                  <Nav className="ms-auto">
                    <Stack direction="horizontal" gap={3}>
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
                        Login
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
                        Register
                      </Button>
                    </Stack>
                  </Nav>
                </>
              ) : (
                ""
              )}
            </Navbar.Collapse>
          </Stack>
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
