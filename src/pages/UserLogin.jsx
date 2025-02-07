
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "react-feather"; // Importing logout icon

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && name && mobile && email && address) {
      const user = {
        id: Date.now(),
        username,
        name,
        mobile,
        email,
        address,
        role: "user",
      };
      localStorage.setItem("currentUser", JSON.stringify(user));

      const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
      savedUsers.push(user);
      localStorage.setItem("users", JSON.stringify(savedUsers));

      setIsLoggedIn(true);
      setCurrentUser(user);
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-500">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser.name}!</h2>
          <p>Username: {currentUser.username}</p>
          <p>Email: {currentUser.email}</p>
          <p>Mobile: {currentUser.mobile}</p>
          <p>Address: {currentUser.address}</p>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-2 border rounded-lg mb-4"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border rounded-lg mb-4"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg mb-4"
          />
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Number"
            className="w-full p-2 border rounded-lg mb-4"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-2 border rounded-lg mb-4"
          />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full p-2 border rounded-lg mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

