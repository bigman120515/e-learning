import React,{useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommenHero from '../HeroHeading/CommenHero';
import FaqList from './FaqList';
import Faq from "react-faq-component";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";


const FaqDetails = () => {
  
  
  
  const [show,setShow]=useState(false)
    let headings ={
        n1:"Frequently Asked ",
        n2:"Ques",
        n3:"tions",
    }
   
  return (
    <>
    <Navbar />
    <CommenHero allName={headings} name2="FAQs"/>
    <section>
        <div className="faq_padd">

        <FaqList />

           
                </div>
                </section>



    <Footer />

    
    </>
  )
}

export default FaqDetails