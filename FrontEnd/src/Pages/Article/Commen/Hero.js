import React from 'react'

const Hero = (props) => {
  return (
    <>
    <section className="">
<div className="hero-section-privacy term_condition_bg">
    <div>
        <nav aria-label="breadcrumb " className="breadcrumb_page">
            <ol className="breadcrumb ">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{props.name}</li>
            </ol>
        </nav>
        <h1 className="mb-4 privacy_heading"><span className="span">{props.firstName}</span>{props.lastName}</h1>
        <h5 className="mb-4 privacy_heading5">Hi Shivangi, we're here to help.</h5>
        <div className="height d-flex justify-content-center align-items-center">
            <div className="search">
                <input type="text" className="form-control" placeholder="How can we help?"/>
                <i className="fa fa-search"></i>
            </div>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Hero