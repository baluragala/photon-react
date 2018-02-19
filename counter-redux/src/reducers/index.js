import * as actionTypes from "../actionTypes";
export function reducer(prevState = { counter: 0 }, action) {
  console.log(prevState, action);
  switch (action.type) {
    case actionTypes.INC:
      return { counter: prevState.counter + action.by };
    case actionTypes.DEC:
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}
