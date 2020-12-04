import { useEffect, useState } from "react";

const useData = () => {
  // 1
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(navigator.language);
    if (!navigator.onLine) {
      if (localStorage.getItem("movie") === null) {
        setData("Loading...");
      } else {
        setData(JSON.parse(localStorage.getItem("movie")));
      }
    } else {
      let url = "";
      if (navigator.language.startsWith("es") ) {
         url = new URL(
          "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json"
        );
      } else {
         url = new URL(
          "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json"
        );
      }
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          localStorage.setItem("movie", JSON.stringify(res));
        });
    }
  }, []);

  // 2
  return [data];
};

export default useData;
