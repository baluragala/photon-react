import * as actionTypes from "../actionTypes";

export const incAction = by => ({
  type: actionTypes.INC,
  by
});
export const decAction = by => ({
  type: actionTypes.DEC,
  by
});
