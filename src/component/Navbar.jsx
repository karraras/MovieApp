import Data from "./SearchData";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";
function Navbar() {
  console.log(Data.results);
  const [search, setSearch] = useState("");
  const { setInfo } = useGlobalContext();
  return (
    <nav className="bg-purple-950">
      <div className="flex justify-between py-2 gap-10 px-2">
        <div className=" justify-between items-center  flex gap-6">
          <Link to="/">
            <p className="font-bold text-white text-xl">Movielia</p>
          </Link>
          <div className="hidden justify-between items-center   sm:flex  gap-3 ">
            <NavLink
              to="/movie"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#6b21a8" : " ",
                  borderRadius: isActive ? "5px" : " ",
                };
              }}
            >
              <p className="text-white py-[2px] px-[4px] ">Movies</p>
            </NavLink>
            <NavLink
              to="/tv"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#6b21a8" : " ",
                  borderRadius: isActive ? "5px" : " ",
                };
              }}
            >
              <p className="h-[30px] w-6 text-white text-sm grid place-items-center font-semibold">
                TV
              </p>
            </NavLink>
          </div>
        </div>
        <div className="relative">
          <div className="relative border-b-2 max-w-[300px] w-[300px] border-white  border-solid">
            <input
              className="h-full w-full text-white placeholder:text-white focus:outline-none focus:border-none bg-transparent pl-[2px]"
              type="text"
              placeholder="breaking bad..."
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <AiOutlineSearch className="absolute top-1/2 -translate-y-1/2 right-0   text-white text-base" />
          </div>
          <div
            className={`bg-black  absolute top-[26px] left-0  z-30 ${
              search.length > 0 ? "h-auto" : "h-0"
            }`}
          >
            {Data &&
              Data?.results?.map((item, i) => {
                return (
                  <Link key={i} to="/more">
                    <div
                      onClick={() => {
                        setInfo(item);
                        setSearch("");
                      }}
                      className={` ${
                        (item?.name?.toLowerCase().startsWith(search) &&
                          search.length > 0) ||
                        (item?.title?.toLowerCase().startsWith(search) &&
                          search.length > 0)
                          ? "flex"
                          : "hidden"
                      }     gap-2 items-center m-3 text-white `}
                    >
                      <img
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                        alt=""
                        className="h-[100px] rounded "
                      />
                      {item.name && <h1>{item.name}</h1>}
                      {item.title && <h1>{item.title}</h1>}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
