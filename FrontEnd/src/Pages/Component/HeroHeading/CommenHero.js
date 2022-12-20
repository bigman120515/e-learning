import React from 'react'
import HeroDetails from './HeroDetails'

const CommenHero = (props) => {
  console.log(props.name3)
  return (
    <>
    
        <div className="hero-section-privacy term_condition_bg">
            <div>
                <nav aria-label="breadcrumb " className="breadcrumb_page">
                    <ol className="breadcrumb ">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        {props.name1?<li className="breadcrumb-item"><a href="article.html">{props.name1} </a></li>:""}
                        {props.name3?<li className="breadcrumb-item"><a href="articleList.html">{props.name3} </a></li>:""}
                  
                        {props.name2?<li className="breadcrumb-item active" aria-current="page">{props.name2}</li>:""}
                    
                    </ol>
                </nav>
                <h1 className="mb-4 privacy_heading"> {props.allName.n1} <span className="span">{props.allName.n2}</span><span className="span">{props.allName.n3}</span></h1>
                <h5 className="mb-4 privacy_heading5">Hi, we're here to help.</h5>
                <div className="height d-flex justify-content-center align-items-center">
                    <div className="search">
                        <input type="text" className="form-control" placeholder="How can we help?"/>
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
   
    </>
  )
}

export default CommenHero