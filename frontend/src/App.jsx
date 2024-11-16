import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
