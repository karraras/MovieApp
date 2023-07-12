import { useMemo, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Details() {
  const [Detail, setDetail] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/1418/credits?api_key=e675e7fdf06e7b4e9ed7408fff4e6091&language=en-US"
      );
      setDetail(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  }
  useMemo(() => {
    getUserData();
  }, []);
  return (
    <section className="bg-black select-none">
      <div className="px-3 relative">
        <h1 className="text-white py-3 font-semibold">Casts</h1>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          modules={[Navigation]}
        >
          {Detail &&
            Detail.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.profile_path}`}
                    alt="..."
                    className="rounded cursor-pointer"
                  />

                  {item.name && (
                    <p className="text-white py-2  text-sm">
                      {item.name.split("").length > 10
                        ? `${item.name.split("").slice(0, 15).join("")} ...`
                        : item.name}
                    </p>
                  )}
                  {item.title && (
                    <p className="text-white py-2  text-sm">
                      {item.title.split("").length > 10
                        ? `${item.title.split("").slice(0, 15).join("")} ...`
                        : item.title}
                    </p>
                  )}
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="px-3">
        <h1 className="text-white my-3 font-semibold">Trailers</h1>
        <div>
          <img
            src="https://i.ytimg.com/vi/XZ8daibM3AE/hqdefault.jpg"
            alt="..."
          />
        </div>
      </div>
    </section>
  );
}

export default Details;
