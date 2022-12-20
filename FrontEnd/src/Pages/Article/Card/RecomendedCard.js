import React from 'react'
import recomendedList from '../List/RecomendedList'

const RecomendedCard = () => {
  return (
    <>
     <div className='container'>
                <div className='row'>
       {
        recomendedList.map((val,key)=>{
            return(
              
                    <div className='col-lg-4 col-md-6'>
                    <div class=" card_box mt-3">
                                <a href="article-lists.html" target="_blank">
                                    <div>
                                        <img src={val.img} class="d-flex m-auto mb-3"/>
                                        <h5 class="heading5 ancor_color text-center mb-0">{val.skill}</h5>
                                    </div>
                                    <span class="link">
                                    </span>
                                </a>
                            </div> 

                    </div>

            )
        })
       }
       
       </div>

</div>
    </>
  )
}

export default RecomendedCard