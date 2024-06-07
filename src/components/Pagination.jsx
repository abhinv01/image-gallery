import React, { useContext } from "react";
import { ImageContext } from "../App";

function Pagination() {
  const { currentPage, totalpages, setcurrentPage } = useContext(ImageContext);
  const btnClass =
    "border-emerald-900 border-4 px-4 rounded-lg font-cormorant font-extrabold tracking-wide text-md lg:text-xl enabled:hover:bg-emerald-900 enabled:hover:text-white disabled:bg-gray-400 disabled:border-gray-400";
  return (
    <div className="flex justify-center gap-2 mt-12">
      <button
        disabled={currentPage <= 1}
        onClick={() => {
          setcurrentPage((prev) => prev - 1);
        }}
        className={btnClass}
      >{`Previous ${currentPage <= 1 ? "" : `(${currentPage - 1})`}`}</button>
      <span
        className={`${btnClass} font-sans font-medium rounded-2xl border-2`}
      >
        {`${currentPage} out of ${totalpages}`}
      </span>
      <button
        className={btnClass}
        disabled={currentPage >= totalpages}
        onClick={() => {
          setcurrentPage((prev) => prev + 1);
        }}
      >{`Next ${
        currentPage >= totalpages ? "" : `(${currentPage + 1})`
      }`}</button>
    </div>
  );
}

export default Pagination;
