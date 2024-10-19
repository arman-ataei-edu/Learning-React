//useFetch.js
// referece: https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/
import { useState, useEffect } from "react";

export function useFetch(url) {
  //values
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("something wrong, çould not connect to resource");
        }
        setData(res.json());
      })
      .then(() => {
        setError("");
      })
      .catch((error) => {
        console.warn(`sorry an error occurred, due to ${error.message} `);
        setData(null);
        setError(error.message);
      });
  }, [url]);
  return [data, error];
}
