import  { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import BookSliderNew from "../../components/BookSlider/BookSlider";
import { useNavigate } from "react-router-dom";

const Age3to6 = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("3-6 years");
  const navigate = useNavigate();

  const ageGroups = [
    { label: "0-1 years", value: "0-1 years" },
    { label: "1-3 years", value: "1-3 years" },
    { label: "3-6 years", value: "3-6 years" },
    { label: "6-9 years", value: "6-9 years" },
    { label: "9-12 years", value: "9-12 years" },
    { label: "12+ years", value: "12+ years" },
  ];

  return (
    <div className="flex flex-col space-x-4 px-0  lg:pl-20 mt-8">
      <div className="flex gap-8">
        <LeftOutlined
          className="text-3xl font-bold"
          onClick={() => navigate("/")}
        />
        <h2 className="font-semibold text-4xl">Browse by Age Group</h2>
      </div>
      <div className="flex space-x-2 my-8">
        {ageGroups.map((ageGroup) => (
          <button
            key={ageGroup.value}
            className={`px-4 py-2 rounded-[15px] border ${
              selectedAgeGroup === ageGroup.value
                ? "bg-blue-100 text-blue-600 border-blue-600"
                : "bg-white text-gray-800 border-gray-300"
            }`}
            onClick={() => setSelectedAgeGroup(ageGroup.value)}>
            <span className="block font-bold text-xl">
              {ageGroup.label.split(" ")[0]}
            </span>
            <span className="text-l">{ageGroup.label.split(" ")[1]}</span>
          </button>
        ))}
      </div>
      <BookSliderNew title="Best Sellers for 3-6 Years Old" />
      <BookSliderNew title="New Arrivals for 3-6 Years Old" />
      <BookSliderNew title="Peppa Pig" />
    </div>
  );
};

export default Age3to6;
