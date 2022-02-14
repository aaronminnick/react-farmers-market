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
      return state;
  }
};

export default dateReducer;