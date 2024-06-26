import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
axios.defaults.withCredentials = true;

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const show=false;
  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post("https://apple-academy.vercel.app/login", {        email,
        password,
        },{
           headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
        },
        })
        .then(result => {
          console.log(result);
          navigate("/")
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
    <div className=" all mt-6">
      <div className="d-flex bg-gray-900 align-items-center py-4  ">
        <form
          action="POST"
          onSubmit={handlesubmit}
          className="form-signin  m-auto w-96"
        >
          <h1 className="h3 mb-3 text-white fw-normal">Please Log in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-2">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input "
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label
              className="form-check-label text-gray-400"
              htmlFor="flexCheckDefault"
            >
              Remember me
            </label>
          </div>
        
            <button
              className="btn btn-primary w-100 py-2"
              onClick={handlesubmit}

              type="submit"
            >
              Log in
            </button>
          

          <br />
          <br />
          <p className="text-white">
            OR If not SignedUp, then Go to{" "}
            <Link to="/sign" className="underline text-white">
              {" "}
              Signup{" "}
            </Link>
          </p>
        </form>

        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        ></script>
      </div>
    </div>
  );
};

export default Login;
