import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    axios.post("http://localhost:3000",{username, email, password})
    .then((result) => {
      console.log(result);
     if (username && email && password) {
       Navigate("/login");
       alert("User created successfully");
     }
    })
    .catch((err)=>{
      console.log(err);
    });
    
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md hover:shadow-xl hover:shadow-purple-500/100 transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Signup
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </form>
        <div className="text-center my-4">
          <Link
            to={"/login"}
            className="text-indigo-600 hover:text-indigo-500 my-4"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;