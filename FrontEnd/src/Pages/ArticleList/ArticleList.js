import React from 'react';
import articleDetails from './Articledetails';
import CommenHero from '../Component/HeroHeading/CommenHero';
import HeroDetails from '../Component/HeroHeading/HeroDetails';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const ArticleList = () => {

    let headings={
        n1:"Article",
        n2:"Li",
        n3:"sts",
    }

  return (
    <>
    <Navbar />

    <CommenHero allName={headings}  name1="Artical" name2="Artical List" Name3="Artical List"/>

    <div className="privacy_padd">
    <div>
                    <h2 className="heading2 mb-0">Tagged in "Basics"</h2>
                    <h6 className="mt-3 text-black heading6">35 articles</h6>
                </div>
     {
        articleDetails.map((val ,key)=>{
            return(

   <div className="mt-5">
                <a href="article-details.html" className="ancor_color">
                    <h4 className="heading4 mb-1"> <span>{val.head}</span></h4>
                </a>

                <p className="mb-3 main_para">{val.smallpara}</p>
                <p className="artice_para">{val.divpara}</p>

            </div>
            )
        })

     }
     </div>

     < Footer />

    </>
  )
}

export default ArticleList