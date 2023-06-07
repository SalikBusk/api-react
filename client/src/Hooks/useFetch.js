import { useEffect, useState } from "react";

export const useFetch = (url, key) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      try {
        if (data) {
          console.log(data);
            key ? setApiData(data[key]): setApiData(data);
            setLoading(false);
            // console.log("hej" ,data[key]);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error(error)
      }
    };
    fetchData();
  }, [url, key]);

  return {
    loading,
    error,
    apiData,
  };
};
