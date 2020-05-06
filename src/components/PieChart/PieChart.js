import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./PieChart.css";

const COLORS = ["#07061C", "#BEECF7"];
export default class Example extends PureComponent {
  state = {
    data: [
      { name: "PM10", value: 0 },
      { name: "ALLOWED", value: 0 },
    ],
  };
  componentDidMount() {
    if (this.props.result) {
      this.setState({
        data: [
          { name: "PM10", value: this.props.result },
          { name: "ALLOWED", value: this.props.allowed },
        ],
      });
    }
  }
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/3Leoa7f4/";
  render() {
    let chart = (
      <div className="spacers">
        <p>no info</p>
      </div>
    );

    if (this.props.result > 0) {
      chart = (
        <PieChart width={120} height={120}>
          <Pie
            data={this.state.data}
            cx={50}
            cy={50}
            innerRadius={30}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {this.state.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      );
    }

    return (
      <React.Fragment>
        <div className="PieChart__Day">
          <p>{this.props.name}</p>
        </div>
        {chart}
        {this.props.result > 0 ? (
          <div className="PieChart__Day">
            <p>{this.props.result + "/" + this.props.allowed}</p>
            <p>µg/m3</p>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
