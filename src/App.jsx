import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import More from "./component/More";
import Episode from "./component/Episode";
import TV from "./component/TV";
import Movie from "./component/Movie";
import MoreM from "./component/MoreM";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
        <Route path="/morem" element={<MoreM />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <footer className="bg-black py-3 hidden sm:block text-center text-gray-400 text-sm">
        <p>&copy;{`${new Date().getFullYear()} karten.All Right Reserved.`}</p>
      </footer>
      <footer className="block sm:hidden fixed z-40 right-0 bg-slate-900 bottom-0 w-full">
        <div className="w-full flex justify-center gap-2 py-2">
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
      </footer>
    </>
  );
}

export default App;
