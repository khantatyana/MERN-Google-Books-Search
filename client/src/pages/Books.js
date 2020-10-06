import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";

function Books() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([])

  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    API.fetchBooks(search)
      .then(res => 

        setBooks(res.data)

        // if (res.data.length === 0) {
        //   throw new Error("No results found.");
        // }
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
      )
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };
  const handleFormSubmit = event => {

    event.preventDefault();
    console.log('Submitted');
    console.log(books);
    console.log(books.length);
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <i className="fas fa-book fa-3x" ></i>
            <h1>(React) Google Book Search</h1>
            <p>Search for and Save Books of Interest</p>
            <SearchForm
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              results={search}
            />
            <br />
            <br />
          </Jumbotron>

          <Jumbotron>
            <h2>Results</h2>

          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book.id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.volumeInfo.title} by {book.volumeInfo.authors}
                    </strong>
                  </Link>
                  {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                </ListItem>
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
