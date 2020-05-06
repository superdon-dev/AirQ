import React, { Component } from "react";
import AutoCompleteInput from "../../components/AutocompleteInput/AutocompleteInput";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Input">
          <p className="Title">
            Keep up to date with the levels of air pollution in your city
          </p>
          <AutoCompleteInput />
        </div>
      </div>
    );
  }
}

export default SearchBar;
