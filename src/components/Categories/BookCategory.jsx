import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleBookItem from "../SimpleBookItem/SimpleBookItem";
import catch_turkey from "../../assets/catch_turkey.jpeg";
import bad_day from "../../assets/bad_day.jpeg";
import ruby_worry from "../../assets/ruby_worry.jpeg";
import bgEllipse from "../../assets/bg_ellipse.png";
import { RightOutlined, LeftOutlined, CloseOutlined } from "@ant-design/icons";
import axios from "axios";

const series = [
  {
    title: "Elephant and Piggie",
    image: bad_day,
    books: [
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
    ],
  },
  {
    title: "Mog the Cat",
    image: ruby_worry,
    books: [
      {
        image: ruby_worry,
        title: "Peppa Goes Around the World",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
    ],
  },
  {
    title: "Big Bright Feelings",
    image: bad_day,
    books: [
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
    ],
  },
  {
    title: "How to Catch",
    image: ruby_worry,
    books: [
      {
        image: ruby_worry,
        title: "Peppa Goes Around the World",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
    ],
  },
  {
    title: "Peppa Big Series",
    image: bad_day,
    books: [
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
    ],
  },
  {
    title: "Little Critter ",
    image: ruby_worry,
    books: [
      {
        image: ruby_worry,
        title: "Peppa Goes Around the World",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: bad_day,
        title: "How to Catch a Star",
        rating: 4.3,
        reviews: 1234,
      },
      {
        image: catch_turkey,
        title: "How to Catch a Unicorn",
        rating: 4.3,
        reviews: 1234,
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
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

const CategoryBooks = () => {
  const [books, setBooks] = useState([]);
  const [activeSeries, setActiveSeries] = useState(books[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    // Fetch data based on title
    const fetchBooks = async () => {
      const title = "Series Name";
      try {
        const response = await axios.get("http://localhost:3000/api/data", {
          params:{ title},
        });
        console.log(response.data);
        setBooks(response.data);
        setActiveSeries(response.data[0])
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
    slidesToShow: 6, // Adjust based on the number of visible slides
    slidesToScroll: 1,
    arrows: true,
    dots: false, // No dots
    nextArrow: <CustomArrow direction="next" />,
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
    // prevArrow: <CustomArrow direction="prev" />,
  };
  const settings2 = {
    infinite: true,
    className: "slider variable-width",
    speed: 500,
    slidesToShow: 6, // Adjust based on the number of visible slides
    slidesToScroll: 1,
    arrows: true,
    dots: false, // No dots
    nextArrow: <CustomArrow direction="next" />,
    // prevArrow: <CustomArrow direction="prev" />,
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
    <div
      className="relative bg-[#0B1B45]  py-8 text-white space-x-4 px-0 lg:pl-20 "
      style={{
        backgroundImage: `url(${bgEllipse})`,
        backgroundSize: "cover", // Cover the entire area
        backgroundRepeat: "no-repeat", // Prevent repetition
        backgroundPosition: "center center", // Center the image
        position: "relative", // For stacking content above
      }}>
      {/* Popular Series Slider */}
      <h2 className="text-2xl mb-4 font-semibold">Popular Series</h2>
      <Slider {...settings} >
        {books.map((item, index) => (
          <div
            key={index}
            className={`px-2 transform transition-all h-[380px] w-[230px] duration-300 ease-in-out cursor-pointer ${
              activeSeries?.name === item.name ? "" : "opacity-[0.3]  "
            }`}
            onClick={() => setActiveSeries(item)}>
            <div className="book-image flex-shrink-0 relative">
              <div
                className={` ${
                  activeSeries?.name === item.name
                    ? "border border-white w-max p-2 rounded-[24px]"
                    : ""
                }`}>
                <img
                  src={item?.main_image}
                  alt={item?.name}
                  className={`transition-transform  duration-500 ${
                    activeSeries?.name === item.name
                      ? "w-[230px] h-[250px]"
                      : ""
                  } ease-in-out w-[190px] h-[210px] rounded-[24px] `}
                />
              </div>
              {/* Number overlay, adjust position as necessary */}
              <div
                className={`  text-white  transition-all duration-500 ease-in-out `}>
                <h3 className=" font-bold my-3 text-start">{item?.name}</h3>
                {item?.books?.length} Books
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {activeSeries && (
        <>
          <div className="my-6 border-b border-gray-400 space-x-4"></div>

          {/* Books Slider */}
          <div className="flex justify-between  ">
            <div className="flex gap-5">
              <h2 className="text-2xl mb-4 font-semibold">
                {activeSeries?.name}
              </h2>
              <p className="text-2xl text-gray-400">
                {activeSeries.books.length} books
              </p>
            </div>
            <div>
              <CloseOutlined className="text-xl me-5" onClick={()=>{setActiveSeries(null)}}/>
            </div>
          </div>

          <Slider {...settings2} className="">
            {activeSeries?.books.map((book, index) => (
              <div key={index} className="px-2">
                <SimpleBookItem book={book} theme="dark" />
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default CategoryBooks;
