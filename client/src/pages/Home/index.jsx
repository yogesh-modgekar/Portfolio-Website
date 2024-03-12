import React from 'react'
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function Home() {
  const {portfolioData} = useSelector((state) => state.root );
  return (
    <>
    <Header/>
        {portfolioData && (
              <div className=' bg-primary px-40 sm:px-5'>
              <Intro/>
              <About/>
               <Skills/>
               <Projects/>
               <Contact/>
               <Footer/>
              </div>
        )}
     </>
  )
}

export default Home;