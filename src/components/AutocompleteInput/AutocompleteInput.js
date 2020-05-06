import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { connect } from "react-redux";
import * as actions from "../../store/actions/exports";
import "./AutocompleteInput.css";

export class AutocompleteInput extends Component {
  state = {
    suggestions: [],
    city: "",
    redirect: false,
    items: ["Skopje", "Strumica"],
    message: false,
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/stats#results" />;
    }
  };
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.items.sort().filter((v) => regex.test(v));
    }
    this.setState({ suggestions: suggestions, city: value });
  };
  suggestionSelected = (value) => {
    this.setState({ city: value, suggestions: [] });
  };
  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.items.indexOf(this.state.city) !== -1) {
      this.props.fetchPollution(this.state.city.toLowerCase());
      this.props.fetchYearlyPollution(this.state.city);
      this.setState({ redirect: true });
      this.setState({ message: false });
    } else {
      this.setState({ city: "" });
      this.setState({ message: true });
    }
  };
  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { city } = this.state;
    return (
      <div className="AutoCompleteText">
        {this.renderRedirect()}
        {this.state.message ? (
          <h4 style={{ color: "maroon", margin: "0 0 1vh 0" }}>
            *select a valid city from the list
          </h4>
        ) : null}
        <form onSubmit={(e) => this.submitHandler(e)} className="GroupAlign">
          <input
            type=""
            value={city}
            onChange={this.onTextChanged}
            placeholder="Enter city"
          />
          <button className="Button">
            <GoArrowRight />
          </button>
        </form>
        {this.renderSuggestions()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPollution: (city) => dispatch(actions.fetchCityPollution(city)),
    fetchYearlyPollution: (city, year) =>
      dispatch(actions.fetchYearlyPollution(city, year)),
  };
};
export default connect(null, mapDispatchToProps)(AutocompleteInput);
