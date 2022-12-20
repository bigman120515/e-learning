import React from 'react'

function BookNav() {
  return (
    <>
        <header>
        <div className="header_class">
            <div className="booking_logo">
                <div><img src="assets/images/booking_logo.png"/>&nbsp;&nbsp;Learnet</div>

            </div>
            <div className="search_group">

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Skiils, Mentors"/>
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                    </div>
                </div>
            </div>

        </div>
        </header>
    </>
  )
}

export default BookNav