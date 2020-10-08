import axios from "axios";

export default {

  //Google API
  fetchBooks: function(query) {
    console.log('https://www.googleapis.com/books/v1/volumes?q=' + query)
    return axios
      .get('https://www.googleapis.com/books/v1/volumes?q=' + query)
      
      
  },
  // Gets all books from DB
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("this's saved book", bookData);
    return axios.post("/api/books", bookData);
  }
};
