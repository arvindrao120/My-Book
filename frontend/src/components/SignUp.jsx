import React, { useState } from "react";
import Navbar from "./Navbar";

import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((curr) => {
      curr[e.target.name] = e.target.value;
      return { ...curr };
      
    });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to a server).
    setFormData({ username: "", email: "", password: "" });
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="w-full max-w-lg mx-auto mt-48 ">
        <h1 className="text-4xl text-pink-500 text-center mb-5">Sign Up</h1>
        <form
          className="shadow-md shadow-pink-500 rounded px-8 pt-5 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              required="true"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required="true"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter New Password"
              value={formData.password}
              required="true"
              onChange={handleChange}
            />
          </div>
          <div className="flex space-y-6 flex-col items-center justify-between">
            <button className="btn btn-secondary"> Sign Up</button>
            <h2>
              Already have an account{" "}
              <Link to={"/"} className="text-pink-500">
                {" "}
                Sign In
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
