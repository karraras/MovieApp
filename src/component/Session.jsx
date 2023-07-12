import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useMemo, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
function Session() {
  const { setInfo } = useGlobalContext();
  const [session, setSession] = useState("");
  async function getUserData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/1418?api_key=e675e7fdf06e7b4e9ed7408fff4e6091&language=en-US&append_to_response=episode_groups"
      );
      setSession(response.data.seasons);
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
        <h1 className="text-white py-3">Seasons</h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: `.button-next-slide01`,
            prevEl: `.button-prev-slide01`,
          }}
          loop={true}
          modules={[Navigation]}
        >
          {session &&
            session.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Link to="/episode">
                    <div
                      className=" bg-cover h-[200px] bg-center rounded cursor-pointer bg-no-repeat  "
                      style={{
                        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path})`,
                      }}
                      onClick={() => setInfo(item)}
                    />

                    <p className="text-white">{item.name}</p>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div
          className={`button-next-slide01 text-2xl cursor-pointer text-white absolute right-0 z-20 top-1/2 -translate-y-1/2`}
        >
          <IoIosArrowDroprightCircle />
        </div>
        <div
          className={`button-prev-slide01 text-2xl cursor-pointer text-white absolute left-0 top-1/2  z-10 -translate-y-1/2`}
        >
          <IoIosArrowDropleftCircle />
        </div>
      </div>
    </section>
  );
}

export default Session;
