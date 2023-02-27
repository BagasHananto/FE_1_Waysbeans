import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ModalRegister = (props) => {
  let user = {
    email: "",
    password: "",
    name: "",
    role: "user",
  };

  const onSubmitHandler = () => {
    let dataUser = JSON.parse(localStorage.getItem("users")) || [];
    dataUser.push(user);
    localStorage.setItem("users", JSON.stringify(dataUser));
    alert("Registration Success");
    props.handleClose(true);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Form
          className="pt-4 pb-4 ps-5 pe-5 bg-body rounded"
          onSubmit={onSubmitHandler}
        >
          <h2
            style={{ color: "#613D2B" }}
            className="d-flex fw-bold mb-4 justify-content-center"
          >
            Register
          </h2>
          <div className="d-grid gap-2">
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => (user.email = e.target.value)}
                style={{
                  border: "1px solid #613D2B",
                  backgroundColor: "#F6E6DA",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                className="form-check-label"
                placeholder="Password"
                onChange={(e) => (user.password = e.target.value)}
                style={{
                  border: "1px solid #613D2B",
                  backgroundColor: "#F6E6DA",
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Full name"
                onChange={(e) => (user.name = e.target.value)}
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
              >
                Register
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <p>Already have an account? Klik </p>
            <Link
              to="/"
              onClick={props.onClick}
              className=" ms-1 text-decoration-none text-black fw-bold"
            >
              Here
            </Link>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default ModalRegister;
