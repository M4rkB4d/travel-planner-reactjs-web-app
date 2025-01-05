import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

export const loginApi = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    console.log("Login response:", response.data);  // Log the actual response data
    return response.data;  // Assuming the API returns { accessToken, refreshToken, expiresIn }
  } catch (error) {
    console.log(error);
    throw new Error('Invalid credentials');
  }
};