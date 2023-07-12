import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { BiPlayCircle } from "react-icons/bi";
import { useMemo, useState } from "react";
import axios from "axios";
function NowPlaying() {
  const [NowPlay, setNowPlay] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e675e7fdf06e7b4e9ed7408fff4e6091"
      );
      setNowPlay(response.data.results);
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
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: `.button-next-slide0`,
            prevEl: `.button-prev-slide0`,
          }}
          loop={true}
          modules={[Navigation]}
        >
          {NowPlay &&
            NowPlay.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className=" bg-cover h-[250px] bg-center cursor-pointer bg-no-repeat  "
                    style={{
                      backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path})`,
                    }}
                  >
                    <div className="bg-gradient-to-r from-black to-transparent  absolute top-1/2 -translate-y-1/2 h-full flex flex-col justify-center pl-4 w-1/2">
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-[12px] mt-3  mb-2 text-white">
                        {item.overview.split("").length > 200
                          ? item.overview.split("").slice(0, 200).join("")
                          : item.overview}
                      </p>
                      <div className="flex bg-purple-800 w-fit text-[12px] rounded py-[5px] px-[10px] text-white gap-2 items-center">
                        <span>
                          <BiPlayCircle />
                        </span>
                        <span>Play trailer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div
          className={`button-next-slide0 text-2xl cursor-pointer text-white absolute right-0 z-20 top-1/2 -translate-y-1/2`}
        >
          <IoIosArrowDroprightCircle />
        </div>
        <div
          className={`button-prev-slide0 text-2xl cursor-pointer text-white absolute left-0 top-1/2  z-10 -translate-y-1/2`}
        >
          <IoIosArrowDropleftCircle />
        </div>
      </div>
    </section>
  );
}

export default NowPlaying;
