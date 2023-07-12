import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function BtnClick() {
  return (
    <>
      <div className="button-next-slide text-2xl cursor-pointer text-white absolute right-0 z-20 top-1/2 -translate-y-1/2">
        <IoIosArrowDroprightCircle />
      </div>
      <div className="button-prev-slide text-2xl cursor-pointer text-white absolute left-0 top-1/2  z-10 -translate-y-1/2">
        <IoIosArrowDropleftCircle />
      </div>
    </>
  );
}

export default BtnClick;
