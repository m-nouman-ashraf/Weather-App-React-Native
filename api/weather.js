import axios from "axios";
import { apiKey } from "../constants";

const forcastEndPoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const locationEndPoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const responce = await axios.request(options);
    return responce.data;
  } catch (err) {
    console.log("ERROR", err);
    return null;
  }
};

export const fetchweatherForcast = (params) => {
  return apiCall(forcastEndPoint(params));
};

export const fetchLocation = (params) => {
  return apiCall(locationEndPoint(params));
};
