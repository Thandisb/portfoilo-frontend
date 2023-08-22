import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'Production'
      ? 'https://nyc-restaurant-api-zsv4.onrender.com/restaurants'
      : process.env.REACT_APP_API_URL,
  timeout: 50000,
});

export default AxiosInstance;