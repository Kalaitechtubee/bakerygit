import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock } from 'react-icons/fa';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin123') {
            navigate('/admin-dashboard');
        } else {
            alert('❌ Invalid credentials, please try again!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center">
                <FaUserShield className="text-5xl text-purple-700 mx-auto mb-4" />
                <h2 className="text-3xl font-extrabold mb-6 text-gray-800">🔐 Admin Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <FaUserShield className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="👤 Admin Username"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="🔑 Password"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-purple-600 hover:bg-purple-800 text-white p-3 rounded-xl text-lg font-semibold transition duration-300">
                        🚀 Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;