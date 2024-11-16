import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Card from "./Card";
import { useEffect } from "react";

function BookCard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    try {
      const getBook = async () => {
        const res = await axios.get("https://my-book-asi4.onrender.com");
       

        setBooks(
          res.data.filter((data) => {
            return data.category === "free";
          })
        );
      };
      getBook();
    } catch (error) {
      console, log(error);
    }
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl fle container mx-auto md:px-20 px-5 ">
        <div>
          <div className="my-6">
            <h1 className="text-2xl font-semibold	 my-3">
              Free Offered courses
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              quaerat quasi blanditiis, molestiae, aliquam unde laudantium iusto
              doloribus tempora molestias excepturi voluptatum itaque
              asperiores.
            </p>
          </div>
        </div>

        <div className="slider-container max-w-screen-2xl  flex flex-col justify-between">
          <Slider {...settings}>
            {books.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default BookCard;
