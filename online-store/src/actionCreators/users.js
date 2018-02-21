import { INPUT_CHANGE } from "../actionTypes/users";

export function inputChange(val) {
  return {
    type: INPUT_CHANGE,
    val
  };
}
