import React from "react";
import MonthTab from "./MonthTab";

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];

function MonthTabBar(props) {
  return (
    <React.Fragment>
      {months.map((m, index) =>
        <MonthTab month={m}
          selectedMonth={props.selectedMonth}
          updateMonth={props.updateMonth}
          key={index} />
      )}
    </React.Fragment>
  )
}

export default MonthTabBar;