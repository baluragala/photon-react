import { INPUT_CHANGE } from "../actionTypes/users";

export default (prevState = { username: "" }, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...prevState, username: action.val };
    default:
      return prevState;
  }
};
