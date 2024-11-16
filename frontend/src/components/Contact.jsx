import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
  setFormData((curr)=>{
    curr[e.target.name] = e.target.value
    return{...curr}
  })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to a server).
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 my-32  rounded shadow-md shadow-pink-500">
        <h2 className="text-2xl font-semibold mb-4 text-pink-500">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded  "
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-800 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded "
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className ="btn btn-active btn-secondary"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
