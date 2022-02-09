import React from "react";
import DayTabBar from "./DayTabBar";
import MonthTabBar from "./MonthTabBar";
import DisplayPane from "./DisplayPane";
import {Container, Row, Col} from 'react-bootstrap';

class StateControl extends React.Component {

  constructor(props) {
    super(props);
    const date = new Date();
    let day = null;
    let month = null;
    switch (date.getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    switch (date.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3: 
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }

    this.state = {
      day: day,
      month: month
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
        <div className="broccoli-background"></div>
        <Container>
          <Row>
            <Col className="col-2 no-right-margin"></Col>
            <Col className="col-10 no-left-margin no-right-margin">
              <DayTabBar selectedDay={this.state.day} 
                updateDay={this.updateDay} />
            </Col>
          </Row>
          <Row>
            <Col className="col-2 no-right-margin">
              <MonthTabBar selectedMonth={this.state.month} 
                updateMonth={this.updateMonth} />
            </Col>
            <Col className="col-10 no-left-margin">
              <DisplayPane selectedMonth={this.state.month}
                selectedDay={this.state.day} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default StateControl;