import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="container d-flex justify-content-center align-item-center p-5">
      <Container className="d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <p className="fw-bold fs-1 text-center">Welcome To Film-In</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
