import { useContext } from "react";
import { ImageContext } from "../App";

const SearchColor = ({ color }) => {
  const { searchColor, setSearchColor, setcurrentPage } =
    useContext(ImageContext);

  return (
    <>
      <button
        onClick={() => {
          setSearchColor(color);
          setcurrentPage(1);
        }}
        className={`capitalize px-6 lg:px-8 py-2 lg:py-3 text-lg border-2 rounded-xl lg:text-xl border-emerald-500 font-cormorant font-bold text-emerald-900 w-auto ${
          searchColor === color ? "bg-green-300" : ""
        }`}
      >
        {color}
      </button>
    </>
  );
};

export default SearchColor;
