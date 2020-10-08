import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Footer from "../components/Footer";

function Saved() {

  const [books, setBooks] = useState([])
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <i className="fas fa-book fa-3x" ></i>
            <h1>Saved Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <Row key={book._id}>
                  <Col size="md-2">
                    {book.link ? (
                      <img src={book.image} alt="img" />
                    ) : (<img src="" alt="" />)}
                  </Col>
                  <Col size="md-9">
                    <div className="card-header">
                      <a href={book.link} target="_blank">

                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                    </div>
                    <div className="card-body">{book.description}</div>
                  </Col>
                  <Col size="md-1">
                    <a href={book.link} target="_blank">
                      <button className="btn btn-primary">
                        View  <i className="fas fa-external-link-alt"></i>
                      </button>
                    </a>
                    <br /><br />
                    <button type="button" className="btn btn-primary" onClick={() => deleteBook(book._id)}>Delete  <i className="far fa-trash-alt"></i></button>
                  </Col>
                </Row>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Saved;