import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { BiPlayCircle } from "react-icons/bi";
import axios from "axios";
import { useState, useMemo } from "react";
function Recommendations() {
  const [Resom, setResom] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/550?api_key=e675e7fdf06e7b4e9ed7408fff4e6091&append_to_response=credits,translations,videos,recommendations"
      );
      setResom(response.data.recommendations.results);
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
        <h1 className="text-white py-3 font-semibold">Recommendations</h1>
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: {
              sliderPreView: 1,
            },
            400: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
          navigation={{
            nextEl: `.button-next-slide02`,
            prevEl: `.button-prev-slide02`,
          }}
          loop={true}
          modules={[Navigation]}
        >
          {Resom &&
            Resom.map((item, i) => {
              return (
                item.poster_path && (
                  <SwiperSlide key={i}>
                    <div className="relative overflow-hidden rounded group cursor-pointer">
                      <img
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                        alt="..."
                      />
                      <span className="h-full absolute group-hover:opacity-100 opacity-0 flex duration-300 bg-[#00000087] top-0 text-white left-0  w-full  items-center justify-center ">
                        <BiPlayCircle size={25} />
                      </span>
                    </div>
                    {item.title && (
                      <p className="text-white py-2  text-sm">
                        {item.title.split("").length > 10
                          ? `${item.title.split("").slice(0, 15).join("")} ...`
                          : item.title}
                      </p>
                    )}
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
        <div
          className={`button-next-slide02 text-2xl cursor-pointer text-white absolute right-0 z-20 top-1/2 -translate-y-1/2`}
        >
          <IoIosArrowDroprightCircle />
        </div>
        <div
          className={`button-prev-slide02 text-2xl cursor-pointer text-white absolute left-0 top-1/2  z-10 -translate-y-1/2`}
        >
          <IoIosArrowDropleftCircle />
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
