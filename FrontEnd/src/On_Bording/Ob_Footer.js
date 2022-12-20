import React from 'react'
import { Link } from 'react-router-dom'

function Ob_Footer() {
  return (
    <>
         
         <footer>
            <div class="footer_padding background-color-white">
                <div>
                    <div class="footer_section">
                        {/* <div class="footer_logo">
                            <a class="footer-brand" href="index.html"><img src="assets/images/logo/logo01.png"/></a>
                        </div> */}
                        {/* <div class="footer_icon">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                    <hr/>
                    <div class="footer_section footer_section_second">
                        <div className='footer_barnd'>
                        <a href="#">© Learnet LLC </a>
                        </div>
                        <div class="privacytext"><span class="privacy_section"> <Link to="/privacy-policy">Privacy Policy</Link></span> <Link to="/term-and-condtion">T & C</Link></div>
                    </div>
                </div>
            </div>
        </footer>
      
    
    </>
  )
}

export default Ob_Footer