import dateReducer from "../../reducers/date-reducer";

describe('dateReducer', () => {
  let action;

  const currentState = {
    day: "Monday",
    month: "January",
  }

  test('Should successfully update day', () => {
    action = {
      type: "UPDATE_DAY",
      day: "Tuesday"
    }
    expect(dateReducer(currentState, action)).toEqual({
      day: "Tuesday",
      month: "January"
    });
  });

  test('Should successfully update month', () => {
    action = {
      type: "UPDATE_MONTH",
      month: "December"
    }
    expect(dateReducer(currentState, action)).toEqual({
      day: "Monday",
      month: "December"
    });
  });
});