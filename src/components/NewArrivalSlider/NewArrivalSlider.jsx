import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import catch_turkey from "../../assets/catch_turkey.jpeg";
import bad_day from "../../assets/bad_day.jpeg";
import ruby_worry from "../../assets/ruby_worry.jpeg";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import BookCard from "../BookCard/BookCard";

const books = [
  {
    image: bad_day,
    title: "Bea's Bad Day",
    author: "Adam Wallace",
    rating: 4.3,
    reviews: 1234,
    description: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
    tags: ["New Arrival", "3-6 years"],
    background: "bg-[#EDF2FF]"
  },
  {
    image: catch_turkey,
    title: "How to Catch a Turkey",
    author: "Adam Wallace",
    rating: 4.3,
    reviews: 1234,
    description: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
    tags: ["New Arrival", "3-6 years"],
      background: "bg-[#FFF0ED]"
  },
  {
    image: ruby_worry,
    title: "Ruby's Worry",
    author: "Tom Percival",
    rating: 4.3,
    reviews: 1234,
    description: "All mamma wants on her special day is a little bit of peace, love, and cleanliness...",
    tags: ["New Arrival", "3-6 years"],
    background: "bg-[#DCF8EE]"

  },
  // Add more book objects as needed
];

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
const BookSlider = () => {
  fetch('http://localhost:3000/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Handle the data as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one full slide at a time
    slidesToScroll: 1,
    centerMode: true, // Center the active slide
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    centerPadding: "30%", // Show 20% of the previous and next slides

    responsive: [
      {
        breakpoint: 1500, // For screens less than 1024px
        settings: {
          slidesToShow: 1,
          centerPadding: "20%", // Adjust the padding for medium screens
        },
      },
      {
        breakpoint: 1200, // For screens less than 1024px
        settings: {
          slidesToShow: 1,
          centerPadding: "20%", // Adjust the padding for medium screens
        },
      },
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 1,
          centerPadding: "10%", // Adjust the padding for medium screens
        },
      },
      {
        breakpoint: 768, // For screens less than 768px
        settings: {
          slidesToShow: 1,
          centerPadding: "5%", // Adjust the padding for small screens
        },
      },
      {
        breakpoint: 480, // For screens less than 480px
        settings: {
          slidesToShow: 1,
          centerPadding: "5%", // Adjust the padding for extra small screens
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="py-[100px] h-[500px]">
      {books.map((book, index) => (
        <div key={index}>
          <BookCard book={book} />
        </div>
      ))}
    </Slider>
  );
};

export default BookSlider;
