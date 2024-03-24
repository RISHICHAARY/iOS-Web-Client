import { useState,useEffect } from 'react';
import { Routes , Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ApplyNow from './Pages/ApplyNow';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Gallery from './Pages/Gallery';

import './Styles/global.css';

function App() {

  const [ pageState,setPageState ] = useState({
    isScreened:true,
  });

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = getWindowSize();
      if(innerWidth < 1200){
        setPageState( (prev)=>({...prev,isScreened:false}) );
      }
      else{
        setPageState( (prev)=>({...prev,isScreened:true}) );
      }
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if(pageState.isScreened){
    return (
      <>
        <Navbar/>
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ApplyNow" element={<ApplyNow/>} />
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Projects' element={<Projects/>}/>
          </Routes>
        </>
        <Footer/>
      </>
    );
  }
  else{
    return(
      <div className="flex justify-center w-full h-[100vh]">
          <div className="flex flex-col gap-2 justify-center items-center">
              <div className="bg-orange rounded-md p-10 w-fit">
                  <i className="fa-solid fa-mobile text-[40px] text-white"></i>
                  {/* <p className="fontEpilouge text-[70px] font-bold">404</p> */}
              </div>
              <p className="fontInter text-[20px] font-medium text-center px-10">We're still not available for mobile. Use desktop to see us.</p>
          </div>
      </div>
    )
  }
}

export default App;

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}