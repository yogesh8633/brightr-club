import { useState } from "react";
import heart from "../../assets/wishlist.png";
import amazon from "../../assets/amazon.png";
import star from "../../assets/star.png";
import review from "../../assets/review.png";

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <div
      className={`book-card grid grid-cols-2 transition-all duration-300 ease-in-out p-3 rounded-[40px] ${
        isHovered ?  `w-[90%] md:w-[702px] h-[356px] ${book.background}` : "w-[80%] md:w-[642px] h-[290px] bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="book-image col-span-1 flex justify-center">
        <img
          src={book.image}
          alt={book.title}
          className={`rounded-[32px] transition-transform duration-300 ease-in-out ${
            isHovered ? "h-[332px] w-[90%] md:w-[300px] rotate-0" : "h-[290px] w-[80%] md:w-[300px] -rotate-3"
          }`}
        />
      </div>
      <div className="book-info col-span-1 flex flex-col justify-between p-4">
        <div>
          <div className="tags flex space-x-2 mb-2">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg md:text-[24px] font-semibold">{book.title}</h3>
          <p className="text-sm md:text-[24px] font-semibold">{book.author}</p>
        </div>
        <div className="book-info mt-2">
          <div className="ratings flex mt-2 text-sm items-center gap-4">
            <div>
            <img src={amazon} className="w-8 h-8 md:w-full md:h-1/2" />
            </div>
            <span className="flex gap-1 items-center">
              <img src={star} className="w-8 h-8 md:w-full md:h-1/2" /> {book?.rating}
            </span>
            <span className="ml-2 flex items-center gap-1 border-l pl-4">
              <img src={review} className="w-8 h-8 md:w-full md:h-1/2" /> {book?.reviews}
            </span>
          </div>
        </div>
        <p className="description mt-4 text-sm md:text-base">
          {book.description}
        </p>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-0"
          }`}
        >
          <button
            className="mt-3 text-blue-600 border-blue-600 bg-blue-100 px-3 py-2 flex items-center gap-1 rounded-lg border-2"
          >
            <img src={heart} alt="wishlist" className="w-4 h-4 md:w-6 md:h-6" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
