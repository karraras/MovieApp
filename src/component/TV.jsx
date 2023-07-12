import { useMemo, useState } from "react";
import axios from "axios";
import MoldSpcial from "./MoldSpcial";
function TV() {
  const [Tvd, setTv] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(

        'https://api.themoviedb.org/3/tv/popular?api_key=e675e7fdf06e7b4e9ed7408fff4e6091'
      );
      setTv(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);
  return (
    <section>
      <MoldSpcial Data={Tvd} />
    </section>
  );
}

export default TV;
