import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async function () {
        const response = await fetch(url);
        const { venues } = await response.json();
        setData(venues);
    })();
  }, []);

  return {
    data,
  };
};
export default useFetch;
