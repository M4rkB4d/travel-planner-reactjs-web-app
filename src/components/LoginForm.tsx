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
      className="bg-transparent max-w-sm mx-auto space-y-10"
    >
      {/* Heading Section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-center">Welcome</h1>
        <h2 className="text-sm font-bold text-center">Login with Email</h2>
      </div>

      {/* Input Fields */}
      <div className="space-y-0 w-full md:w-96">
        {/* Email Input */}
        <InputTextField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="underlined"
          label="Email"
          errorMessage={error ? "Invalid email" : ""}
        />

        {/* Password Input */}
        <InputTextField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="underlined"
          label="Password"
          errorMessage={error ? "Invalid password" : ""}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="w-full md:w-40"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
