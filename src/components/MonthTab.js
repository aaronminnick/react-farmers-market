import React from "react";
import Button from "react-bootstrap/Button";

function MonthTab(props) {
  if (props.month === props.selectedMonth) {
    return (
      <Button className="btn btn-selected btn-month">
        {props.month}
      </Button>
    )
  } else {
    return (
      <Button className="btn btn-month" onClick={updateMonth}>
        {props.month}
      </Button>
    )
  }

  function updateMonth() {
    props.updateMonth(props.month);
  }
}

export default MonthTab;