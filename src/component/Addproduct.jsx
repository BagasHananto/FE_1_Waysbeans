import { Container, Form, Button } from "react-bootstrap";
import Image from "./Dataproduct.json";

export default function AddProduct() {
  return (
    <Container
      className="mt-5 d-flex justify-content-center"
      style={{ marginLeft: "100px" }}
    >
      <div>
        <div className="d-flex gap-5">
          <Form>
            <h5 className="mb-4" style={{ color: "#613D2B" }}>
              Add Product
            </h5>
            <Form.Group className="mb-3">
              <Form.Control
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
                type="text"
                placeholder="Product Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
                type="number"
                placeholder="Stock"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
                type="text"
                placeholder="Price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <textarea
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Description Product"
                rows="3"
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="file"
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
                id="choiceFormdisabled"
              />
            </Form.Group>

            <Button
              style={{
                backgroundColor: "#613D2B",
                border: "none",
                marginTop: "20px",
                marginLeft: "80px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
              type="submit"
            >
              Add Product
            </Button>
          </Form>
          <div>
            <img src={Image[2].image} width="330px" height="430px" alt=""></img>
          </div>
        </div>
      </div>
    </Container>
  );
}
