// import React, { useState, useEffect } from "react";
// import { FaSignOutAlt, FaEdit, FaTrash, FaUser, FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [editOrder, setEditOrder] = useState(null);
//   const [editUser, setEditUser] = useState(null);

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
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-6 rounded-xl shadow-xl">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold">Admin Dashboard</h2>
//           <Link to="/admin-login" className="text-red-500 flex items-center gap-2" onClick={handleLogout}>
//             <FaSignOutAlt /> Logout
//           </Link>
//         </div>

//         {currentUser && (
//           <div className="bg-yellow-100 p-4 rounded-md flex items-center gap-3 mb-4">
//             <FaUser className="text-yellow-600 text-xl" />
//             <p className="text-lg font-semibold">Welcome, {currentUser.username}!</p>
//           </div>
//         )}

//         {/* Orders Table */}
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
//             <FaShoppingCart /> Orders
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//               <thead className="bg-yellow-400 text-white">
//                 <tr>
//                   <th className="px-6 py-3 text-left">Order ID</th>
//                   <th className="px-6 py-3 text-left">Total Amount</th>
//                   <th className="px-6 py-3 text-left">Status</th>
//                   <th className="px-6 py-3 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.length === 0 ? (
//                   <tr>
//                     <td colSpan="4" className="px-6 py-4 text-center">No orders yet.</td>
//                   </tr>
//                 ) : (
//                   orders.map((order) => (
//                     <tr key={order.id} className="border-b hover:bg-gray-50">
//                       <td className="px-6 py-4">{order.id}</td>
//                       <td className="px-6 py-4">₹{order.totalAmount.toFixed(2)}</td>
//                       <td className="px-6 py-4">{order.status}</td>
//                       <td className="px-6 py-4 flex gap-3">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <FaEdit />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Users Table */}
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
//             <FaUser /> Users
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//               <thead className="bg-yellow-400 text-white">
//                 <tr>
//                   <th className="px-6 py-3 text-left">Username</th>
//                   <th className="px-6 py-3 text-left">Email</th>
//                   <th className="px-6 py-3 text-left">Address</th>
//                   <th className="px-6 py-3 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.length === 0 ? (
//                   <tr>
//                     <td colSpan="4" className="px-6 py-4 text-center">No users yet.</td>
//                   </tr>
//                 ) : (
//                   users.map((user) => (
//                     <tr key={user.id} className="border-b hover:bg-gray-50">
//                       <td className="px-6 py-4">{user.username}</td>
//                       <td className="px-6 py-4">{user.email}</td>
//                       <td className="px-6 py-4">{user.address}</td>
//                       <td className="px-6 py-4 flex gap-3">
//                         <button className="text-blue-500 hover:text-blue-700">
//                           <FaEdit />
//                         </button>
//                         <button className="text-red-500 hover:text-red-700">
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaEdit, FaTrash, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editOrder, setEditOrder] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "order" or "user"

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
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const handleEditOrder = (order) => {
    setEditOrder(order);
    setModalType("order");
    setShowEditModal(true);
  };

  const handleSaveOrder = (updatedOrder) => {
    const updatedOrders = orders.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setShowEditModal(false);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
    setModalType("user");
    setShowEditModal(true);
  };

  const handleSaveUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <Link
            to="/admin-login"
            className="text-red-500 flex items-center gap-2"
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Logout
          </Link>
        </div>

        {currentUser && (
          <div className="bg-yellow-100 p-4 rounded-md flex items-center gap-3 mb-4">
            <FaUser className="text-yellow-600 text-xl" />
            <p className="text-lg font-semibold">Welcome, {currentUser.username}!</p>
          </div>
        )}

        {/* Orders Table */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaShoppingCart /> Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-yellow-400 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Order ID</th>
                  <th className="px-6 py-3 text-left">Total Amount</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center">
                      No orders yet.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{order.id}</td>
                      <td className="px-6 py-4">₹{order.totalAmount.toFixed(2)}</td>
                      <td className="px-6 py-4">{order.status}</td>
                      <td className="px-6 py-4 flex gap-3">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleEditOrder(order)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteOrder(order.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Users Table */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaUser /> Users
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-yellow-400 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Username</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Address</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center">
                      No users yet.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{user.username}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.address}</td>
                      <td className="px-6 py-4 flex gap-3">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleEditUser(user)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">
              Edit {modalType === "order" ? "Order" : "User"}
            </h3>
            {modalType === "order" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveOrder(editOrder);
                }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <input
                    type="text"
                    value={editOrder.status}
                    onChange={(e) =>
                      setEditOrder({ ...editOrder, status: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
            {modalType === "user" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveUser(editUser);
                }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <input
                    type="text"
                    value={editUser.username}
                    onChange={(e) =>
                      setEditUser({ ...editUser, username: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={editUser.email}
                    onChange={(e) =>
                      setEditUser({ ...editUser, email: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Address</label>
                  <input
                    type="text"
                    value={editUser.address}
                    onChange={(e) =>
                      setEditUser({ ...editUser, address: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;