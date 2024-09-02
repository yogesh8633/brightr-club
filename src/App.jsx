import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import React, { Suspense, lazy } from "react";
import BookSliderNew from "./components/BookSlider/BookSlider";

// Lazy load components
const CategoryBooks = lazy(() => import("./components/Categories/BookCategory"));
const AgeGroup = lazy(() => import("./components/AgeGroup/AgeGroup"));
const TopBooksCarousel = lazy(() => import("./components/TopBooksCaraousel/TopBookCarousel"));
const BookSlider = lazy(() => import("./components/NewArrivalSlider/NewArrivalSlider"));
const Age3to6 = lazy(() => import("./pages/3-6/Age3to6"));

const HomePage = () => {
  return (
    <div className="flex flex-col mt-8">
      <Suspense fallback={<div>Loading...</div>}>
        <BookSlider />
        <AgeGroup />
        <TopBooksCarousel />
        <CategoryBooks />
        <div className="flex flex-col space-x-4 px-0 lg:pl-20 mt-8">
          <BookSliderNew title="Best Sellers" />
          <BookSliderNew title="New Arrival" />
          <BookSliderNew title="Peppa Pig" />
        </div>
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/age-group-3-6" element={<Age3to6 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
