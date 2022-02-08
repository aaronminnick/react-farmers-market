import React from "react";
import Button from "react-bootstrap/Button";

function DayTab(props) {
  if (props.day === props.selectedDay) {
    return (
      <Button className="btn btn-selected btn-day">
        {props.day}
      </Button>
    )
  } else {
    return (
      <Button className="btn btn-day" onClick={updateDay}>
        {props.day}
      </Button>
    )
  }
  
  function updateDay() {
    props.updateDay(props.day);
  }
}

export default DayTab;