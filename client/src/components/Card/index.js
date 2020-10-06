import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function Card({ book, saveBook }) {
    return (
        <Container className="card text-center" key={book.id}>
            <Row>
                <Col size="md-2">
                    {book.volumeInfo.imageLinks.thumbnail ? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="img" />
                    ) : (<img src="" />)}
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
                    <button className="btn btn-primary" onClick={(e) => saveBook(e)}>Save  <i className="fas fa-bookmark"></i></button>
                </Col>
            </Row>

            <br />
        </Container>
    );
}

export default Card;