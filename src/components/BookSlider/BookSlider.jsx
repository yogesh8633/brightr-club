import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleBookItem from "../SimpleBookItem/SimpleBookItem";
import axios from "axios";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const CustomArrow = ({ className, onClick, direction }) => (
  <div
    className={`${className} ${
      direction === "next" ? "right-16" : "left-16"
    } absolute top-1/2 w-[64px] h-[64px] bg-white rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out  hover:shadow-xl`}
    onClick={onClick}
    style={{ zIndex: 9999 }} // Ensure it's above other elements
  >
    {direction === "next" ? (
      <RightOutlined className="text-[#3B72FF] text-2xl" />
    ) : (
      <LeftOutlined className="text-[#3B72FF] text-2xl" />
    )}
  </div>
);

const BookSliderNew = ({ title }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("Fetching books for title:", title); // Debugging
  
    // Fetch data based on title
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/data", {
          params: { title },
        });
        console.log("Books fetched:", response.data); // Debugging
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
  
    fetchBooks();
  }, [title]);
  

  const settings = {
    className: "slider variable-width",
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust based on the number of visible slides
    slidesToScroll: 1,
    arrows: true,
    dots: false, // No dots
    nextArrow: <CustomArrow direction="next" />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200, // For large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // For medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // For small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400, // For very small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {title && <h2 className="text-2xl font-semibold mt-5">{title}</h2>}
      <Slider {...settings} className="py-4  ">
        {books.length > 0 &&
          books.map((book, index) => (
            <div key={index} className="px-2">
              <SimpleBookItem book={book} />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default BookSliderNew;
