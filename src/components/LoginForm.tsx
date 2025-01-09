import React, { useState } from "react";
import { loginApi } from "../api/AuthApi";
import { useAuthHook } from "../hooks/AuthHook";
import { useNavigate } from "react-router-dom";
import { InputTextField } from "./common/Input";
import { Button } from "./common/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuthHook();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginApi({ email, password }); // Get login data
      login(data.accessToken); // Store token in context
      navigate("/"); // Redirect to home
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <InputTextField
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        variant="filled"
        label="Email"
        errorMessage={error ? "Invalid email" : ""}
      />
      <InputTextField
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        variant="filled"
        label="Password"
        errorMessage={error ? "Invalid password" : ""}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
