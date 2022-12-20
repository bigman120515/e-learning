import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CommenHero from '../HeroHeading/CommenHero'

const NoArticle = () => {
    let headings={
        n1:"No",
        n2:"Art",
        n3:"icles"

    }
  return (

    <>
       <Navbar />
       <CommenHero allName={headings} name2="No Articles"/>

       <section>
        <div className="privacy_padd">
            <h2 className="heading2 mb-3 text-center">No articles <span className="text-pink">found?</span></h2>
            <div className="d-flex justify-content-center">
                <img src="assets/images/public-pages/noarticlebg.png" className="no-article_bg" />
            </div>
            <div className="mt-4 d-flex justify-content-center">
                <a href="support.html" className="btn btn_primary radius btnlg">Contact Support</a>
            </div>
        </div>
    </section>


       <Footer />

       </>
  )
}

export default NoArticle