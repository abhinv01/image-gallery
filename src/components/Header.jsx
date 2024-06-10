import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Header = ({ search, setSearch, handleClick, handleEnter }) => {
  const inputRef = useRef(null);
  const searchKeywords = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Brazil",
    "Russia",
    "Italy",
    "Spain",
    "Mexico",
    "South Korea",
    "South Africa",
    "Netherlands",
    "Turkey",
    "Switzerland",
    "Sweden",
    "hero image",
    "Instagram post",
    "Facebook cover",
    "Twitter header",
    "poster",
    "flyer",
    "brochure",
    "magazine cover",
    "living room",
    "office space",
    "kitchen",
    "indoor plants",
    "park",
    "cityscape",
    "desert",
    "beach scene",
    "wedding",
    "birthday party",
    "concert",
    "sports event",
    "forest",
    "mountains",
    "beach",
    "sunset",
    "dog",
    "cat",
    "wildlife",
    "birds",
    "portrait",
    "family",
    "child",
    "group of friends",
    "car",
    "phone",
    "laptop",
    "coffee cup",
  ];

  const { pathname } = useLocation();
  useEffect(() => {
    pathname.includes("search") && inputRef.current.focus();
  }, [pathname]);
  return (
    <>
      <div
        className={`bg-gradient-to-r from-emerald-800 from-10% via-emerald-700 via-40% to-emerald-900 to-90% flex flex-col items-center font-cormorant sticky top-0 z-10 w-full`}
      >
        <Navbar></Navbar>
        {pathname.includes("search") ? (
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-white text-center font-bold text-4xl tracking-wide my-2">
              Find Images
            </h1>
            <span className="flex mx-2 pb-5">
              <input
                list="keywords"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={handleEnter}
                ref={inputRef}
                value={search}
                type="text"
                placeholder="Search Images"
                className="max-w-md w-full border inline-block font-extrabold text-xl px-5 py-1 rounded-tl rounded-bl"
              ></input>
              <datalist id="keywords">
                {searchKeywords.map((e, i) => (
                  <option key={i}>{e}</option>
                ))}
              </datalist>
              <button
                disabled={!search ? true : false}
                onClick={handleClick}
                className="bg-emerald-300 px-5 py-2  inline-block disabled:bg-gray-400 disabled:border-gray-400 hover:bg-emerald-400 font-bold border-emerald-500 border-2"
              >
                Search
              </button>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
