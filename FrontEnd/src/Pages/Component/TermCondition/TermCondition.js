import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommenHero from '../HeroHeading/CommenHero';
import ConditionList from "./ConditionList";

const TermCondition = () => {
  let headings={
    n1:"Terms &",
    n2:"Cond",
    n3:"ition",
  }

  return (
    <>
    <Navbar />
    <CommenHero allName={headings} name2="Terms & Condition"/>
 <section>
        <div class="privacy_padd">
            {
                 ConditionList.map((val,key)=>{
                    return(
                        <div>
                        <h4 class="heading41 mb-4">{val.head}</h4>
                        <p class="artice_para">{val.Para}</p>
                    </div>
                    )
                 })
                             }          
            </div>
            </section>
    <Footer />
    </>
  )
}
export default TermCondition