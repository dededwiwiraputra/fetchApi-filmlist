import { Card, ListGroup, Form, Button } from "react-bootstrap";

const Trending = () => {
  return (
    <div className="container">
      <p className="fw-bold fs-1 text-center">List Film</p>

      <div className="mt-3 mb-5">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Cari Film"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Cari</Button>
        </Form>
      </div>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="..." />
          <Card.Body>
            <Card.Title>Judul</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Release Date: </ListGroup.Item>
            <ListGroup.Item>Rating: </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Trending;
