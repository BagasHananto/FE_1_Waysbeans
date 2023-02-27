import { Container } from "react-bootstrap";
import Product from "../Data/Dataproduct.json";

export default function Profile() {
  return (
    <>
      <Container className="mt-5">
        <div className="d-flex">
          <div className="me-5">
            <div>
              <h5 className="fw-bold" style={{ color: "#613D2B" }}>
                My Profile
              </h5>
            </div>
            <div className="d-flex gap-4">
              <img
                src="./image/Profile.png"
                width="180px"
                className="mt-3"
                style={{ borderRadius: "8px" }}
                alt=""
              ></img>
              <div>
                <p className="fw-bold mt-4" style={{ color: "#613D2B" }}>
                  Full Name<br></br>
                  <p className="fw-normal">Bagas</p>
                </p>
                <p className="fw-bold" style={{ color: "#613D2B" }}>
                  Email<br></br>
                  <p className="fw-normal">bagasaja@gmail.com</p>
                </p>
              </div>
            </div>
          </div>
          <div className="ms-auto">
            <div>
              <h5 className="fw-bold" style={{ color: "#613D2B" }}>
                My Transaction
              </h5>
            </div>
            <div>
              <div
                className=" d-flex bd-highligh p-2 gap-4 mt-4"
                style={{
                  backgroundColor: "#F6E6DA",
                  width: "530px",
                  height: "153px",
                }}
              >
                <img
                  className="mt-2 mb-2"
                  src={Product[1].image}
                  width="100px"
                  height="120px"
                  alt=""
                ></img>
                <div className="bd-highlight">
                  <p className="fw-bold mt-2 mb-2" style={{ color: "#613D2B" }}>
                    {Product[1].productname}
                    <br></br>
                    <p className="fw-normal" style={{ fontSize: "12px" }}>
                      Saturday, 5 March 2023
                    </p>
                  </p>
                  <p
                    className=""
                    style={{ color: "#613D2B", fontSize: "12px" }}
                  >
                    Price : {Product[1].price}
                    <br></br>
                    <p style={{ color: "#613D2B", fontSize: "12px" }}>
                      Qty : 2<br></br>
                      <p className="fw-bold">Subtotal : Rp 601.000</p>
                    </p>
                  </p>
                </div>
                <div className="ms-auto">
                  <div className="mt-2" style={{ marginLeft: "32px" }}>
                    <img
                      src="./image/WaysBean.png"
                      width="73px"
                      height="22px"
                      alt=""
                    ></img>
                  </div>
                  <div className="mt-2" style={{ marginLeft: "43px" }}>
                    <img
                      src="./image/Barcode1.png"
                      width="50px"
                      height="50px"
                      alt=""
                    ></img>
                  </div>
                  <div
                    className="mt-2 ps-3 pe-3 pt-1 pb-1 rounded-1 me-3"
                    style={{
                      backgroundColor: "#FF9900",
                      color: "white",
                      textAlign: "center",
                      fontSize: "12px",
                      width: "140px",
                      height: "26px",
                    }}
                  >
                    Waiting Approved
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className=" d-flex bd-highligh p-2 gap-4 mt-4"
                style={{
                  backgroundColor: "#F6E6DA",
                  width: "530px",
                  height: "153px",
                }}
              >
                <img
                  className="mt-2 mb-2"
                  src={Product[1].image}
                  width="100px"
                  height="120px"
                  alt=""
                ></img>
                <div className="bd-highlight">
                  <p className="fw-bold mt-2 mb-2" style={{ color: "#613D2B" }}>
                    {Product[1].productname}
                    <br></br>
                    <p className="fw-normal" style={{ fontSize: "12px" }}>
                      Saturday, 5 March 2023
                    </p>
                  </p>
                  <p
                    className=""
                    style={{ color: "#613D2B", fontSize: "12px" }}
                  >
                    Price : {Product[1].price}
                    <br></br>
                    <p style={{ color: "#613D2B", fontSize: "12px" }}>
                      Qty : 2<br></br>
                      <p className="fw-bold">Subtotal : Rp 601.000</p>
                    </p>
                  </p>
                </div>
                <div className="ms-auto">
                  <div className="mt-2" style={{ marginLeft: "32px" }}>
                    <img
                      src="./image/WaysBean.png"
                      width="73px"
                      height="22px"
                      alt=""
                    ></img>
                  </div>
                  <div className="mt-2" style={{ marginLeft: "43px" }}>
                    <img
                      src="./image/Barcode1.png"
                      width="50px"
                      height="50px"
                      alt=""
                    ></img>
                  </div>
                  <div
                    className="mt-2 ps-3 pe-3 pt-1 pb-1 rounded-1 me-3"
                    style={{
                      backgroundColor: "#00FF19",
                      color: "white",
                      textAlign: "center",
                      fontSize: "12px",
                      width: "140px",
                      height: "26px",
                    }}
                  >
                    Success
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className=" d-flex bd-highligh p-2 gap-4 mt-4 mb-5"
                style={{
                  backgroundColor: "#F6E6DA",
                  width: "530px",
                  height: "153px",
                }}
              >
                <img
                  className="mt-2 mb-2"
                  src={Product[1].image}
                  width="100px"
                  height="120px"
                  alt=""
                ></img>
                <div className="bd-highlight">
                  <p className="fw-bold mt-2 mb-2" style={{ color: "#613D2B" }}>
                    {Product[1].productname}
                    <br></br>
                    <p className="fw-normal" style={{ fontSize: "12px" }}>
                      Saturday, 5 March 2023
                    </p>
                  </p>
                  <p
                    className=""
                    style={{ color: "#613D2B", fontSize: "12px" }}
                  >
                    Price : {Product[1].price}
                    <br></br>
                    <p style={{ color: "#613D2B", fontSize: "12px" }}>
                      Qty : 2<br></br>
                      <p className="fw-bold">Subtotal : Rp 601.000</p>
                    </p>
                  </p>
                </div>
                <div className="ms-auto">
                  <div className="mt-2" style={{ marginLeft: "32px" }}>
                    <img
                      src="./image/WaysBean.png"
                      width="73px"
                      height="22px"
                      alt=""
                    ></img>
                  </div>
                  <div className="mt-2" style={{ marginLeft: "43px" }}>
                    <img
                      src="./image/Barcode1.png"
                      width="50px"
                      height="50px"
                      alt=""
                    ></img>
                  </div>
                  <div
                    className="mt-2 ps-3 pe-3 pt-1 pb-1 rounded-1 me-3"
                    style={{
                      backgroundColor: "#613D2B",
                      color: "white",
                      textAlign: "center",
                      fontSize: "12px",
                      width: "140px",
                      height: "26px",
                    }}
                  >
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
