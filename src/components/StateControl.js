import React from "react";
import DayTabBar from "./DayTabBar";
import MonthTabBar from "./MonthTabBar";
// import DisplayPane from "./DisplayPane";

class StateControl extends React.Component {

  constructor(props) {
    super(props);
    // see if there is a way to use current date?
    this.state = {
      day: "Sunday",
      month: "Jan"
    }
  }

  updateDay = (d) => {
    this.setState({day: d});
  };

  updateMonth = (m) => {
    this.setState({month: m});
  };

  render() {
    return (
      <React.Fragment>
        <DayTabBar selectedDay={this.state.day} 
          updateDay={this.updateDay} />
        <MonthTabBar selectedMonth={this.state.month} 
          updateMonth={this.updateMonth} />
        <h2>{this.state.day}</h2>
        <h2>{this.state.month}</h2>
        {/* <DisplayPane month={this.state.month}
          day={this.state.day} /> */}
      </React.Fragment>
    );
  }
}

export default StateControl;