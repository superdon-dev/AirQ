import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import BoxChart from "../../components/BoxChart/BoxChart";
import PieChart from "../../components/PieChart/PieChart";
import AreaChart from "../../components/AreaChart/AreaChart";
import "./StatsSection.css";
export class StatsSection extends Component {
  render() {
    let pieCharts = <Spinner />;
    let areaChart = <Spinner />;
    let boxCharts = <Spinner />;
    if (this.props.results) {
      pieCharts = (
        <React.Fragment>
          <div className="CardHalf__charts">
            <PieChart
              key={this.props.city}
              result={
                this.props.results.data.iaqi.pm10
                  ? this.props.results.data.iaqi.pm10.v
                  : 0
              }
              allowed={40}
              name="PM10"
            />
          </div>
          <div className="CardHalf__charts">
            <PieChart
              key={this.props.city}
              result={
                this.props.results.data.iaqi.pm25
                  ? this.props.results.data.iaqi.pm25.v
                  : 0
              }
              allowed={25}
              name="PM2.5"
            />
          </div>
          <div className="CardHalf__charts">
            <PieChart
              key={this.props.city}
              result={
                this.props.results.data.aqi ? this.props.results.data.aqi : 0
              }
              allowed={50}
              name="AQI"
            />
          </div>
        </React.Fragment>
      );
      boxCharts = (
        <React.Fragment>
          {" "}
          <div className="CardHalf__charts">
            <BoxChart
              key={this.props.city}
              results={this.props.results.data ? this.props.results.data : 0}
              day="03.05.2020"
            />
          </div>
          <div className="CardHalf__charts">
            <BoxChart
              key={this.props.city}
              results={this.props.results.data ? this.props.results.data : 0}
              day="04.05.2020"
            />
          </div>
          <div className="CardHalf__charts">
            <BoxChart
              key={this.props.city}
              results={this.props.results.data ? this.props.results.data : 0}
              day="05.05.2020"
            />
          </div>
        </React.Fragment>
      );
    }
    if (this.props.yearlyResults) {
      areaChart = <AreaChart results={this.props.yearlyResults} />;
    }

    return (
      <div id="results">
        {this.props.city ? (
          <React.Fragment>
            <h3 className="TextTitle">
              Daily, monthly and yearly stats for{" "}
              {this.props.city.toUpperCase()}
            </h3>
            <div className="StatsSection">
              <div className="CardHalf">{pieCharts}</div>
              <div className="CardHalf">{boxCharts}</div>
            </div>
            <div className="StatsSection">
              <div className="CardFull">{areaChart}</div>
            </div>
          </React.Fragment>
        ) : (
          <div className="StatsSection">
            <h3 className="MessageBox">
              Select a valid city from the list above!
            </h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.pollution.results,
    yearlyResults: state.pollution.yearlyResults,
    city: state.pollution.city,
  };
};
export default connect(mapStateToProps)(StatsSection);
