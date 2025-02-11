import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaEdit, FaTrash, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [modalType, setModalType] = useState(""); // "order" or "user"
  const [showEditModal, setShowEditModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

    setOrders(savedOrders);
    setUsers(savedUsers);
    setCurrentUser(currentUser);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    localStorage.removeItem("currentUser");
    navigate("/admin-login");
  };

  const handleDelete = (id, type) => {
    if (type === "order") {
      const updatedOrders = orders.filter(order => order.id !== id);
      setOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    } else {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const handleEdit = (item, type) => {
    setEditItem(item);
    setModalType(type);
    setShowEditModal(true);
  };

  const handleSave = () => {
    if (modalType === "order") {
      const updatedOrders = orders.map(order => (order.id === editItem.id ? editItem : order));
      setOrders(updatedOrders);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    } else {
      const updatedUsers = users.map(user => (user.id === editItem.id ? editItem : user));
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h2>
          <button onClick={handleLogout} className="text-red-500 flex items-center gap-2 mt-4 sm:mt-0">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {currentUser && (
          <div className="bg-yellow-100 p-3 sm:p-4 rounded-md flex items-center gap-3 mb-4">
            <FaUser className="text-yellow-600 text-lg sm:text-xl" />
            <p className="text-md sm:text-lg font-semibold">Welcome, {currentUser.username}!</p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaShoppingCart /> Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-yellow-400 text-white">
                <tr>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Order ID</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Total</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Status</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-4">No orders yet.</td></tr>
                ) : (
                  orders.map(order => (
                    <tr key={order.id} className="border-b">
                      <td className="px-4 py-2 sm:px-6 sm:py-4">{order.id}</td>
                      <td className="px-4 py-2 sm:px-6 sm:py-4">₹{order.totalAmount}</td>
                      <td className="px-4 py-2 sm:px-6 sm:py-4">{order.status}</td>
                      <td className="px-4 py-2 sm:px-6 sm:py-4 flex gap-3">
                        <button onClick={() => handleEdit(order, "order")} className="text-blue-500"><FaEdit /></button>
                        <button onClick={() => handleDelete(order.id, "order")} className="text-red-500"><FaTrash /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaUser /> Users
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-yellow-400 text-white">
                <tr>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Username</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Email</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr><td colSpan="3" className="text-center py-4">No users yet.</td></tr>
                ) : (
                  users.map(user => (
                    <tr key={user.id} className="border-b">
                      <td className="px-4 py-2 sm:px-6 sm:py-4">{user.username}</td>
                      <td className="px-4 py-2 sm:px-6 sm:py-4">{user.email}</td>
                      <td className="px-4 py-2 sm:px-6 sm:py-4 flex gap-3">
                        <button onClick={() => handleEdit(user, "user")} className="text-blue-500"><FaEdit /></button>
                        <button onClick={() => handleDelete(user.id, "user")} className="text-red-500"><FaTrash /></button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt, FaEdit, FaTrash, FaUser, FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [editItem, setEditItem] = useState(null);
//   const [modalType, setModalType] = useState(""); // "order" or "user"
//   const [showEditModal, setShowEditModal] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

//     setOrders(savedOrders);
//     setUsers(savedUsers);
//     setCurrentUser(currentUser);
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("admin");
//     localStorage.removeItem("currentUser");
//     navigate("/admin-login");
//   };

//   const handleDelete = (id, type) => {
//     if (type === "order") {
//       const updatedOrders = orders.filter(order => order.id !== id);
//       setOrders(updatedOrders);
//       localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     } else {
//       const updatedUsers = users.filter(user => user.id !== id);
//       setUsers(updatedUsers);
//       localStorage.setItem("users", JSON.stringify(updatedUsers));
//     }
//   };

//   const handleEdit = (item, type) => {
//     setEditItem(item);
//     setModalType(type);
//     setShowEditModal(true);
//   };

//   const handleSave = () => {
//     if (modalType === "order") {
//       const updatedOrders = orders.map(order => (order.id === editItem.id ? editItem : order));
//       setOrders(updatedOrders);
//       localStorage.setItem("orders", JSON.stringify(updatedOrders));
//     } else {
//       const updatedUsers = users.map(user => (user.id === editItem.id ? editItem : user));
//       setUsers(updatedUsers);
//       localStorage.setItem("users", JSON.stringify(updatedUsers));
//     }
//     setShowEditModal(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-6 rounded-xl shadow-xl">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Admin Dashboard</h2>
//           <button onClick={handleLogout} className="text-red-500 flex items-center gap-2">
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>

//         {currentUser && (
//           <div className="bg-yellow-100 p-4 rounded-md flex items-center gap-3 mb-4">
//             <FaUser className="text-yellow-600 text-xl" />
//             <p className="text-lg font-semibold">Welcome, {currentUser.username}!</p>
//           </div>
//         )}

//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
//             <FaShoppingCart /> Orders
//           </h3>
//           <table className="w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-yellow-400 text-white">
//               <tr>
//                 <th className="px-6 py-3">Order ID</th>
//                 <th className="px-6 py-3">Total</th>
//                 <th className="px-6 py-3">Status</th>
//                 <th className="px-6 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.length === 0 ? (
//                 <tr><td colSpan="4" className="text-center py-4">No orders yet.</td></tr>
//               ) : (
//                 orders.map(order => (
//                   <tr key={order.id} className="border-b">
//                     <td className="px-6 py-4">{order.id}</td>
//                     <td className="px-6 py-4">₹{order.totalAmount}</td>
//                     <td className="px-6 py-4">{order.status}</td>
//                     <td className="px-6 py-4 flex gap-3">
//                       <button onClick={() => handleEdit(order, "order")} className="text-blue-500"><FaEdit /></button>
//                       <button onClick={() => handleDelete(order.id, "order")} className="text-red-500"><FaTrash /></button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
//             <FaUser /> Users
//           </h3>
//           <table className="w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-yellow-400 text-white">
//               <tr>
//                 <th className="px-6 py-3">Username</th>
//                 <th className="px-6 py-3">Email</th>
//                 <th className="px-6 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.length === 0 ? (
//                 <tr><td colSpan="3" className="text-center py-4">No users yet.</td></tr>
//               ) : (
//                 users.map(user => (
//                   <tr key={user.id} className="border-b">
//                     <td className="px-6 py-4">{user.username}</td>
//                     <td className="px-6 py-4">{user.email}</td>
//                     <td className="px-6 py-4 flex gap-3">
//                       <button onClick={() => handleEdit(user, "user")} className="text-blue-500"><FaEdit /></button>
//                       <button onClick={() => handleDelete(user.id, "user")} className="text-red-500"><FaTrash /></button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
