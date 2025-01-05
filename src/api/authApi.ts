import { LoginRequest } from '../types/payload/request/AuthRequestType';
import { LoginResponse } from '../types/payload/response/AuthResponseType';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

export const loginApi = async (request: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, { request });
    console.log("Login response:", response.data);  // Log the actual response data
    return response.data;  // Assuming the API returns { accessToken, refreshToken, expiresIn }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      console.error('Axios error response:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Invalid credentials');
    } else if (error instanceof Error) {
      // General JavaScript error
      console.error('General error:', error.message);
      throw new Error(error.message);
    } else {
      // Fallback for unexpected error shapes
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};