import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Projects from './Pages/Projects/Projects';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './components/ContactUs';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/mail' element={<ContactUs/>}/>
      </Routes>
    </>
  )

}

export default App