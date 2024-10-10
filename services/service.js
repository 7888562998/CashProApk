import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl } from "../env";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseUrl, // Set the base URL for all requests
  
});

// Add an interceptor to dynamically update headers for each request
axiosInstance.interceptors.request.use(
  async(config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set token to Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;