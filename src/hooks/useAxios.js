import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (param, handleClick, handleEnter) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState("");
  const [totalpages, setTotalpages] = useState(null);

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setResponse(res.data.results);
      setTotalpages(res.data.total_pages);
      console.log(res.data);
    } catch (err) {
      seterror(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    totalpages,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;
