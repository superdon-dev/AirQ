import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "./components/Navigation/Navigation";
import SearchBar from "./containers/SearchBar/SearchBar";
import MainContent from "./containers/MainContent/MainContent";
import AboutSection from "./containers/AboutSection/AboutSection";
import StatsSection from "./containers/StatsSection/StatsSection";
import ProcessSection from "./containers/ProcessSection/ProcessSection";

import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <SearchBar />
        <Route path="/" exact>
          <MainContent>
            <AboutSection />
          </MainContent>
        </Route>
        <Route path="/stats" exact>
          <MainContent>
            <StatsSection />
          </MainContent>
        </Route>
        <Route path="/process" exact>
          <MainContent>
            <ProcessSection />
          </MainContent>
        </Route>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.pollution.results,
  };
};
export default connect(mapStateToProps)(App);
