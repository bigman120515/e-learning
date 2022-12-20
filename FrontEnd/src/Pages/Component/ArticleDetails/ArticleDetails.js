import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommenHero from '../HeroHeading/CommenHero';
import HeroDetails from '../HeroHeading/HeroDetails';
import ArticleParaList from './ArticledetailslList/ArticleParaList';
import ArticleDetailsLinkList from './ArticledetailslList/ArticleDetailsLinkList';
import ArticleDetailsUlList from './ArticledetailslList/ArticleDetailsUlList';
import ArticleDetailsListLink from './ArticledetailslList/ArticleDetailsListLink';

const ArticleDetails = () => {
    let headings={
        n1:"Article",
        n2:"Det",
        n3:"ails",
    }
  return (
    <>
    <Navbar />
    <CommenHero  allName={headings}   name1="Article" name2="Article Details" name3="Article List"/>
    <section>
        <div className="privacy_padd">
            <div>
                <div>
                    <h2 className="heading2 mb-2">Various ways to connect with people on Learnet</h2>
                    <h6 className="mt-3  heading6">Last updated: 24 days ago</h6>
                </div>
            </div>
            {
                ArticleParaList.map((val ,key)=>{
                    return(
                        <div className="mt-5">
                        <p className="artice_para">
                            {val.para1}
                        </p>
                    </div>

                    )
                })
            }
             <div className="mt-3">
                <p className="artice_para">There are several ways to connect with people on LinkedIn:
                </p>
            </div>

            <div className="ms-5 mt-2 list_article">
                <ul>
                    {
                      ArticleDetailsLinkList.map((val,ley)=>{
                        return(

                            <li> <a href="#" className="ancor_color "><span>{val.link}</span></a>{val.para}</li>
                        )
                      })  
                    }


                    </ul>
                    </div>

                    <div class="mt-5">
                <p class="artice_para" style={{fontWeight:700}}>
                    Notes:
                </p>
            </div>

            <div class="ms-5 mt-2 list_article">
                <ul>
            {


          ArticleDetailsUlList.map((val,key)=>{
        return(
            <li>{val.list}</li>
    
       )
          })
            }
            </ul>
            </div>

            <div class="mt-3">
                <a href="#">
                    <p class="artice_para">Learn More
                    </p>
                </a>
            </div>

            <div class="ms-5 mt-2 list_article">
                <ul>
{
    ArticleDetailsListLink.map((val,key)=>{
        return(
            <li>
            <a href="#">
                <span class="text-pink">{val.list}</span>
</a>
</li>

        )
    })
}

                    </ul>
                    </div>



            


           
            </div>
            </section>
            <Footer />

   

    </>
  )
}

export default ArticleDetails