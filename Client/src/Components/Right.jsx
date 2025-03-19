import React, { useEffect, useState } from "react";
import users from "../Dummy data/People";
import '../App.css'

const Right = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username"); // Get stored username
    if (storedUsername) {
      fetch(`http://localhost:5173/login?username=${storedUsername}`);
      console.log(storedUsername);

      setUsername(storedUsername);
    }
  }, []);
  let nickState = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(nickname);
    nickState = true;
    
  };

  return (
    <div className="w-[30vw] p-4 min-h-screen fixed bg-black text-white shadow-md border-l-2 border-gray-500">
      <h1 className="text-2xl font-bold text-purple-600">
        Welcome, {username}!
      </h1>
      <div className="peoples mt-4 p-4 border border-gray-500 rounded-lg max-h-[50vh] overflow-y-auto" key={users.username}>
        <h2 className="text-xl font-semibold mb-2">People you may know</h2>
        {users.map((user) => (
          <div key={user.username} className="card flex items-center mb-4">
            <img src={user.imageUrl} alt={user.noProfile} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p>{user.name}</p>
              <p className="text-gray-500">{user.username}</p>
            </div>
          </div>
        ))}
      </div>
      
      {nickState ? (
        <div>Username applied</div>
      ) :  <div className="nickname mt-4 p-4 border border-gray-500 rounded-lg">
      <label htmlFor="nickname" className="block text-sm font-medium text-gray-300 mb-2">What is your nickname?</label>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          id="nickname"
          className="flex-grow p-2 border border-gray-500 rounded-lg bg-black text-white"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button type="submit" className="py-2 px-4 bg-white text-black rounded hover:bg-gray-200 text-center">
          Done
        </button>
      </form>
    </div>}
     
    </div>
  );
};

export default Right;