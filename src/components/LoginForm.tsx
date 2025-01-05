import React, { useState } from 'react';
import { loginApi } from '../api/AuthApi';
import { useAuthHook } from '../hooks/UseAuthHook';
import { useNavigate } from 'react-router-dom';
import { LoginRequest } from '../types/payload/request/AuthRequestType';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuthHook();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      const request: LoginRequest = { email, password };

      const data = await loginApi(request);  // Get login data
      login(data.accessToken);  // Store token in context
      navigate('/');  // Redirect to home
    } catch (err) {
      console.log(err);
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;