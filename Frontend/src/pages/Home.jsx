import "../styles/home.css";
import img1 from "../assets/Homimg1.webp";
 
import no from "../assets/call_main-removebg-preview.png";

import az from "../assets/Az.png";
import gk from "../assets/gk.png";
import { Link, useLocation } from "react-router-dom";
import Teatimonils from "../components/Teatimonils";
const Home = () => {
  // Scroll to the top when the window gains focus
  window.addEventListener("focus", function () {
    window.scrollTo(0, 0);
  });

  return (
    <div
 className="all"   >
      <div className="rounded btn  py-3 sm:py-0 block">
        <a href="tel:+91 9992040309">
          {" "}
          <img className="my-auto" src={no} alt="" />
        </a>
      </div>
      <div className="row flex-lg-row-reverse   align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
         <img  src={img1} width="400" className="ml-8 sm:ml-20"  alt="" />
        </div>
        <div className="col-lg-6 px-8">
          <div className="mb-8">
            <h1 className="fs-2 fw-semibold   text-gray-300 lh-1 mb-3">
              Center of Learning
            </h1>
            <h1 className="display-5 fw-semibold text-gray-300 lh-1 mb-3">
              & student <span className="text-success">Success</span>
            </h1>
          </div>
          <div className="d-grid gap-2 d-md-flex    justify-content-md-start">
            <Link className="butns" to="/exam">
              {" "}
              <button
                type="button"
                className="btn fw-semibold m-1 btn-outline-success btn-lg mx-1 px-4"
              >
                Grade 6-12
              </button>
             
              <button
                type="button"
                className="btn fw-semibold btn-outline-success btn-lg mx-1 px-4"
              >
                NDA
              </button>
              <button 
                type="button"
                className="btn  fw-semibold btn-outline-success btn-lg mx-1 mt-1  px-4"
              >
                Airforce XY
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="block ">
        <h1 className="text-gray-300  font-semibold  pl-1 my-10  mx-auto fs-1 ">
          {" "}
          Our Experienced Faculty
        </h1>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded   flex-md-row mb-4 shadow-sm h-md-250  ">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className=" text-blue-500 mb-2 text-emphasis">
                Govind Kumar
              </strong>
              <h3 className="mb-0 text-gray-300 ">Maths and Physics</h3>
              <div className="mb-1 text-success font-semibold   text-body-">
                12 Year Experience{" "}
              </div>
              <p className="card-text text-gray-400 mb-auto">
                Mathematics is the abstract science of number, quantity, and
                space. Physics is the branch of science with 
                properties of matter
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={gk} width="200px" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded   flex-md-row mb-4 shadow-sm h-md-250  ">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className=" text-blue-500 mb-2 text-emphasis">
                Aazad Singh
              </strong>
              <h3 className="mb-0 text-gray-300 ">Biology and English</h3>
              <div className="mb-1 text-success font-semibold   text-body-">
                10 Year Experience
              </div>
              <p className="card-text text-gray-400 mb-auto">
                Biology is the abstract science of plant and body. Physics is
                the branch of science with the nature and properties of matter
              </p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={az} className="" width="180px" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container  block">
        <h1
          data-testid="title"
          className="text-gray-300 my-10 fs-1 mx-auto  fw-semibold text-lg md:text-28 md:leading-10"
        >
          Discover the perfect program
        </h1>
        <div className="flex flex-row my-8 md:flex-row gap-3 flex-wrap pt-4 md:pt-6">
 
         <div
            data-testid="card"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707131200/2_2_jee_vwis6e.webp)",
            }}
            className="p-4 md:p-6 rounded-2xl md:w-80 w-full h-32 bg-gray-800 md:h-60 bg-contain bg-right-bottom bg-no-repeat   cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div
                data-testid="JEE"
                className="text-primary text-base font-semibold md:text-2xl md:font-medium"
              >
                <Link to="/exam">Grade 6-12</Link>
              </div>
            </div>
            <div
              data-testid="cardButton"
              className="justify-self-end flex items-center justify-between cursor-pointer mt-2"
            >
              <div className="text-accent  text-gray-300 font-semibold leading-tight  md:text-lg md:leading-normal">
                View
                <svg
                  className="MuiSvgIcon-root text-white MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowForwardOutlinedIcon"
                >
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            data-testid="card"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707131200/2_2_neet_pwddks.webp)",
            }}
            className="p-4 md:p-6 rounded-2xl md:w-80 w-full h-32 bg-gray-800 md:h-60 bg-contain bg-right-bottom bg-no-repeat   cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div
                 className="text-primary text-base font-semibold md:text-2xl md:font-medium"
              >
                <Link to="/exam"> AirForce XY </Link>{" "}
              </div>
            </div>
            <div
              data-testid="cardButton text-gray-300"
              className="justify-self-end flex text-gray-300 items-center justify-between cursor-pointer mt-2"
            >
              <div className="text-accent text-base  text-gray-300 font-semibold leading-tight md:text-lg md:leading-normal">
                View
                <svg
                  className="MuiSvgIcon-roottext-gray-300 MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowForwardOutlinedIcon"
                >
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div
          data-testid="card"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707311402/g_6_10_qs5ybp.webp)",
          }}
          className="p-4 md:p-6 rounded-2xl md:w-80 w-full h-32 bg-gray-800 md:h-60 bg-contain bg-right-bottom bg-no-repeat   cursor-pointer flex flex-col justify-between"
          >
          <div>
            <div
              data-testid="Grade 6-10"
              className="text-primary text-base font-semibold md:text-2xl md:font-medium"
            >
              <Link to="/exam"> NDA </Link>{" "}
            </div>
          </div>
          <div
            data-testid="cardButton"
            className="justify-self-end flex items-center justify-between cursor-pointer mt-2"
          >
            <div className="text-accent text-base text-gray-300 font-semibold leading-tight md:text-lg md:leading-normal">
              <Link to="/nda"> View</Link>
              <svg
                className="MuiSvgIcon-root text-gray-300 MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowForwardOutlinedIcon"
              >
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </div>
          </div>
        </div>
         </div>
  
      </div>

      <div className=" block ">
        <Teatimonils></Teatimonils>
      </div>
    </div>
  );
};

export default Home;
