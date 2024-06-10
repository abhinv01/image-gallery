// import logo from "./logo.svg";
import { createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import { useState } from "react";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import InfyImages from "./components/InfyImages";

export const ImageContext = createContext();

function App() {
  const searchColorInitial = "random";
  const querySearch = "india";
  const [query, setQuery] = useState(querySearch);
  const [search, setSearch] = useState(querySearch);
  const [searchColor, setSearchColor] = useState(searchColorInitial);
  const [currentPage, setcurrentPage] = useState(1);

  const handleEnter = (e) => {
    if (e.key === "Enter" && search) {
      handleClick();
    }
  };

  const handleClick = () => {
    setcurrentPage(1);
    setQuery(search);
  };

  const { response, totalpages, isLoading, error, fetchData } = useAxios(
    `search/photos?${
      searchColor && searchColor !== searchColorInitial
        ? `color=${searchColor}&`
        : ""
    }page=${currentPage}&query=${query}&per_page=20&client_id=${
      process.env.REACT_APP_ACCESS_KEY
    }`,
    handleClick,
    handleEnter
  );

  console.log(response);
  const value = {
    isLoading,
    error,
    fetchData,
    setSearchColor,
    searchColor,
    response,
    totalpages,
    currentPage,
    setcurrentPage,
  };
  return (
    <div className="App scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
      <ImageContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/search"
              element={
                <>
                  {/* <Navbar></Navbar> */}
                  <Header
                    // setQuery={setQuery}
                    // query={query}
                    search={search}
                    setSearch={setSearch}
                    handleClick={handleClick}
                    handleEnter={handleEnter}
                  ></Header>
                  <Images query={query}></Images>
                </>
              }
            ></Route>
            <Route
              path="/home"
              element={
                <>
                  {/* <Navbar /> */}
                  <Header
                    // setQuery={setQuery}
                    // query={query}
                    search={search}
                    setSearch={setSearch}
                    handleClick={handleClick}
                    handleEnter={handleEnter}
                  ></Header>
                  <InfyImages></InfyImages>
                </>
              }
            ></Route>
            <Route
              path="/*"
              element={<Navigate to="/search"></Navigate>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
