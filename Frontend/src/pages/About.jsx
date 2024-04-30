 import {Link} from "react-router-dom"
 import about from "../assets/about.png"
const About = () => {
  return (
    <div>
        <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-gray-500">Apple Classes</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead fs-4 text-gray-500 mb-4">Center of Learning & student Success</p>
        <p className="lead text-gray-500 mb-4">The institution has very good in infrastructure and also good for studying. I will surely recommend this institute if u want to improve your personal skills and knowledge.
</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Link to="/exam"> <button
              type="button"
              className="btn fw-semibold btn-outline-success mb-2 btn-lg mx-1 px-4"
            >
              Grade 6-12
            </button>
            <button
              type="button"
              className="btn fw-semibold btn-outline-success btn-lg mx-1 px-4"
            >
              Airforce XY
            </button>
            <button
              type="button"
              className="btn fw-semibold btn-outline-success btn-lg mx-1 px-4"
            >
              NDA
            </button>
            </Link>        </div>
      </div>
      <div className=" " style={{ maxHeight: '50vh' }}>
        <div className="container px-2">
          <img src={about} className="img-fluid border mx-auto rounded-3 shadow-lg mb-4" alt="Example image" width="900" height="500" loading="lazy" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
