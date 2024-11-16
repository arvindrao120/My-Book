import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className=" p-16 rounded shadow-md shadow-pink-500 my-40 mx-20">
        <h1 className="text-3xl font-semibold mb-10 text-pink-500 ">About Our Bookstore</h1>
        <p className="text-gray-100">
          Welcome to our cozy little bookstore! We are passionate about books
          and love sharing our collection with fellow bookworms. Here's a bit
          about us:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>
            We curate a diverse selection of genres, from classics to
            contemporary fiction.
          </li>
          <li>
            Our knowledgeable staff is always ready to recommend your next
            favorite read.
          </li>
          <li>
            Join our book clubs and engage in lively discussions with fellow
            readers.
          </li>
          <li>
            Explore our cozy reading nooks and lose yourself in captivating
            stories.
          </li>
        </ul>
        <button className="btn btn-secondary my-5" > Learn More </button>
        <p className="mt-4 text-gray-100">
          Whether you're a lifelong reader or just starting your literary
          journey, we're here to make your book-buying experience delightful!
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default About;
