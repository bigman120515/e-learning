import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UpcommingSession } from '../UserHome/Components/UpcommingSession'

export const SideBar = () => {
    const [name, setName] = useState("");
    const [field, setField] = useState("");
    const [image, setImage] = useState();
    const [post, setPost] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [skills, setSkills] = useState([]);

    let userProfileData = JSON.parse(localStorage.getItem('userProfileData'))
    useEffect(() => {
        console.log("kundan------", userProfileData)
        setName(userProfileData.fullName)
        setField(userProfileData.currentJobTitle)
        setImage(userProfileData?.profilePicture || "assets/images/avatar/07.jpg")
        setPost(userProfileData?.totalPost || 0)
        setFollowers(userProfileData?.totalFollower || 0)
        setFollowing(userProfileData?.totalFollowing || 0)
        setSkills(userProfileData?.skills || [])
    }, [userProfileData])
    return (
        <>
            <div class="col-lg-3">

                {/* <!-- Advanced filter responsive toggler START --> */}
                <div class="d-flex align-items-center d-lg-none">
                    <button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                        <i class="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
                        <span class="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                    </button>
                </div>
                {/* <!-- Advanced filter responsive toggler END --> */}

                {/* <!-- Navbar START--> */}
                <nav class="navbar navbar-expand-lg mx-0">
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
                        {/* <!-- Offcanvas header --> */}
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>

                        {/* <!-- Offcanvas body --> */}
                        <div class="offcanvas-body d-block px-2 px-lg-0">
                            {/* <!-- Card START --> */}
                            <div class="card overflow-hidden">
                                {/* <!-- Cover image --> */}
                                <div class="h-50px"
                                    style={{ background: "url(assets/images/bg/01.jpg) center no-repeat" }}>
                                </div>
                                {/* <!-- Card body START --> */}
                                <div class="card-body pt-0">
                                    <div class="text-center">
                                        {/* <!-- Avatar --> */}
                                        <div class="avatar avatar-lg mt-n5 mb-3">
                                            <Link to="../myprofile"><img
                                                class="avatar-img rounded border border-white border-3"
                                                src={image} alt="" /></Link>
                                        </div>
                                        {/* <!-- Info --> */}
                                        <h5 class="mb-0"> <Link to="../myprofile">{name} </Link> </h5>
                                        <small class="mt-3">{field}</small><br></br>
                                        <small>Known For - </small>
                                        {skills.length > 0 &&
                                            skills.map((item, i) =>  i <= 2 && <> <small class="mt-3"> {item.title}</small>, </> 
                                            )
                                        }


                                        {/* <!-- User stat START --> */}
                                        <div class="hstack gap-2 gap-xl-3 justify-content-center mt-3">
                                            {/* <!-- User stat item --> */}
                                            <div>
                                                <a href="my-profile-post.html" class="text-dark">
                                                    <h6 class="mb-0">{post}</h6>
                                                    <small>Post</small>
                                                </a>
                                            </div>
                                            {/* <!-- Divider --> */}
                                            <div class="vr"></div>
                                            {/* <!-- User stat item --> */}
                                            <div>
                                                <a href="connection.html" class="text-dark">
                                                    <h6 class="mb-0">{followers}</h6>
                                                    <small>Followers</small>
                                                </a>
                                            </div>
                                            {/* <!-- Divider --> */}
                                            <div class="vr"></div>
                                            {/* <!-- User stat item --> */}
                                            <div>
                                                <a href="connection.html" class="text-dark">
                                                    <h6 class="mb-0">{following}</h6>
                                                    <small>Following</small>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- User stat END --> */}
                                    </div>



                                    {/* <!-- Side Nav END --> */}
                                </div>
                                {/* <!-- Card body END --> */}
                                {/* <!-- Card footer --> */}

                            </div>
                            {/* <!-- Card END --> */}
                            {/* <!-- slider START --> */}
                            <UpcommingSession />

                            {/* <!-- Helper link START --> */}
                            <ul class="nav small mt-4 justify-content-center lh-1">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Support</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Docs </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Help </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Privacy & Terms</a>
                                </li>

                            </ul>
                            {/* <!-- Helper link END --> */}
                            {/* <!-- Copyright --> */}
                            <p class="small text-center mt-1">©2022 <a class="text-body" target="_blank" href="#">
                                Learnet </a></p>
                        </div>
                    </div>
                </nav>
                {/* <!-- Navbar END--> */}
            </div>













        </>
    )
}
