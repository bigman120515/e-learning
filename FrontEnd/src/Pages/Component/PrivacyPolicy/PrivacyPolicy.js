import React from 'react'

import Navbar from '../Navbar';
import Footer from '../Footer';
import CommenHero from '../HeroHeading/CommenHero';
 import policydetails from './PrivacyPolicyList';

const PrivacyPolicy = () => {

     let headings={
            n1:"Privacy",
            n2:"Pol",
            n3:"icy",
        }
  return (
    <>
      <Navbar />
      <CommenHero allName={headings} name1="Privacy Policy"/>
      <div class="privacy_padd">
      {
policydetails.map( (val,ind)=>{

    return(

        <div key={ind}>

        <h4 class="heading41 mb-4">{val.heading}</h4>
        <p class="artice_para">
            {val. details}
        </p>
       
    </div>
    )

})
      }
</div>
      <Footer />
   
    </>
  
  )

}


export default PrivacyPolicy