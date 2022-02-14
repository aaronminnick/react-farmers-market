const dateReducer = (state, action) => {

  const {day, month} = action;

  switch (action.type) {
    case "UPDATE_DAY":
      return Object.assign({}, state, {
        day: day
      });
    case "UPDATE_MONTH":
      return Object.assign({}, state, {
        month: month
      });
    default:
      const date = new Date();
      let d = null;
      let m = null;
      switch (date.getDay()) {
        case 0:
          d = "Sunday";
          break;
        case 1:
          d = "Monday";
          break;
        case 2:
          d = "Tuesday";
          break;
        case 3:
          d = "Wednesday";
          break;
        case 4:
          d = "Thursday";
          break;
        case 5:
          d = "Friday";
          break;
        case 6:
          d = "Saturday";
          break;
      }
      switch (date.getMonth()) {
        case 0:
          m = "January";
          break;
        case 1:
          m = "February";
          break;
        case 2:
          m = "March";
          break;
        case 3: 
          m = "April";
          break;
        case 4:
          m = "May";
          break;
        case 5:
          m = "June";
          break;
        case 6:
          m= "July";
          break;
        case 7:
          m = "August";
          break;
        case 8:
          m = "September";
          break;
        case 9:
          m = "October";
          break;
        case 10:
          m = "November";
          break;
        case 11:
          m = "December";
          break;
      }
      return {day: d, month: m};
  }
};

export default dateReducer;