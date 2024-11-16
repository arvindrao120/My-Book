import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://my-book-asi4.onrender.com");
        setBook(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook()
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl fle container mx-auto md:px-20 px-5">
        <div className="mt-28   text-center items-center justify-center">
          <h1 className=" text-2xl md:text-4xl mt-5">
            We're delighted to have you{" "}
            <span className="text-pink-400"> Here! :) </span>
          </h1>
          <p className="my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            suscipit fuga assumenda quae sint reiciendis enim optio accusantium
            voluptate quibusdam ullam similique quidem magni corporis in
            architecto molestiae distinctio, nesciunt doloribus quis eaque
            consequatur blanditiis velit. Impedit omnis iusto possimus libero
            quis. Nobis suscipit, temporibus vero pariatur ex ab quos.
          </p>
          <div className="mb-12">
            <Link to={"/"}>
              <button className="btn btn-secondary">Back</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  ">
          {book.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
