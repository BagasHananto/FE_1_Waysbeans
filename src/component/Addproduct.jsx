import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Image from "../Data/Dataproduct.json";

export default function AddProduct() {
  const [imageUrl, setImageUrl] = useState();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const [fromData, setFromData] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFromData({
      ...fromData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: fromData.name,
      stock: fromData.stock,
      price: fromData.price,
      description: fromData.description,
      image: imageUrl,
    };

    const products = JSON.parse(localStorage.getItem("products"));

    if (products === null) {
      localStorage.setItem("products", JSON.stringify([newProduct]));
    } else {
      products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(products));
      alert("Product added successfully");
    }
  };

  return (
    <Container
      className="mt-5 d-flex justify-content-center"
      style={{ marginLeft: "100px" }}
    >
      <div>
        <div className="d-flex gap-5">
          <Form onSubmit={handleSubmit}>
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
                onChange={handleChange}
                name="name"
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
                onChange={handleChange}
                name="stock"
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
                onChange={handleChange}
                placeholder="Price"
                name="price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <textarea
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
                className="form-control"
                placeholder="Description Product"
                onChange={handleChange}
                name="description"
                rows="3"
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="file"
                onChange={handleImage}
                name="image"
                style={{
                  backgroundColor: "rgba(97, 61, 43, 0.25)",
                  border: "2px solid #613D2B",
                }}
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
