
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "./Toast/Toast";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [role, setRole] = useState("student");
   

  const handleform = (e) =>{
    const {name , value} = e.target

    setData({
        ...data,
        [name] : value
  })
  }


  const handleLogin = (e) => {
    e.preventDefault();
    var user = {
        name : data.name,
        role : role,
        email : data.email,
        password : data.password
    }
    localStorage.setItem("currentUser", JSON.stringify(user));

    notifySuccess("Register successful!");
     navigate('/login')
  
     
     
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-300">

      <div className="bg-white dark:bg-slate-900 w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="bg-indigo-600 text-white w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold mx-auto shadow-md">
            J
          </div>

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-4">
            JoinEazy
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Assignment Management Portal
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              onChange={handleform}
              required={true}
              placeholder="Enter your name"
              className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              Your Email
            </label>

            <input
              type="email"
              name='email'
              onChange={handleform}
              required={true}
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              Your Password
            </label>

            <input
              type="password"
              name='password'
              required={true}
              onChange={handleform}
              placeholder="Enter your password"
              className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              Login As
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition shadow-sm"
          >
            Register
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
          © 2026 JoinEazy. All rights reserved.
        </p>

      </div>

    </div>
  );
}

export default Register;
