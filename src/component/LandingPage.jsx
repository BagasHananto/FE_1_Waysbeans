import Product from "./Dataproduct.json";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "#DBB699",
          width: "948px",
          height: "400px",
          marginRight: "250px",
        }}
        className="mt-5"
      >
        <img
          className="d-block"
          style={{
            width: "352px",
            height: "159px",
            left: "700px",
            top: "300px",
            position: "absolute",
          }}
          src="./image/Waves.png"
          alt=""
        />

        <img
          className="d-block"
          style={{
            width: "402px",
            height: "242px",
            left: "785px",
            top: "148px",
            position: "absolute",
          }}
          src="./image/Carousel.png"
          alt=""
        />

        <img
          className="d-block"
          style={{
            width: "460px",
            height: "145px",
            left: "256px",
            top: "150px",
            position: "absolute",
          }}
          src="./image/WaysBean.png"
          alt=""
        />

        <p
          style={{
            fontFamily: "Avenir!important",
            fontStyle: "normal!important",
            fontSize: "25px",
            left: "260px",
            top: "320px",
            position: "absolute",
          }}
        >
          BEST QUALITY COFFEE BEANS
        </p>

        <p
          style={{
            fontFamily: "Avenir!important",
            fontStyle: "normal!important",
            fontSize: "18px",
            left: "260px",
            top: "370px",
            position: "absolute",
          }}
        >
          Quality freshly roasted coffee made just for you.<br></br>Pour, brew
          and enjoy
        </p>
      </Container>
      <Container className="d-flex justify-content-center mt-5 gap-5 mb-5 w-75">
        {Product.map((item, index) => (
          <div
            key={item.id}
            className="card rounded-0 border-white"
            style={{ backgroundColor: "#F6E6DA" }}
          >
            <Link
              to={`/detailproduct/${index}`}
              className="text-decoration-none"
            >
              <div>
                <img src={item.image} width={"100%"} alt="" />
              </div>
              <div className="card-body">
                <h5
                  className="card-title fw-bold"
                  style={{ color: "#613D2B", fontSize: "18px" }}
                >
                  {item.productname}
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#974A4A", fontSize: "14px" }}
                >
                  Price : {item.price} <br></br> Stock : {item.stock}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Container>
    </>
  );
}
