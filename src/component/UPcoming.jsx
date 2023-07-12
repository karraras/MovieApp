import { useMemo, useState } from "react";
import axios from "axios";
import Mold from "./Mold";
function UPcoming() {
  const [UPcoming, setUPcoming] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e675e7fdf06e7b4e9ed7408fff4e6091"
      );
      setUPcoming(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);

  return (
    <section>
      <Mold name="In Threaters" data={UPcoming}  nam='1' />
    </section>
  );
}

export default UPcoming;
