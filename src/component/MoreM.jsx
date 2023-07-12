import { useGlobalContext } from "./Context";
import Recommendations from "./Recommendations";
function MoreM() {
  const { info } = useGlobalContext();
  return (
    <section>
      {info.poster_path && (
        <div
          style={{
            backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${info.poster_path})`,
          }}
          className="h-[300px] w-full bg-no-repeat relative bg-center bg-cover bg-gradient-to-r from-black to-transparent"
        >
          {info.poster_path && (
            <div className="flex text-sm gap-3 absolute bottom-0 left-0 ">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${info.poster_path}`}
                alt=""
                className="h-[200px] rounded"
              />
              <div className="flex justify-center flex-col ">
                <h1 className="text-white text-[12px]">{info.title}</h1>
                <p className="bg-purple-700 w-fit my-2 py-[4px] rounded  text-[12px] px-3 text-white ">
                  Drama
                </p>
                <p className="text-white text-[12px]">{info.overview}</p>
              </div>
            </div>
          )}
        </div>
      )}
      <Recommendations />
    </section>
  );
}

export default MoreM;
