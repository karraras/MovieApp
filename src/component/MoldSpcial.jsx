import { BiPlayCircle } from "react-icons/bi";

function MoldSpcial(prop) {
  return (
    <section>
      <div className="grid gap-4 grid-cols-3 sm:grid-cols-2  px-2 md:grid-cols-5 bg-black  ">
        {prop.Data &&
          prop.Data.map((item, i) => {
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded group cursor-pointer"
              >
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                  alt="..."
                  className="rounded "
                />
                <span className="h-full absolute group-hover:opacity-100 opacity-0 flex duration-300 bg-[#00000087] top-0 text-white left-0  w-full  items-center justify-center ">
                  <BiPlayCircle size={25} />
                </span>
                {item.title && (
                  <p className="text-white py-2  text-sm">
                    {item.title.split("").length > 10
                      ? `${item.title.split("").slice(0, 15).join("")} ...`
                      : item.title}
                  </p>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default MoldSpcial;
