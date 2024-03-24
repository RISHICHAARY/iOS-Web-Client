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

export default App;
