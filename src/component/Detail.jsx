import { useParams } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

export default function Details() {
  const params = useParams();
  const id = parseInt(params.id);

  const product = JSON.parse(localStorage.getItem("products")) || [];

  return (
    <>
      <div>
        <Container className="d-flex mt-5">
          <div className="d-flex gap-5 justify-content-center">
            <img src={product[id].image} width="436px" height="555px" alt="" />
            <div className="flex-column pt-5 pb-5">
              <h1 className="fw-bold" style={{ color: "#613D2B" }}>
                {product[id].name}
              </h1>
              <p className="card-text" style={{ color: "#974A4A" }}>
                Stock : {product[id].stock}
              </p>
              <p style={{ textAlign: "justify" }}>{product[id].description}</p>
              <h2
                className="d-flex fw-bold justify-content-end mt-5"
                style={{ color: "#974A4A" }}
              >
                Rp {product[id].price}
              </h2>
              <div className="d-grid">
                <Button
                  className="mt-4"
                  style={{ backgroundColor: "#613D2B", border: "none" }}
                >
                  Add Card
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
