import { useMemo, useState } from "react";
import axios from "axios";
import Mold from "./Mold";
function TopRatedMovie() {
  const [TopMovie, setTopMovie] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=e675e7fdf06e7b4e9ed7408fff4e6091"
      );
      setTopMovie(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);
  return (
    <section>
      <Mold name="Top Movie Tv" data={TopMovie} nam="4" />
    </section>
  );
}

export default TopRatedMovie;
