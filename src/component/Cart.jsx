import { Container, Button } from "react-bootstrap";
import Product from "./Dataproduct.json";

export default function Carts() {
  return (
    <>
      <Container>
        <div className="mt-5">
          <div>
            <h3 className="fw-bold" style={{ color: "#613D2B" }}>
              My Cart
            </h3>
            <p className="fs-5 mt-3" style={{ color: "#613D2B" }}>
              Review Your Order
            </p>
          </div>
          <div className="d-flex gap-5">
            <div className="">
              <div
                className="d-flex gap-3 border-top border-2 border-dark border-bottom"
                style={{ paddingLeft: "20px" }}
              >
                <img
                  src={Product[1].image}
                  width="13%"
                  height="auto"
                  className="mt-3 mb-3"
                  alt=""
                ></img>
                <div className="d-flex flex-column mt-4">
                  <h5 className="fw-bold mt-3" style={{ color: "#613D2B" }}>
                    {Product[1].productname}
                  </h5>
                  <div className="gap-5 mt-3">
                    <img
                      src="./image/-.png"
                      width="10%"
                      className="mb-1"
                      alt=""
                    ></img>
                    <p
                      className="badge text-wrap fs-6 ms-3"
                      style={{
                        width: "40px",
                        color: "#613D2B",
                        backgroundColor: "#F6E6DA",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                      }}
                    >
                      1
                    </p>
                    <img
                      src="./image/+.png"
                      width="10%"
                      className="mb-1 ms-3"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="ms-1">
              <div className="border-top border-2 gap-5 border-dark border-bottom ps-2 pe-2">
                <div className="d-flex gap-5 bd-highlight">
                  <p
                    className="fs-6 mt-3 flex-grow-1 bd-highlight"
                    style={{ color: "#974A4A", marginRight: "100px" }}
                  >
                    Subtotal
                  </p>
                  <p className="fs-6 mt-3 ms-5" style={{ color: "#974A4A" }}>
                    300.900
                  </p>
                </div>
                <div className="d-flex bd-highlight">
                  <p
                    className="fs-6 flex-grow-1 bd-highlight"
                    style={{ color: "#974A4A" }}
                  >
                    Qty
                  </p>
                  <p className="fs-6" style={{ color: "#974A4A" }}>
                    2
                  </p>
                </div>
              </div>
              <div className="d-flex bd-highlight mt-1">
                <p
                  className="fs-6 fw-bold flex-grow-1 bd-highlight ps-2"
                  style={{ color: "#974A4A" }}
                >
                  Total
                </p>
                <p className="fs-6 pe-2" style={{ color: "#974A4A" }}>
                  600.000
                </p>
              </div>
              <div className="d-grid mt-5">
                <Button
                  style={{ backgroundColor: "#613D2B", border: "none" }}
                  type="submit"
                >
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
