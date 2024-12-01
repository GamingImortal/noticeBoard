import React from "react";

export default function SearchForm() {
  return (
    <div className="searchBar">
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submitted");
        }}
      >
        <label id="name" htmlFor="searchForm">
          Search
        </label>
        <input id="name" htmlFor="text" className="searchFormCtrl"></input>
        <button className="btn btn-primary gap-3px" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
