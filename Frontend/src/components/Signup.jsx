 import { useState } from "react";
 import { Link, useNavigate } from 'react-router-dom'
 import axios from 'axios';
 
function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
 axios.defaults.withCredentials = true;

    const navigate=useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
      
axios.post("https://apple-academy.vercel.app/sign", { 
           name,
          email,
          password
        },{
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        })
        .then(result => {
          console.log(result);
          navigate("/login")
          // Handle successful response here (e.g., redirect to another page)
        })
        .catch(err => {
          if (err.response) {
             console.log("Server responded with an error status:", err.response.status);
            console.log("Error response data:", err.response.data);
          } else if (err.request) {
             console.error("No response received from the server:", err.request);
          } else {

           
           console.error("Error setting up the request:", err.message);
          }
         });
      };
      

  return (
    <div className=' all mt-6'>
       <div className="d-flex bg-gray-900 align-items-center py-4  ">
   
 

         <form action='POST' onSubmit={handlesubmit} className="form-signin  m-auto w-96">
           <h1 className="h3 mb-3 text-white fw-normal">Please Sign in</h1>

          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="floatingInput" name="name" onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-2">
            <input type="password" className="form-control" name="password" onChange={(e)=>{setPassword(e.target.value)}} id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input " type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-gray-400" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" onClick={handlesubmit} type="submit"> Log in </button>
    <br />
    <br />
  <p className='text-white'>OR If Signed up, then <Link to="/login" className='underline text-white'> Go to Sign in Page </Link></p>
  
  



        </form>
  
       <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"  ></script>
    </div>
    </div>
  );
}

export default Signup;
