import { Link } from "react-router-dom";
import img from "../assets/404.358570ba.png"

const Error = () => {
  return (
    <div>
       <div className="bg-gradient-to-b from-[--bg-secondary] h-90v grid place-items-center justify-center content-center">
        <div>
          <img
            alt="Allen"
            data-testid="shownImage"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="w-60 h-60 object-contain"
            style={{color:"transparent"}}
            src={img}
          />
        </div>
        <div className="mt-6 text-center text-white text-xl font-semibold leading-normal cursor-default">
          Content not found
        </div>
        <Link to="/home">
        <button
          className="
        text-base 
        px-4 py-2
        rounded-3xl 
         m-1
         text-white
        border border-borderShade
        bg-primary-default
        mt-8 rounded-full text-base font-semibold w-full flex items-center justify-center py-2 leading-5 bg-primary-inverse text-primary-inverse
        transition duration-300 ease-in-out hover:bg-primary-hover focus:bg-primary-focus"
         >
          <div className="flex items-center flex-row-reverse false">
            Go Home
          </div>
        </button>
        </Link>
      </div> 
      <h1>err</h1>
    </div>
  );
};

export default Error;
