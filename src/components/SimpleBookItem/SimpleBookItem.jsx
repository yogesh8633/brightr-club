import React, { useState } from "react";
import amazon from "../../assets/amazon.png";
import star from "../../assets/star.png";
import review from "../../assets/review.png";
import heart from "../../assets/wishlist.png";

const SimpleBookItem = ({ book, theme = "light" ,index=null}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`simple-book-item flex flex-col  transition-all duration-500 ease-in-out py-4 h-[380px] w-[230px] items-center rounded-[24px] px-0 ${
        isHovered
          ? `${theme === "light" ? "bg-blue-50" : "bg-[#13345F]"}`
          : `${theme === "light" ? "bg-white" : "bg-transparent"}`
      } 
      ${index && isHovered ? "scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="book-image flex-shrink-0 relative item">
        <img
         src={book?.["Main Image"]}
         alt={book?.["Name"]}
          className={`transition-transform duration-500 ease-in-out w-[190px] h-[210px] rounded-[24px] `}
        />
        {index && (
          <span className=" jua-regular absolute bottom-0 text-[50px] left-0 font-bold leading-[0.6] text-[#3B72FF] number transform translate-x-[-60%] item__counter">
            {index }
          </span>
        )}

        {/* Number overlay, adjust position as necessary */}
        <div
          className={`absolute top-0 left-0 text-blue-500 text-[6rem] font-bold transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-0 -translate-x-8" : "opacity-100"
          }`}>
          {book?.number}
        </div>
      </div>
      <div className="book-info mt-2 w-[190px]">
        <h3 className="text-md font-semibold text-start">{book?.Name}</h3>
        <div className="ratings flex mt-2 text-sm items-center gap-4 ">
          <div>
            <img src={amazon} className="w-full h-1/2" />
          </div>
          <span className=" flex gap-1 items-center">
            <img src={star} className="w-full h-1/2" /> {book?.["A. Rating"]}
          </span>
          <span className="ml-2 flex items-center gap-1 border-l pl-4">
            <img src={review} className="w-full h-1/2" />
            {book?.["A. Rview"]}
          </span>
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
          }`}>
          <button
            className={`mt-3 ${
              theme === "light"
                ? "text-blue-600  border-blue-600 bg-blue-100"
                : "text-white border-white bg-transparent"
            }  px-3 flex items-center gap-1 py-2 rounded-lg border-2 `}>
            <img
              src={heart}
              className={`${theme === "light" ? "" : "invert filter"}`}
            />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleBookItem;
