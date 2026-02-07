// import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth";

// export const loginUser = async (loginData) => {
//   return axios.post(`${API_URL}/login`, loginData);
// };

// export const signupUser = async (signupData) => {
//   return axios.post(`${API_URL}/signup`, signupData);
// };


import axiosInstance from "./axiosConfig";

export const loginUser = (data) =>
  axiosInstance.post("/api/auth/login", data);

export const signupUser = (data) =>
  axiosInstance.post("/api/auth/signup", data);
