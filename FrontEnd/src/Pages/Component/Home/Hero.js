import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero() {
    return (
        <>
            {/* <!-- hero section  --> */}

            <div className=" padding-top-0 hero_section">
                <div className="row">
                    <div className="col-lg-6 ps-sm-3 hero_text_section">
                        <div className="hero_heading">
                            <h1 className="font-style-zilla-slab">Welcome to your professional <span className="main-color"> lear</span>ning <span className="main-color">net</span>work</h1>
                        </div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="What would you like to learn?" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 hero_sub_position">
                        <img src="assets/images/public-pages/UpdatedHome.png" className="img-fluid d-flex mx-auto" id="desktop_view" />
                        <img src="assets/images/public-pages/hero_mobile_view.png" className="img-fluid mx-auto" alt='pic' id="mobleview" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Hero)