
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { LogOut } from "react-feather"; // Importing logout icon

// const UserLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("currentUser"));
//     if (user) {
//       setIsLoggedIn(true);
//       setCurrentUser(user);
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password && name && mobile && email && address) {
//       const user = {
//         id: Date.now(),
//         username,
//         name,
//         mobile,
//         email,
//         address,
//         role: "user",
//       };
//       localStorage.setItem("currentUser", JSON.stringify(user));

//       const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
//       savedUsers.push(user);
//       localStorage.setItem("users", JSON.stringify(savedUsers));

//       setIsLoggedIn(true);
//       setCurrentUser(user);
//       navigate("/");
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("currentUser");
//     setIsLoggedIn(false);
//     setCurrentUser(null);
//     navigate("/");
//   };

//   if (isLoggedIn) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-yellow-500">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
//           <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser.name}!</h2>
//           <p>Username: {currentUser.username}</p>
//           <p>Email: {currentUser.email}</p>
//           <p>Mobile: {currentUser.mobile}</p>
//           <p>Address: {currentUser.address}</p>
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
//           >
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-yellow-500">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">User Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             className="w-full p-2 border rounded-lg mb-4"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full p-2 border rounded-lg mb-4"
//           />
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Full Name"
//             className="w-full p-2 border rounded-lg mb-4"
//           />
//           <input
//             type="text"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="Mobile Number"
//             className="w-full p-2 border rounded-lg mb-4"
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email Address"
//             className="w-full p-2 border rounded-lg mb-4"
//           />
//           <textarea
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Address"
//             className="w-full p-2 border rounded-lg mb-4"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white p-2 rounded-lg"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "react-feather";
import { FaUser, FaLock, FaEnvelope, FaMobile, FaHome } from "react-icons/fa";

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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Welcome, {currentUser.name}!</h2>
          <p className="text-gray-700"><FaUser className="inline-block mr-2" /> {currentUser.username}</p>
          <p className="text-gray-700"><FaEnvelope className="inline-block mr-2" /> {currentUser.email}</p>
          <p className="text-gray-700"><FaMobile className="inline-block mr-2" /> {currentUser.mobile}</p>
          <p className="text-gray-700"><FaHome className="inline-block mr-2" /> {currentUser.address}</p>
          <button
            onClick={handleLogout}
            className="mt-6 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <LogOut size={20} /> Logout 🚀
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🔐 User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaMobile className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative mb-4">
            <FaHome className="absolute left-3 top-3 text-gray-500" />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🚀 Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
