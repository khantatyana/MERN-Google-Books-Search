import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";
import API from "../../utils/API";

function Card({ book }) {
    const saveBooks = (event) => {
        event.preventDefault();
        API.saveBook({    
          author: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.previewLink,    
          title: book.volumeInfo.title
        })
        .then(() => {
          // setFormObject(res);
          alert("Saved " + book.volumeInfo.title + "!")
        })
        .catch(err => console.log(err));
      }
    return (
        <Container className="card text-center" key={book.id}>
            <Row>
                <Col size="md-2">
                    {book.volumeInfo.imageLinks.thumbnail ? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
                    ) : (<img src="" alt="" />)}
                </Col>
                <Col size="md-9">
                    <div className="card-header">
                        <a href={book.volumeInfo.previewLink} target="_blank">

                            <strong>
                                {book.volumeInfo.title} by {book.volumeInfo.authors}
                            </strong>
                        </a>
                    </div>
                    <div className="card-body">{book.volumeInfo.description}</div>
                </Col>
                <Col size="md-1">
                    <a href={book.volumeInfo.previewLink} target="_blank">
                        <button className="btn btn-primary">
                            View  <i className="fas fa-external-link-alt"></i>
                        </button>
                    </a>
                    <br /><br />
                    <button type="button" className="btn btn-primary" onClick={saveBooks}>Save  <i className="fas fa-bookmark"></i></button>
                </Col>
            </Row>

            <br />
        </Container>
    );
}

export default Card;