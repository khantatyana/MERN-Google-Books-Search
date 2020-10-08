import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Books() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})
  const [error, setError] = useState("");

  useEffect(() => {
    API.fetchBooks("coding")
      .then(res =>
        setBooks(res.data.items)
      )
      .catch(err => setError(err));
  }, []);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };
  
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('Submitted');
    console.log(books);
    console.log(books.length);
    API.fetchBooks(search)
    .then(res =>
      setBooks(res.data.items)
    )
    .catch(err => setError(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>    
            <h1> <i className="fas fa-book" ></i>(React) Google Book Search</h1>
            <p>Search for and Save Books of Interest</p>
            <SearchForm
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              results={search}
            />
            <br />
            <br />
          </Jumbotron>
          {books.length ? (
            <List>
              <h1>Results</h1>
              {books.map(book => (
                <Card 
                key={book.id}
                book={book}
                >
                </Card>
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

export default Books;
