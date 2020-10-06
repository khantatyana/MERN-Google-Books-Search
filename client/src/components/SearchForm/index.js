import React from "react";

function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit} >
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Book"
          id="search"
          style={{width:"60%", alignItems:"center"}}
        />
        <br/>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;