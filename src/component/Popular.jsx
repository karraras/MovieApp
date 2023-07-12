import { useMemo, useState } from "react";
import axios from "axios";
import Mold from "./Mold";
function Popular() {
  const [Popular, setPopular] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e675e7fdf06e7b4e9ed7408fff4e6091"
      );
      setPopular(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);

  return (
    <section>
      <Mold name="Popular" data={Popular} nam="2" />
    </section>
  );
}

export default Popular;
