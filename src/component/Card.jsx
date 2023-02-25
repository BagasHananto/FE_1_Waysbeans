import Product from "./Dataproduct.json";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Container className="d-flex justify-content-center mt-5 gap-5 mb-5 w-75">
      {Product.map((item, index) => (
        <div
          key={item.id}
          className="card rounded-0 border-white"
          style={{ backgroundColor: "#F6E6DA" }}
        >
          <Link to={`/detailProduct/${index}`} className="text-decoration-none">
            <div>
              <img src={item.image} width={"100%"} alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: "#613D2B" }}>
                {item.productname}
              </h5>
              <p className="card-text" style={{ color: "#974A4A" }}>
                Price : {item.price} <br></br> Stock : {item.stock}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </Container>
  );
}
