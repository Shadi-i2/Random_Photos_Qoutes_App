import { FaArrowRotateLeft } from "react-icons/fa6";
const Header = ({ handleRandomClick }) => {
  return (
    <div
      className="flex justify-center items-center bg-gray-200 px-3 md:px-4 py-2 mb-3 mx-1
      border-t-4 border-slate-600 md:mb-16"
    >
      <h1
        className="font-medium tracking-widest mb-1
        text-slate-600 lg:text-3xl md:text-2xl sm:text-lg"
      >
        Random 30 Photos & Quotes
      </h1>
      <span
        className="text-slate-600 lg:text-3xl md:text-2xl sm:text-lg ml-3 cursor-pointer"
        onClick={handleRandomClick}
      >
        <FaArrowRotateLeft />
      </span>
    </div>
  );
};

export default Header;
