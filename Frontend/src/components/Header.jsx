import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoapple.png";
import { Link } from "react-router-dom";
import { useState } from "react";
 export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false); // Close the disclosure panel when a link is clicked
  };
  return (
    <>
      <div
        style={{ backgroundColor: "#1A202C" }}
        className="min-h-full   sticky top-0"
      >
        <Disclosure as="nav" className="bg-gray-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-5xl     py-2 px-8 sm:px-6  lg:px-0">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        {" "}
                        <img
                          className="logo h-8 w-13"
                          src={logo}
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <Link
                          to="/exam"
                          onClick={handleLinkClick}

                          className="text-gray-200 hover:bg-gray-700 hover:text-white
                              rounded-md px-2 py-1 text-md  font-semibold "
                        >
                          Exams
                        </Link>
                        <Link
                          to="/about"
                          onClick={handleLinkClick}

                          className="text-gray-200 hover:bg-gray-700 hover:text-white
                              rounded-md px-2 py-1 text-md  font-semibold "
                        >
                          AboutUs
                        </Link>
                        <Link
                          to="/live"
                          onClick={handleLinkClick}

                          className="text-gray-200 hover:bg-gray-700 hover:text-white
                              rounded-md px-2 py-1 text-md  font-semibold "
                        >
                          Live Class
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="hidden  w-60 flex     md:flex">
                    <Link to="/contact">
                      <div className="mr-5 w-36 px-4 py-3 bg-slate-200 font-medium bg-primary-inverse text-primary-inverse leading-5 rounded-full flex items-center justify-center space-x-3 truncate cursor-pointer">
                        <div className="">
                        
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="vuesax/bold/call-calling">
                              <g id="call-calling">
                                <path
                                  id="Vector"
                                  d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
                                  fill="#233A6C"
                                ></path>
                                <path
                                  id="Vector_2"
                                  d="M21.23 10.75C20.8 10.75 20.46 10.4 20.46 9.98C20.46 6.43 17.57 3.55 14.03 3.55C13.6 3.55 13.26 3.2 13.26 2.78C13.26 2.36 13.6 2 14.02 2C18.42 2 22 5.58 22 9.98C22 10.4 21.65 10.75 21.23 10.75Z"
                                  fill="#233A6C"
                                ></path>
                                <path
                                  id="Vector_3"
                                  d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                                  fill="#233A6C"
                                ></path>
                                <path
                                  id="Vector_4"
                                  d="M21.97 18.33C21.97 18.61 21.92 18.9 21.82 19.18C21.79 19.26 21.76 19.34 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C10.36 19 9.96998 18.71 9.59998 18.4L12.87 15.13C13.15 15.34 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                                  fill="#233A6C"
                                ></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div> Talk to us</div>
                      </div>
                    </Link>

                    <Link to="/login">
                      
                      <button style={{borderRadius:"1000px"}}
                                                onClick={handleLinkClick}

                        className="btn btn-outline-light  py-2 px-3 
                  fw-semibold  my-2"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
               <div className="-mr-2 flex  md:hidden">
                 <Link to="/login">  <div className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-500 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 mr-2 focus:ring-offset-gray-800">    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-box-arrow-in-right block h-6 w-6 " viewBox="0 0 16 16">
                   <path   d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                     <path   d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>    </div>         </Link>           {/* Mobile menu button */}
                    <Disclosure.Button  onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 outline-none border-none hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2    ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel    
                               className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <div className="border-bottom "    onClick={() => setIsOpen(!isOpen)}
>
                    <Link
                      to="/exam"
                      onClick={() => {
                        setIsOpen(false); // Close the disclosure panel when a link is clicked
                      }}                      className="text-gray-200 hover:bg-gray-700   hover:text-white
                              rounded-md px-2 py-1 text-md  font-semibold "
                    >
                          

                      Exams
                    </Link>
                  </div>
                  <div className="border-bottom">
                    <Link
                      to="/about"
                      onClick={() => setIsOpen(!isOpen)}

                      className="text-gray-200 hover:bg-gray-700 hover:text-white
                              rounded-md px-2 py-1 text-md  font-semibold "
                    >
                      AboutUs

                    </Link>
                  </div>
                  <div className="border-bottom">
                    <Link
                      to="/live"
                      onClick={() => setIsOpen(!isOpen)}

                      className="text-gray-200 hover:bg-gray-700 hover:text-white
                              rounded-md px-2 py-1 text-md  font-semibold "
                    >
                      Live class
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
