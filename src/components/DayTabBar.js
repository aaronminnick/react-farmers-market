import React from "react";
import DayTab from "./DayTab";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function DayTabBar(props) {
  return (
    <React.Fragment>
      {days.map((d, index) => 
        <DayTab day={d}
          selectedDay={props.selectedDay}
          updateDay={props.updateDay}
          key={index} />
      )}
    </React.Fragment>
  )
}

export default DayTabBar;