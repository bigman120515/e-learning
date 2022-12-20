import React from 'react';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Hero from './Commen/Hero';
import RecomendedTopic from './RecomendedTopic';


const Article = () => {
  return (
    <>
    <Navbar />
    <Hero name="Articles" firstName="Art" lastName="icles"/>
    <RecomendedTopic/>
    <Footer />

    
        
    </>
  )
}

export default Article