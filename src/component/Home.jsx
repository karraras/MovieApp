import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRatedTv from "./TopRatedTv";
import TopRatedMovie from "./TopRatedMovie";
function Home() {
  return (
    <main>
      <NowPlaying />
      <Popular />
      <TopRatedTv />
      <TopRatedMovie />
    </main>
  );
}

export default Home;
