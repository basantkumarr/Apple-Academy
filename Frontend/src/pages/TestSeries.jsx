 import { useState } from "react";

 import { Navigate, useNavigate } from "react-router-dom";
const TestSeries = () => {
  const [code, setCode] = useState("");
const navigate=useNavigate();

   const handlesubmit=(e)=>{
    e.preventDefault();

    navigate(`/room/${code}`)
   }
  return (
    <div className="all">
    <form onSubmit={handlesubmit}
      className="form-signin mt-5 m-auto w-90"
  >
    <h1 className="h3 mb-3 text-white fw-normal">Room Code</h1>

    <div className="form-floating mb-4 mt-4">
      <input
        type="text"
        required
        className="form-control"
        id="floatingInput"
        name="code"
       onChange={(e)=>{setCode(e.target.value)}}
        placeholder=""
      />
      <label htmlFor="floatingInput">Enter Room Code</label>
    </div>
   
      <button
      className="btn btn-primary w-100 py-2"
       type="submit"
    >
     Enter Room
    </button>
  
     
   </form>
   </div>

  )
}

export default TestSeries
