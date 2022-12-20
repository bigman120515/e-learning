import React from 'react'
import { useState,useEffect } from 'react'

import { getAllPostFeed } from '../../../Services/MyProfileAuth';

import moment from 'moment';
import { Link } from 'react-router-dom';
import { AddComments, AddReply, AllComments, getAllPost ,AddLike} from "../../../Services/UserAuth";
import { FacebookIcon, FacebookShareButton,WhatsappShareButton,WhatsappIcon } from "react-share"
import { toast } from 'react-toastify';

const MyProfileChat = () => {
    const [show,setShow]=useState(false);
    const hideShow=()=>{
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    const userAllData = JSON.parse(localStorage.getItem("userData"));
    const linkedinId=userAllData.data.linkedinId
    const [allfeeds,setAllFeeds]=useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [postedby,setpostedby] = useState([])
    const [comment,setComment]=useState()
    const [newComment,setNewComment]=useState(true)
    const [allComments,setAllComments]=useState()
    const [userProfilePicture,setUserProfilePicture]=useState();
     const [showOption, setShowOption] = useState("false");
       //Add remove like from button
    const[likes,setLike]=useState(false);
    const[po,setpostid]=useState("")
     const shareUrl="https://learnet.acolabz.com"
     let userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
     //post like-------------------------
     const Like =(postid)=>{

        try{
          if(postid !==null )
          {
            AddLike(postid).then((res) =>{
              if(res != undefined)
              {
                console.log(res)
                if(res.success){
                  setLike(!likes)
                  console.log(res.data,"-------dta")
                  setpostid(res.data.post)
                  console.log(po,"----------postid")
                  getAllPost(linkedinId)
                 }
    
              }
            });
          }
        } catch(error){}
       }


       const handleKeyEnter=(e,id,pc)=>{
        if (e.key === 'Enter') {
          
          AddCommentsNow(id,pc)
          console.log("first")
        }
      }



      const AddCommentsNow=(postId,parentComment)=>{
        let data={
          postId,
          parentComment,
          comment
        }
        try {
          if (linkedinId !== null && comment!==null ) {
            AddComments(data,linkedinId).then((res) => {
              setNewComment(true)
              if(res!=undefined){
              console.log(res,"----------comment")
              if (res.success) {
                setComment()
               
              getAllPost(linkedinId)
              }
            }
            });
          }else if(comment===null){
            toast.error("Please Enter Comment")
          }
        } catch (error) {}
      }

   useEffect(() => {
        try {
          
          if (linkedinId !== null) {
            getAllPostFeed(linkedinId).then((res) => {
           
              if(res!==undefined){
              if (res.success) {
                console.log(res.data,"subi response-----------")
                setAllFeeds(res.data)
                
                setUserProfilePicture(userProfileData?.profilePicture || "")
          
                setIsLoaded(true);

             }
            }
            });
          
          }
        } catch (error) {}
      }, []);
      console.log(userProfilePicture,"pic")
     

  return (
        <>
         {(allfeeds !==null && allfeeds.length>0)&& 
            allfeeds.map((val, ind) => {
          return (
            <div className="card mt-3 px-0" key={ind}>
              {/* <!-- Card header START --> */}
              <div className="card-header border-0 pb-0">
              
                <div className="d-flex align-items-center justify-content-between">
               
                  <div className="d-flex align-items-center">
                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-story me-2">
                     
                     <Link to="#!">
                        
                       {(val.posted_by!=null && val.posted_by.length>0) &&
                        <img
                          className="avatar-img rounded-circle"
                          src={val.posted_by[0]?.profilePicture}
                          alt=""
                         />
                        }
                      </Link>
                      
                    </div>
                    {/* <!-- Info --> */}
                    {(val.posted_by!==null && val.posted_by!==undefined)&&
                    <div>
                      <div className="nav nav-divider">
                        <h6 className="nav-item card-title mb-0">
                          {" "}
                          
                          <Link to="#!">
                            
                             {val.posted_by[0]?.firstName}
                       <span>     {val.posted_by[0]?.lastName} </span> 
                          </Link>
                          
                        </h6>
                        <span className="nav-item small">{moment.utc(val.createdAt).local().startOf('seconds').fromNow()}</span>
                      </div>
                      <p className="mb-0 small">{val.posted_by[0]?.currentJobTitle}</p>
                    </div>
                  }
                  </div>
                  {/* <!-- Card feed action dropdown START --> */}
                  <div className="dropdown">
                   {/* <Link
                      to="#"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardFeedAction"
                      data-bs-toggle="dropdown"
                      aria-expanded={showOption == ind ? "true" : "false"}
                      onClick={(e) => showPostOption(ind)}
                    >
                      <i className="bi bi-three-dots"></i>
                    </Link> */}
                    {/* <!-- Card feed action dropdown menu --> */}
                    <ul
                      style={{
                        display: showOption == ind + "true" ? "block" : "none",
                      }}
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardFeedAction"
                    >
                      {/* <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </Link>
                      </li> */}
                      {/* <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-person-x fa-fw pe-2"></i>
                          Unfollow Sam Lanson{" "}
                        </Link>
                      </li> */}
                      {/* <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </Link>
                      </li> */}
                      {/* <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>
                          Block
                        </Link>
                      </li> */}
                      {/* <li>
                        <hr className="dropdown-divider" />
                      </li> */}
                      {/* <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  {/* <!-- Card feed action dropdown END --> */}
                </div>
              </div>
              {/* <!-- Card header END --> */}
              {/* <!-- Card body START --> */}
              <div className="card-body">
                <p>{val.body}</p>
                {/* <!-- Card img --> */}
                {
                  (val.photo !== null && val.photo.length > 0) ?
                  <img className="card-img" src={val.photo[0]} alt="Post" /> : "" }
                
                { (val.video !== null && val.video.length > 0) ? 
                 <video src={val.video} controls/> : ""               
                }
                  
                  {/* (val.photo!=null && val.photo.length>0)?
                    <img className="card-img" src={val.photo[0]} alt="Post" /> 
                    :
                    (val.video!=null && val.video!=undefined)?
                    <video src={val.video} controls/>
                    :<p></p>
                     */}
                {/* <!-- Feed react START --> */}
                <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 my-3">
                  <li className="nav-item">
                 
                   <a className={po?"nav-link mb-0 active":"nav-link mb-0"} onClick={(e)=>Like(val._id)} >
                      
                      <i className="bi bi-heart pe-2"></i>Liked ({val.totalLikes})
                      
                      {/* <i class="bi bi-heart-fill"></i>Liked(56) */}
                    </a>
                   
                  </li>

                  <li className="nav-item">
                   <Link className="nav-link mb-0" to="#!">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments ({val.totalComments})
                    </Link>
                  </li>
                  {/* <!-- Card share action menu START --> */}
                  <li className="nav-item dropdown">
                   <Link
                      to="#"
                      className="nav-link mb-0"
                      aria-expanded="false"
                      data-bs-toggle="modal"
                       data-bs-target="#modalCreatePrice"

                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share
                    </Link>
                    {/* <!-- Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction"
                    >
                      <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </Link>
                      </li>
                      {/* <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </Link>
                      </li>
                      <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </Link>
                      </li>
                      <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                       <Link className="dropdown-item" to="#">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                </ul>
                {/* <!-- Feed react START --> */}

                {/* <!-- Add comment --> */}
                <div className="d-flex mb-3">
                  {/* <!-- Avatar --> */}
                  <div className="avatar avatar-xs me-2">
                   <Link to="#!">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src={userProfilePicture}
                        alt=""
                      />{" "}
                    </Link>
                  </div>
                  {/* <!-- Comment box  --> */}
                  <form className="position-relative w-100" id= {val._id} >
                    <textarea
                      id={val._id}
                      className="form-control pe-4 bg-light"
                      data-autoresize
                      rows="1"
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e)=>setComment(e.target.value)}
                      onKeyDown={(e)=>handleKeyEnter(e,val._id,val?.parentComment)}
                    ></textarea>
                    {/* <!-- Emoji button --> */}
                    <div className="position-absolute top-0 end-0" onClick={(e)=> AddCommentsNow(val._id,null)}>
                      <button className="btn" type="button">
                      <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
                 {/* <!-- Comment wrap START --> */}
                {
                  (val.comments !== null && val.comments.length > 0) ? 
                 
                 <ul className="comment-wrap list-unstyled">
                      {/* <!-- Comment item START --> */}
                      <li className="comment-item">
                        <div className="d-flex position-relative">
                          <div className="comment-line-inner"></div>
                        </div>
                        {/* <!-- Comment item nested START --> */}
                        <ul className="comment-item-nested list-unstyled">
                          {/* <!-- Comment item START --> */}

                      
                      
                       <li className="comment-item"  >
                             <div className="comment-line-inner"></div>
                             <div className="d-flex">
                               {/* <!-- Avatar --> */}
                               <div className="avatar avatar-xs">
                               
                                <a>
                                {
                                  (val.comments.user!=null && val.comments.user.profilePicture!=undefined && val.comments.user.profilePicture!=null && val.comments.user.length>0)&&
                                    
                                   <img
                                     className="avatar-img rounded-circle"
                                      src={val.comments?.user.profilePicture}
                                     alt=""
                                   />
                                }
                                 </a>
                                
                               </div>
                               {/* <!-- Comment by --> */}
                             <div className="ms-2">
                                 <div className="bg-light p-3 rounded">
                                   <div className="d-flex justify-content-between">
                                     <h6 className="mb-1">
                                    
                                     {
                                      (val.comments!==null&& val.comments.length>0) ?
                                      <a > {val.comments[0].user.firstName} <span>{val.comments[0].user?.lastName}</span>  </a> :""
                                      }


                                     </h6>
                                     {/* <small>&nbsp;2hr</small> */}
                                   </div>
                                   {
                                    (val.comments!== null&& val.comments.length>0 ) ? 
                                    <p className="small mb-0">{(val.comments[0].comment)} </p> :""
                                   }
                                 </div>
                                 {/* <!-- Comment react --> */}
                                 {/* <ul className="nav nav-divider py-2 small">
                                   <li className="nav-item">
                                    <Link className="nav-link" to="#!">
                                      
                                       Like (5) 
                                     </Link>
                                   </li>
                                   <li className="nav-item">
                                    <Link className="nav-link" to="#!">
                                      
                                        Reply 
                                    </Link>
                                   </li>
                                 </ul> */}

                              </div>
                            </div>
                         </li>
                       
                      
                     
                 
                          {/* <!-- Comment item END --> */}
                          <div className="card-footer border-0 pt-0">
                            {/* <!-- Load more comments --> */}
                           {/* <Link
                              to=""
                              role="button"
                              className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                              data-bs-toggle="button"
                              aria-pressed="true"
                              onClick={(e)=>handleShowAllComment(val._id)}
                            >
                              <div className="spinner-dots me-2">
                                <span className="spinner-dot"></span>
                                <span className="spinner-dot"></span>
                                <span className="spinner-dot"></span>
                              </div>
                              Load more comments
                            </Link> */}
                          </div>
    
                          {/* <!-- Comment item END --> */}
                        </ul>
    
                        {/* <!-- Comment item nested END --> */}
                      </li>
                      {/* <!-- Comment item END --> */}
                    </ul>
                    
                 : ""
                }
                {/* <!-- Comment wrap END --> */}
              </div>
              {/* <!-- Card body END --> */}
              {/* <!-- Card footer START --> */}

              {/* <!-- Card footer END --> */}
                
            </div>
          );
        })}
    
        <div class="modal fade" id="modalCreatePrice" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                {/* <!-- Modal header --> */}
                <div class="modal-header">
                    <h5 class="modal-title" id="modalCreateTime">Share Post</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {/* <!-- Form START --> */}
                     
                       
                       <FacebookShareButton url={shareUrl}>
                          {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                          <FacebookIcon size={42}></FacebookIcon>
                      </FacebookShareButton>  
                      <WhatsappShareButton url={shareUrl}>
                          {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                          <WhatsappIcon size={42}></WhatsappIcon>
                      </WhatsappShareButton>  

                
                    {/* <!-- Form END --> */}
                </div>
                {/* <!-- Modal footer --> */}

                {/* <div class="modal-footer">
                    <button type="button" class="btn btn-success-soft save_btn btn-purple " >Add</button>
                </div> */}

            </div>
        </div>
    </div>
          
        </>
      );






   }









 


export default MyProfileChat