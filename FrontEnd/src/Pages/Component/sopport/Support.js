import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommenHero from '../HeroHeading/CommenHero';

const Support = () => {
    let headings={
        n1:"Help &",
        n2:"Supp",
        n3:"ort",
    }
  return (
    <>
    <Navbar />
    <CommenHero allName={headings} name1="Help & Supports"/>

    <section>
        <div className="privacy_padd">
            <div className="help_form_section">

                <form>
                    <label className="mb-2 text-grey text-sm label_size">Issue</label>
                    <select className="form-select mb-3" aria-label=".form-select-lg">
                        <option selected>Select Issue</option>
                        <option value="1">Issue One</option>
                        <option value="2">Issue Two</option>
                        <option value="3">Issue Three</option>
                    </select>
                    <div className="form-group mb-3">
                        <label for="dfs" className="text-grey mb-2 label_size">Type</label>
                        <input className="form-control" id="dfs" />
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleFormControlTextarea1" className="text-grey mb-2 label_size">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <div className="mt-4 d-flex justify-content-center">
                    <a href="#" className="btn btn_primary radius btnlg" data-bs-toggle="modal" data-bs-target="#thankpage">Submit</a>

                </div>
            </div>
        </div>
    </section>

    <Footer />
       
        </>
  )
}

export default Support