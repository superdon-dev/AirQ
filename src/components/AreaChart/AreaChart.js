import React, { PureComponent } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import "./AreaChart.css";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    const y1 = this.props.results[Object.keys(this.props.results)[0]];
    const y2 = this.props.results[Object.keys(this.props.results)[1]];
    const data = [
      {
        name: "JAN",
        y1: y1.jan ? y1.jan : 0,
        y2: y2.jan ? y2.jan : 0,
      },
      {
        name: "FEB",
        y1: y1.feb ? y1.feb : 0,
        y2: y2.feb ? y2.feb : 0,
      },
      {
        name: "MAR",
        y1: y1.mar ? y1.mar : 0,
        y2: y2.mar ? y2.mar : 0,
      },
      {
        name: "APR",
        y1: y1.apr ? y1.apr : 0,
        y2: y2.apr ? y2.apr : 0,
      },
      {
        name: "MAY",
        y1: y1.may ? y1.may : 0,
        y2: y2.may ? y2.may : 0,
      },
      {
        name: "JUN",
        y1: y1.jun ? y1.jun : 0,
        y2: y2.jun ? y2.jun : 0,
      },
      {
        name: "JUL",
        y1: y1.jul ? y1.jul : 0,
        y2: y2.jul ? y2.jul : 0,
      },
      {
        name: "AUG",
        y1: y1.aug ? y1.aug : 0,
        y2: y2.aug ? y2.aug : 0,
      },
      {
        name: "SEP",
        y1: y1.sep ? y1.sep : 0,
        y2: y2.sep ? y2.sep : 0,
      },
      {
        name: "OCT",
        y1: y1.oct ? y1.oct : 0,
        y2: y2.oct ? y2.oct : 0,
      },
      {
        name: "NOV",
        y1: y1.nov ? y1.nov : 0,
        y2: y2.nov ? y2.nov : 0,
      },
      {
        name: "DEC",
        y1: y1.dec ? y1.dec : 0,
        y2: y2.dec ? y2.dec : 0,
      },
    ];

    return (
      <React.Fragment>
        <AreaChart width={950} height={300} data={data} className="AreaChart">
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />

          <Area type="monotone" dataKey="y1" stackId="1" fill="#BEECF7" />
          <Area type="monotone" dataKey="y2" stackId="2" fill="#07061c" />
        </AreaChart>
        <div className="AreaChart__Text">
          <p>
            YEARLY AIR QUALITY INDEX (
            {Object.keys(this.props.results)[0] +
              "/" +
              Object.keys(this.props.results)[1]}
            )
          </p>
        </div>
      </React.Fragment>
    );
  }
}
