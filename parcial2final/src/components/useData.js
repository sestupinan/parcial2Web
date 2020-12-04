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
          "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json "
        );
      } else {
         url = new URL(
          "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json "
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
