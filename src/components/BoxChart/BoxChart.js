import React, { PureComponent } from "react";
import { BarChart, Bar } from "recharts";
import "./BoxChart.css";

export default class BoxChart extends PureComponent {
  state = {
    data: [
      { name: "PM10", value: 0 },
      { name: "PM25", value: 0 },
      { name: "AQI", value: 0 },
    ],
  };
  componentDidMount() {
    if (this.props.results) {
      this.setState({
        data: [
          {
            name: "PM10",
            value: this.props.results.iaqi.pm10
              ? this.props.results.iaqi.pm10.v
              : 0,
          },
          {
            name: "PM25",
            value: this.props.results.iaqi.pm25
              ? this.props.results.iaqi.pm25.v
              : 0,
          },
          {
            name: "AQI",
            value: this.props.results.aqi ? this.props.results.aqi : 0,
          },
        ],
      });
    }
  }
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";
  render() {
    let chart = (
      <div className="spacers">
        <p>no info</p>
      </div>
    );
    if (this.props.results) {
      chart = (
        <BarChart width={120} height={120} data={this.state.data}>
          <Bar dataKey="value" barSize={20} fill="#07061C" />
        </BarChart>
      );
    }
    return (
      <React.Fragment>
        {chart}
        <div className="BarChart__Day">
          <p>{this.props.day}</p>
        </div>
      </React.Fragment>
    );
  }
}
