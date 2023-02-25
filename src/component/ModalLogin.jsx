import { useContext, useState } from "react";
import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import data from "./Datauser.json";
import { GlobalContext } from "../context/GlobalContext";

export const ModalLogin = (props) => {
  const navigate = useNavigate();

  const { state } = useContext(GlobalContext);
  const { setLogin } = state;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = data.find(
      (e) => e.email === user.email && e.password === user.password
    );
    if (foundUser) {
      setLogin(true);
      navigate("/");
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Form
          className="pt-4 pb-4 ps-5 pe-5 bg-body rounded"
          onSubmit={handleLogin}
        >
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
                onChange={handleInput}
                value={user.email}
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
                onChange={handleInput}
                value={user.password}
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
                onClick={props.onHide}
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
              {" "}
              Here{" "}
            </Link>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLogin;
