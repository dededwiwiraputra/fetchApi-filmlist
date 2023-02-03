import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import { getMovie, searchMovie } from "./api/Api";
import "./style/style.css";
import { useEffect, useState } from "react";
import {
  Card,
  ListGroup,
  Form,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovie().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col md={4} key={i}>
          <div className="m-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title style={{ height: "50px" }} className="text-center">
                  {movie.title}
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Release Date: {movie.release_date}
                </ListGroup.Item>
                <ListGroup.Item>Rating: {movie.vote_average}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </Col>
      );
    });
  };

  const search = async (s) => {
    if (s.length > 3) {
      const cari = await searchMovie(s);
      setPopularMovies(cari.results);
    }
  };

  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="pt-5 pb-5">
        <div className="container">
          <p className="fw-bold fs-1 text-center">List Film</p>

          <div className="mt-3 mb-5">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Cari Film"
                className="Movie-search"
                aria-label="Search"
                onChange={({ target }) => search(target.value)}
              />
            </Form>
          </div>
          <Row>
            <PopularMovieList />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
