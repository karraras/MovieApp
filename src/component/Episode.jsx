import { useMemo, useState } from "react";
import axios from "axios";

import { useGlobalContext } from "./Context";
function Episode() {
  const { info } = useGlobalContext();
  const [epi, setEpi] = useState();
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/60059?api_key=e675e7fdf06e7b4e9ed7408fff4e6091&append_to_response=season/1"
      );
      setEpi(response.data.seasons);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);
  console.log(epi);
  return (
    <section>
      <div className="px-3 bg-black">
        {info.poster_path && (
          <div className="flex gap-3 items-center bg-black text-white ">
            <img
              className="h-[200px] rounded"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${info.poster_path}`}
            />

            <div>
              <h1>{info.name}</h1>
            </div>
          </div>
        )}
        <div>
          <h1 className="py-3 font-semibold text-white"> Episodes</h1>
          {epi &&
            epi.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex py-3 gap-3 items-center bg-black text-white "
                >
                  <img
                    className="h-[200px] w-[400px] rounded"
                    src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${item.poster_path}`}
                  />
                  <h1>{item.name}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Episode;
