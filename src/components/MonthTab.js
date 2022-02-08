import React from "react";

function MonthTab(props) {
  if (props.month === props.selectedMonth) {
    return (
      <button>{props.month}</button>
    )
  } else {
    return (
      <button onClick={updateMonth}>{props.month}</button>
    )
  }

  function updateMonth() {
    props.updateMonth(props.month);
  }
}

export default MonthTab;