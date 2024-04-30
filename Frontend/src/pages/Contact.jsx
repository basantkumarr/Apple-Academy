import no from "../assets/call_main-removebg-preview.png";
import Teatimonils from "../components/Teatimonils";
import cont from "../assets/contact.png";
import axios from "axios";
import { useState  } from "react";
 

const Contact = () => {

const[name,setName]=useState("");
const[lastName,setLastName]=useState("");
const[address,setAddress]=useState("");
const[mobile,setMobile]=useState("");
const[goal,setGoal]=useState("");
const[mode,setMode]=useState("");
    const navigate = useNavigate();

axios.defaults.withCredentials = true;

const handleClick=(e)=>{
  e.preventDefault();
axios.post("https://apple-academy-1.vercel.app/contact", {name,lastName,address,mobile,goal,mode},{
           headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
        }
).then(result => {
  console.log(result);
    // Handle successful response here (e.g., redirect to another page)
}).catch((err)=>{
  console.log(err);

});


}
 



  return (
    <div>
      <div
        className="all">
        <div className="rounded btn  py-3  block">
          <img className="my-auto" src={no} alt="" />
        </div>

        <div className="container   flex items-start">
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
                <form className="row g-3"  onSubmit={handleClick}>
                  <div className="col-md-6">
                    <label   className="form-label text-gray-400">
First Name                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      onChange={(e)=>{setName(e.target.value)}}

                    />
                  </div>
                  <div className="col-md-6">
                    <label  className="form-label text-gray-400 ">
                       Last Name                   
                  </label>
                    <input
                      type="text"

                      onChange={(e)=>{setLastName(e.target.value)}}
                      name="lastName"
                      className="form-control "
                      id="lastname"
                    />
                  </div>
                  <div className="col-12">
                    <label    className=" text-gray-400 form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      onChange={(e)=>{setAddress(e.target.value)}}

                      name="address"
                      className="form-control"
                      id="inputAddress"
                      placeholder=""
                    />
                  </div>
                  <div className="col-12">
                    <label  className="form-label text-gray-400">
                      Mobile no.                    </label>
                    <input
                      type="number"
                      name="mobile"
                      onChange={(e)=>{setMobile(e.target.value)}}

                      className="form-control"
                      id="inputAddress2"
                      placeholder=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label   className="form-label text-gray-400">
                      Goal
                    </label>
                    <input
                      type="text"
                      onChange={(e)=>{setGoal(e.target.value)}}

                      name="goal"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label  className="form-label text-gray-400">
                      Mode
                    </label>
                    <select id="inputState" name="mode" onChange={(e)=>{setMode(e.target.value)}}
                       className="form-select">
                      <option selected>Choose...</option>
                      <option>Offline</option>
                      <option disabled >Online</option>
                    </select>
                  </div>
 
                  <div className="col-12">
                   
                  </div>
             
                </form>
               
                <div className="flex items-center">
                  <label className="false checkbox-container s1034953207">
                    <input
                      id="checkbox_0"
                      type="checkbox"
                      data-testid="checkbox"
                    />
                    <span className="checkmark-checkbox"></span>
                  </label>
                  <label
                    htmlFor="checkbox_0"
                    className="text-secondary text-xs leading-6 cursor-default"
                  >
                    I agree to the
                  </label>
                  <div className="text-info pl-1 text-xs leading-6 underline cursor-pointer">
                    terms &amp; conditions
                  </div>
                </div>
                <div className="flex items-center">
                  <label className="false checkbox-container s1036788216">
                    <input
                      id="checkbox_1"
                      type="checkbox"
                      data-testid="checkbox"
                    />
                    <span className="checkmark-checkbox"></span>
                  </label>
                  <label
                    htmlFor="checkbox_1"
                    className="text-secondary text-xs leading-6 cursor-default"
                  >
                    I authorize APPLE ACADEMY to contact me via phone
                  </label>
                </div>
             
                <button
                  className="text-base px-2 py-1 mx-auto my-3 flex items-center flex-row-reverse false rounded-3xl text-primary m-1 border border-borderShade bg-primary-default mt-3 rounded-full text-base font-semibold w-52 flex items-center justify-center py-2 leading-5 bg-inverse text-white transition duration-300 ease-in-out hover:bg-primary-hover focus:bg-primary-focus"
                  data-testid="cta-button"
                  type="submit"
                  onClick={handleClick}
                >
                     Submit
                 </button>
              </div>
            </div>
          </div>
        </div>



      <Teatimonils></Teatimonils>










      </div>
 </div>
  );
};

export default Contact;
