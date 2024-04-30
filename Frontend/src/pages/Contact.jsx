import no from "../assets/call_main-removebg-preview.png";
import Teatimonils from "../components/Teatimonils";
import cont from "../assets/contact.png";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [goal, setGoal] = useState("");
  const [mode, setMode] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    axios.post(
      "https://apple-academy-1.vercel.app/contact",
      { name, lastName, address, mobile, goal, mode },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      // Handle successful response here (e.g., redirect to another page)
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      // Handle error here
    });
  };

  return (
    <div>
      <div className="all">
        <div className="rounded btn  py-3  block">
          <img className="my-auto" src={no} alt="" />
        </div>

        <div className="container flex items-start">
          <div className="hidden lg:block w-2/5">
            <div>
              <img
                alt="form"
                data-testid="shownImage"
                loading="lazy"
                width="10"
                height="10"
                decoding="async"
                data-nimg="1"
                className="w-full"
                style={{ color: "transparent" }}
                src={cont}
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5 mt-5 bg-gray-800 rounded-3xl">
            <div className="px-6 py-5 bg-gradient-to-r from-[--bg-tertiary] -from-13.55 to-marketingFormEnd to-69.48 rounded-t-3xl">
              <div className="text-xl font-bold tracking-wider text-white">
                Request a callback
              </div>
              <hr className="text-white" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-6 py-1">
              <div>
                <form className="row g-3" onSubmit={handleClick}>
                  {/* Form fields */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Teatimonils />
    </div>
  );
};

export default Contact;
