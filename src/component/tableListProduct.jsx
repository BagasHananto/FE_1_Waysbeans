import Table from "react-bootstrap/Table";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListProduct() {
  const product = JSON.parse(localStorage.getItem("products")) || [];
  return (
    <Container className="mt-5">
      <h2>List Product</h2>
      <Table
        striped
        bordered
        hover
        size="sm"
        className="table table-bordered table-active mt-4 text-center text-align-center"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product &&
            product.map((item, index) => {
              return (
                <tr key={index} className="text-center text-align-center">
                  <td className="pt-5">{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      style={{ width: "80px" }}
                      alt=""
                    ></img>
                  </td>
                  <td className="pt-5">{item.name}</td>
                  <td className="pt-5">{item.stock}</td>
                  <td className="pt-5">{item.price}</td>
                  <td></td>
                  <td className="pt-5">
                    <Button className="btn-danger me-2" size="sm">
                      Delete
                    </Button>
                    <Link to="/addproduct">
                      <Button className="btn-success ms-2" size="sm">
                        Update
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
