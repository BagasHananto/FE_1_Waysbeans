import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";

function SmallExample() {
  return (
    <Container className="mt-5">
      <h2>Income Transaction</h2>
      <Table
        striped
        bordered
        hover
        size="sm"
        className="table table-bordered table-active mt-4"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Post Code</th>
            <th>Product Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default SmallExample;
