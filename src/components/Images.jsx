import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";
import SearchColor from "./SearchColor";
import "../scroll.css";
import Pagination from "./Pagination";

const Images = ({ query }) => {
  const { response, isLoading, error } = useContext(ImageContext);
  const heightWidth = "h-24 w-11/12 md:h-72 md:w-full";
  const filterByColor = [
    "random",
    "black_and_white",
    "black",
    "white",
    "yellow",
    "orange",
    "red",
    "purple",
    "magenta",
    "green",
    "teal",
    "blue",
  ];

  return (
    <div className="pb-10 px-2 md:px-5 bg-gradient-to-l from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
      <h1 className="text-center text-bold pt-6 font-corsiva font-extrabold tracking-wider text-emerald-800 text-3xl">
        {error ? (
          <span className="text-red-600 lowercase">{error.code}</span>
        ) : (
          `Search results for ${query}`
        )}
      </h1>
      <div className="flex flex-col mt-4 mb-6">
        <span className="px-3 text-lg font-bold text-emerald-900 font-cormorant">
          Search by colour
        </span>

        <div className="flex gap-3 overflow-x-auto  custom-scrollbar scroll-container">
          {filterByColor.map((e) => (
            <SearchColor key={e} color={e} />
          ))}
        </div>
      </div>

      <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl px-4 mx-auto">
        {isLoading
          ? response.map((data, index) => {
              return (
                <div className={`${heightWidth}`} key={index}>
                  <Skeleton />
                </div>
              );
            })
          : response.map((data, index) => {
              return (
                <div className={`${heightWidth}`} key={index}>
                  <Image data={data} />
                </div>
              );
            })}
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Images;
