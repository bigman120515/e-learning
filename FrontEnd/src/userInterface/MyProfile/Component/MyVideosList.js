import React from 'react'
import videodetailslist from './MyVideosListDetails'

const MyVideosList = () => {
  return (
    <>
   <div className="card mt-4 mb-4">
                      
                        <div className="card-header border-0 pb-0">
                            <h5 className="card-title">Videos</h5>                           
                        </div>
                     
                        <div className="card-body">                        
                            <div className="row g-3">                           
                                <div className="col-sm-6 col-md-4">
                                    <div className="border border-2 py-5 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative">
                                        <a className="stretched-link" href="#!">
                                            <i className="fa-solid fa-camera-retro fs-1"></i>
                                            <h6 className="mt-2">Add Video</h6>
                                        </a>
                                    </div>
                                </div>

                                {
                                    
                                    videodetailslist.map((val,key)=>{
                                        return(
                                    <>
   <div className="col-sm-6 col-md-4" key={key}>
                       
                       <div className="card p-0 shadow-none border-0 position-relative">
                   
                           <div className="position-relative">
                               <img className="rounded" src={val.img} alt=""/>
                      
                               <div className="position-absolute top-0 end-0 p-3">
                                   <a className="icon-md bg-danger text-white rounded-circle" data-glightbox href="assets/images/videos/video-call.mp4"> <i className="bi bi-play-fill fs-5"> </i> </a>
                               </div>
                  
                               <div className="position-absolute bottom-0 start-0 p-3 d-flex w-100">
                                   <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">{val.runtime}</span>
                               </div>
                           </div>
                     
                           <div className="card-body px-0 pb-0 pt-2">
                               <ul className="nav nav-stack small">
                                   <li className="nav-item">
                                       <a className="nav-link" href="#!"> <i className="bi bi-heart-fill text-danger pe-1"></i>{val.likes}</a>
                                   </li>
                                   <li className="nav-item">
                                       <a className="nav-link" href="#!"> <i className="bi bi-chat-left-text-fill pe-1"></i>{val.comments}</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
               
                   </div>
                                    </>

                                        )
                                    })
                                    

                                }                     

                             

                              


                            </div>
                          
                        </div>
                    
                        <div className="card-footer border-0 pt-0">
                        </div>
                 
                    </div>

    </>
  )
}

export default MyVideosList