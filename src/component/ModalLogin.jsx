import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ModalLogin = (props) => {
  let dataUser = {
    email: "",
    password: "",
  };

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const findUser = userData.find(
      (data) =>
        dataUser.email === data.email && dataUser.password === data.password
    );
    if (findUser) {
      const session = {
        email: findUser.email,
        fullName: findUser.fullName,
        isLogin: true,
      };
      localStorage.setItem("session_user", JSON.stringify(session));
    } else {
      alert("Login Failed!");
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Form className="pt-4 pb-4 ps-5 pe-5 bg-body rounded">
          <h2
            style={{ color: "#613D2B" }}
            className="d-flex fw-bold mb-4 mt-3 justify-content-center"
          >
            Login
          </h2>
          <div className="d-grid gap-2">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                onChange={(e) => (dataUser.email = e.target.value)}
                name="email"
                placeholder="Enter email"
                style={{
                  border: "1px solid #613D2B",
                  backgroundColor: "#F6E6DA",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                onChange={(e) => (dataUser.password = e.target.value)}
                name="password"
                className="form-check-label"
                placeholder="Password"
                style={{
                  border: "1px solid #613D2B",
                  backgroundColor: "#F6E6DA",
                }}
              />
            </Form.Group>
            <div className="d-grid">
              <Button
                style={{ backgroundColor: "#613D2B", border: "none" }}
                type="submit"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <p>Don't have an account? Klik </p>
            <Link
              to="/"
              onClick={props.onClick}
              className="ms-1 text-decoration-none text-black fw-bold"
            >
              Here
            </Link>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLogin;
