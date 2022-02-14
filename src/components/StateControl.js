import React from "react";
import DayTabBar from "./DayTabBar";
import MonthTabBar from "./MonthTabBar";
import DisplayPane from "./DisplayPane";
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

class StateControl extends React.Component {

  constructor(props) {
    super(props);
  }

  updateDay = (d) => {
    const {dispatch} = this.props;
    const action = {
      type: "UPDATE_DAY",
      day: d
    }
    dispatch(action);
  };

  updateMonth = (m) => {
    const {dispatch} = this.props;
    const action = {
      type: "UPDATE_MONTH",
      month: m
    }
    dispatch(action);
  };

  render() {
    return (
      <React.Fragment>
        <div className="broccoli-background"></div>
        <Container>
          <Row>
            <Col className="col-2 no-right-margin"></Col>
            <Col className="col-10 no-left-margin no-right-margin">
              <DayTabBar selectedDay={this.props.day} 
                updateDay={this.updateDay} />
            </Col>
          </Row>
          <Row>
            <Col className="col-2 no-right-margin">
              <MonthTabBar selectedMonth={this.props.month} 
                updateMonth={this.updateMonth} />
            </Col>
            <Col className="col-10 no-left-margin">
              <DisplayPane selectedMonth={this.props.month}
                selectedDay={this.props.day} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    day: state.day,
    month: state.month
  }
}

StateControl = connect(mapStateToProps)(StateControl);

export default StateControl;