import React from 'react'

const MyProfileVedioModel = () => {
  return (
    <>
      <div class="modal fade" id="feedActionVideo" tabindex="-1" aria-labelledby="feedActionVideoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
           
                <div class="modal-header">
                    <h5 class="modal-title" id="feedActionVideoLabel">Add post video</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
               
                <div class="modal-body">
                  
                    <div class="d-flex mb-3">
                 
                        <div class="avatar avatar-xs me-2">
                            <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                        </div>
                    
                        <form class="w-100">
                            <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
                        </form>
                    </div>

              
                    <div>
                        <label class="form-label">Upload attachment</label>
                        <div class="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                            <div class="dz-message">
                                <i class="bi bi-camera-reels display-3"></i>
                                <p>Drag here or click to upload video.</p>
                            </div>
                        </div>
                    </div>
                 

                </div>
             

                <div class="modal-footer">
               
                    <button type="button" class="btn btn-danger-soft me-2"><i class="bi bi-camera-video-fill pe-1"></i>
                        Live video</button>
                    <button type="button" class="btn btn-success-soft">Post</button>
                </div>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default MyProfileVedioModel