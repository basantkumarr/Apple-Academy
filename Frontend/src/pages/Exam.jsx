 import { Link } from "react-router-dom"
import exam from "../assets/Group_1171277354_3_lgjnqf.webp"
const Exam = () => {
  
  return (
     <div id="exam"
        className="all"
      > 

       <div className="rounded btn  py-3  block">
      <Link to="/contact"> <img className="my-auto" src={exam} alt="" /></Link>   
        </div>




        <div className="row flex-lg-row align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 mx-auto col-lg-6">
    <img src="https://defencedirecteducation.com/wp-content/uploads/2021/04/165704257_184620313492535_4447267756841162450_n-e1617603893401-696x800.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300" height="300" loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-semibold text-gray-400 lh-1 mb-3">NDA</h1>
    <p className="text-gray-500">The National Defense Academy is the joint services academy of the Indian Armed Forces, where cadets of the three services, the Army, the Navy, and the Air Force, train together before they go on to respective service academies for further pre-commissioning training. In this context, "NDA army" might refer to the collective body of cadets, officers, and personnel associated with the Indian Army who have trained at or graduated from the National Defense Academy.</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
     
    </div>
  </div>
</div>


<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8  mx-auto col-lg-6">
    <img src="https://www.ssbcrack.com/wp-content/uploads/2018/12/Indian-airforce-airmen-recruitment-1024x668.jpg" width="500" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="300" loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-semibold text-gray-400 lh-1 mb-3">AirForce XY</h1>
    <p className="text-gray-500">Group X: This group consists of technical trades, including mechanical, electrical, electronics, and other similar fields. Candidates in Group X are responsible for maintaining and operating various technical equipment and systems used by the Air Force.
Group Y: This group includes non-technical trades such as administration, logistics, accounts, education instructor, and various other support roles. Candidates in Group Y perform administrative, support, and operational tasks necessary for the functioning of the Air Force.
</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
     
    </div>
  </div>
</div>

        <div className="row flex-lg-row align-items-center g-5 py-5">
  <div className="col-10 col-sm-8  mx-auto col-lg-6">
    <img src="https://cdn11.bigcommerce.com/s-coki26k/images/stencil/1280x1280/w/grades%206-12__97089.original.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="300" height="100" loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-semibold text-gray-400 lh-1 mb-3">Grade 6-12</h1>
    <p className="text-gray-500">Grade 6-12 encompasses a crucial period of academic and personal growth, where students transition from childhood to adolescence, exploring diverse subjects and developing critical skills. This phase is not just about academic learning but also about fostering creativity, curiosity, and a sense of responsibility.</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
     
    </div>
  </div>
</div>

        
    </div>
  )
}

export default Exam
