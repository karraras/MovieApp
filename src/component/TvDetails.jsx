import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { BiPlayCircle } from "react-icons/bi";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
function Popular(prop) {
  const { setInfo } = useGlobalContext();
  return (
    <section className="bg-black select-none">
      <div className="px-3 relative">
        <h1 className="text-white py-3 font-semibold">{prop.name}</h1>
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: `.button-next-slide${prop.nam}`,
            prevEl: `.button-prev-slide${prop.nam}`,
          }}
          loop={true}
          modules={[Navigation]}
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
        >
          {prop.data &&
            prop.data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Link to="/more">
                    <div
                      className="relative overflow-hidden rounded group cursor-pointer"
                      onClick={() => setInfo(item)}
                    >
                      <img
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                        alt="..."
                      />
                      <span className="h-full absolute group-hover:opacity-100 opacity-0 flex duration-300 bg-[#00000087] top-0 text-white left-0  w-full  items-center justify-center ">
                        <BiPlayCircle size={25} />
                      </span>
                    </div>
                  </Link>

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
        <div
          className={`button-next-slide${prop.nam} text-2xl cursor-pointer text-white absolute right-0 z-20 top-1/2 -translate-y-1/2`}
        >
          <IoIosArrowDroprightCircle />
        </div>
        <div
          className={`button-prev-slide${prop.nam} text-2xl cursor-pointer text-white absolute left-0 top-1/2  z-10 -translate-y-1/2`}
        >
          <IoIosArrowDropleftCircle />
        </div>
      </div>
    </section>
  );
}

export default Popular;
