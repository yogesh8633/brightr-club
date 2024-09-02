import catch_turkey from "../../assets/catch_turkey.jpeg";
import bad_day from "../../assets/bad_day.jpeg";
import ruby_worry from "../../assets/ruby_worry.jpeg";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Slider from 'react-slick';
import SimpleBookItem from '../SimpleBookItem/SimpleBookItem';
import { useEffect, useState } from "react";
import axios from "axios";


// eslint-disable-next-line react/prop-types
const CustomArrow = ({ className, onClick, direction }) => (
  <div
    className={`${className} ${
      direction === "next" ? "right-16" : "left-16"
    } absolute top-1/2 w-[64px] h-[64px] bg-white rounded-full transform -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl`}
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

const TopBooksCarousel = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    // Fetch data based on title
    const fetchBooks = async () => {
      const title = "Best Sellers";
      try {
        const response = await axios.get("http://localhost:3000/api/data", {
          params:{ title},
        });
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching best sellers:', error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true,
    dots: false, // No dots
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    variableWidth: false, // Disable variable width to keep slides uniform
    responsive: [
      {
        breakpoint: 1200, // For large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // For medium screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // For small screens
        settings: {
          slidesToShow: 1,
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
    <div className="max-w-full py-4 bg-white space-x-4 px-0 lg:pl-20 ">
      <h2 className="text-2xl mb-2 font-semibold">Top 10 Books</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="p-2">
            <SimpleBookItem book={book} index={index+1} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBooksCarousel;
