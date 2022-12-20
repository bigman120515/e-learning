import React from 'react'

const MyProfilePhotoModel = () => {
  return (
    <>
      <div class="modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            
                <div class="modal-header">
                    <h5 class="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
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
                                <i class="bi bi-images display-3"></i>
                                <p>Drag here or click to upload photo.</p>
                            </div>
                        </div>
                    </div>
              

                </div>
         

             
                <div class="modal-footer ">
            
                    <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-success-soft">Post</button>
                </div>
              
            </div>
        </div>
    </div>

    </>
  )
}

export default MyProfilePhotoModel