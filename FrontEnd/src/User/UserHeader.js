import React from 'react'

function UserHeader() {
  return (
    <>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light navbar_datetime">
            <div class="container-fluid header_section mt-2">
                <a class="navbar-brand datetime-brand" href="index.html"><img src="assets/images/datetimelogo.png" class="img-fluid"/>&nbsp;&nbsp; Learnet</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav datetime-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-home"></i>

                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="far fa-comment-alt"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-cog"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="far fa-bell"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="assets/images/datetimeprofile.png" class="img-fluid"/>
                            </a>
                        </li>




                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default UserHeader