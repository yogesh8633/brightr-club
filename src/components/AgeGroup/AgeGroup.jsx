import { useNavigate } from "react-router-dom";
import child1 from "../../assets/child1.png";
import child2 from "../../assets/child2.png";
import child3 from "../../assets/child3.png";
import child4 from "../../assets/child4.png";

const AgeGroup = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#EBFFFA] via-[#E0ECFF] to-[#F9F2FF]  rounded-lg   px-0 lg:pl-20 ">
        <h2 className="text-2xl mt-8 font-semibold">Browse By Age Group</h2>
      <div className="flex items-center gap-4 w-full justify-around relative">
      <img src={child1} alt="Child1" className="object-contain h-full" />
      <div className="flex">
        <div className="bg-white flex flex-col rounded-[12px] px-[16px] py-[12px]">
          <span className="font-bold text-xl">0-1</span>
          <span className="text-md">years</span>
        </div>
        <div className="bg-white flex flex-col rounded-[12px] px-[16px] py-[12px] ms-4">
          <span className="font-bold text-xl">1-3</span>
          <span className="text-md">years</span>
        </div>
      </div>
      <img src={child2} alt="Child2" className="object-contain h-full" />
      <div className="flex">
        <div className="bg-white flex flex-col rounded-[12px] px-[16px] py-[12px] cursor-pointer" onClick={() => navigate("/age-group-3-6")}>
          <span className="font-bold text-xl">3-6</span>
          <span className="text-md">years</span>
        </div>
        <div className="bg-white flex flex-col rounded-[12px] px-[16px] py-[12px] ms-4">
          <span className="font-bold text-xl">6-9</span>
          <span className="text-md">years</span>
        </div>
      </div>
      <img src={child3} alt="Child3" className="object-contain h-full" />
      <div className="flex">
        <div className="bg-white flex flex-col rounded-[12px] px-[16px] py-[12px]">
          <span className="font-bold text-xl">9-12</span>
          <span className="text-md">years</span>
        </div>
        <div className="bg-white flex flex-col rounded-[12px] px-[16px] py-[12px] ms-4">
          <span className="font-bold text-xl">12+</span>
          <span className="text-md">years</span>
        </div>
      </div>
      <img src={child4} alt="Child4" className="object-contain h-full" />

      </div>
    </div>
  );
};
export default AgeGroup;
