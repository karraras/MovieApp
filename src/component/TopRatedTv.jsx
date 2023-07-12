import { useMemo, useState } from "react";
import axios from "axios";
import TvDetails from "./TvDetails";
function TopRatedTv() {
  const [TopTv, setTopTv] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=e675e7fdf06e7b4e9ed7408fff4e6091"
      );
      setTopTv(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);

  return (
    <section>
      <TvDetails name="Top Rated Tv" data={TopTv} nam="3" />
    </section>
  );
}
export default TopRatedTv;
