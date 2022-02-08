import React from "react";

function DayTab(props) {
  if (props.day === props.selectedDay) {
    return (
      <button>{props.day}</button>
    )
  } else {
    return (
      <button onClick={updateDay}>{props.day}</button>
    )
  }
  
  function updateDay() {
    props.updateDay(props.day);
  }
}

export default DayTab;