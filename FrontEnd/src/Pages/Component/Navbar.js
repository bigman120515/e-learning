import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const  [show,setShow]=useState(true)
    const handleShow=()=>{
        if(show){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
    console.log(show)
    const id = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
    const redirect_url =process.env.REACT_APP_REDIRECT_URL;
    
  {/*  let redirect_url = 'http://localhost:3000'; //process.env.REDIRECT_URL;
    if(window.location.href.includes('learnet'))
    redirect_url='https://learnet.acolabz.com';
*/}
  //const redirect_url1=process.env.REACT_APP_API_URL;
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${id}&redirect_uri=${redirect_url}&state=123456&scope=r_liteprofile,r_emailaddress`;
  return (
    <>
        {/* <!-- header section start  --> */}
        <header>
            <nav className="navbar navbar-expand-lg navbar-light home-navbar  fixed-top" id="header_frame">
                <div className="container-fluid header_section-home mt-2">
                   
                     
                      <Link className="navbar-brand header-brand header-brand-img-responsive" to="/"><img src="assets/images/logo/logo01.png"/></Link>
                        <button className={show?"navbar-toggler navbar-toggler-align-right ":"navbar-toggler navbar-toggler-align-right collapsed "} type="button" onClick={handleShow} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={show?"false":"true"} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                  
                  
                    <div className={"collapse navbar-collapse show"} style={{display:show?"block":"none"}} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mynavbar">
                            <li className="nav-item border-bottom-none">
                                <Link className="nav-link" to="#groupsession">
                                    Upcoming Group Sessions
                                </Link>
                            </li>
                            <li className="nav-item border-bottom-none">
                                <Link className="nav-link" to="/">
                                    Find People
                                </Link>
                            </li>
                            <li className="nav-item border-bottom-none">
                                <Link className="nav-link" to="/faqs">
                                    FAQs
                                </Link>
                            </li>
                            <li className="nav-item border-bottom-none">
                                <a className="nav-link btnnav" href={url}>Connect with Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default React.memo(Navbar)