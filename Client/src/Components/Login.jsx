import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post("http://localhost:3000/login", { username, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Login successful") 
          localStorage.setItem('username', username);
        Navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid credentials");
      });
    
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md hover:shadow-xl hover:shadow-purple-500/100 transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username 
            </label>
            <input
              id="username"
              name="username"
              type="username"
              value={username}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
          <div className="text-center">
            <Link to={"/"} className="text-indigo-600 hover:text-indigo-500">
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
