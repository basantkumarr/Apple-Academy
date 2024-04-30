 
 import { Suspense, lazy } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Loader from './components/Loader'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
// import Call from './components/call';
import Room from './pages/Room';
 
const Contact= lazy(()=>import("./pages/Contact"))
const Exam= lazy(()=>import("./pages/Exam"))
const Home= lazy(()=>import("./pages/Home"))
const TestSeries= lazy(()=>import("./pages/TestSeries"))
const About= lazy(()=>import("./pages/About"))
function App() {
 
  return (
    <>
    <BrowserRouter>
     <Header></Header> 
     {/* <Call></Call> */}
     <Suspense fallback={<Loader></Loader>}>
    <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/exam' element={<Exam></Exam>}></Route>
<Route path='/live' element={<TestSeries></TestSeries>}></Route>
<Route path='/contact' element={<Contact></Contact>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/sign' element={<Signup></Signup>}></Route>
<Route path='/room/:roomId' element={<Room></Room>}></Route>
<Route path='*' element={<Error></Error>}></Route>

    </Routes>
    </Suspense>
    <Footer></Footer>
    
    </BrowserRouter>
    </>
  )
}

export default App
