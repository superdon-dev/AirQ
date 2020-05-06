import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  results: null,
  error: null,
  loading: false,
  yearlyResults: null,
  city: null,
};
const fetchPollutionStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};
const fetchPollutionSuccess = (state, action) => {
  return updateObject(state, {
    city: action.city,
    results: action.results,
    error: null,
    loading: false,
  });
};
const fetchPollutionFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchYearlyPollutionStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};
const fetchYearlyPollutionSuccess = (state, action) => {
  return updateObject(state, {
    yearlyResults: action.yearlyResults,
    error: null,
    loading: false,
  });
};
const fetchYearlyPollutionFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POLLUTION_START:
      return fetchPollutionStart(state, action);
    case actionTypes.FETCH_POLLUTION_SUCCESS:
      return fetchPollutionSuccess(state, action);
    case actionTypes.FETCH_POLLUTION_FAIL:
      return fetchPollutionFail(state, action);
    case actionTypes.FETCH_YEARLY_POLLUTION_START:
      return fetchYearlyPollutionStart(state, action);
    case actionTypes.FETCH_YEARLY_POLLUTION_SUCCESS:
      return fetchYearlyPollutionSuccess(state, action);
    case actionTypes.FETCH_YEARLY_POLLUTION_FAIL:
      return fetchYearlyPollutionFail(state, action);
    default:
      return state;
  }
};

export default reducer;
