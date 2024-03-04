import banner1 from "../../assets/If you are hungry then you can take the food (1).png"

const Banner = () => {
  return (
    <div className="carousel w-full relative" id="bannerContainer">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" alt="Banner Image" />
        <div className="absolute ml-[10%] mt-[22%]">
          <label className="input py-8 input-bordered flex items-center  ml-8 md:gap-72">
            <input type="text" name="Search" className="grow " placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle ">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;