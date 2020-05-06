import axios from "axios";
import * as actionTypes from "./actionTypes";
import firebase from "../../firebase";

export const fetchPollutionStart = () => {
  return {
    type: actionTypes.FETCH_POLLUTION_START,
  };
};
export const fetchPollutionSuccess = (data, city) => {
  return {
    type: actionTypes.FETCH_POLLUTION_SUCCESS,
    results: data,
    city: city,
  };
};
export const fetchPollutionFail = (error) => {
  return {
    type: actionTypes.FETCH_POLLUTION_FAIL,
    error: error,
  };
};

export const fetchCityPollution = (city) => {
  let url = `https://api.waqi.info/feed/${city}/?token=5e4990e030ccf0f09ff8f57721563ce090a4bf14`;
  return (dispatch) => {
    dispatch(fetchPollutionStart());
    axios.get(url).then(
      (response) => {
        dispatch(fetchPollutionSuccess(response.data, city));
      },
      (error) => {
        dispatch(fetchPollutionFail(error));
      }
    );
  };
};

export const fetchYearlyPollutionStart = () => {
  return {
    type: actionTypes.FETCH_YEARLY_POLLUTION_START,
  };
};
export const fetchYearlyPollutionSuccess = (data) => {
  return {
    type: actionTypes.FETCH_YEARLY_POLLUTION_SUCCESS,
    yearlyResults: data,
  };
};
export const fetchYearlyPollutionFail = (error) => {
  return {
    type: actionTypes.FETCH_YEARLY_POLLUTION_FAIL,
    error: error,
  };
};

export const fetchYearlyPollution = (city) => {
  return (dispatch) => {
    dispatch(fetchYearlyPollutionStart());
    firebase
      .database()
      .ref(city)
      .once("value", (snapshot) => {
        dispatch(fetchYearlyPollutionSuccess(snapshot.val()));
      });
  };
};
