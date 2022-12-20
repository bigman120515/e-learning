import React from 'react'
import SuggestedList from './SuggestedList'

const SuggestedCard = () => {
  return (
    <>
        <h2 className="heading2 mb-5 mt-5">Suggested articles</h2>
        {SuggestedList.map((val ,key)=>{
            return(
                <div className='mt-5'>
                <a href="article-lists.html" className="ancor_color">
                    <h4 className="heading4 mb-3"> <span className=''>{val. heading}</span></h4>
                </a>
                <p className='artice_para'>
                {val. parahaed}
                </p>
            </div>
            )
        })} 
    </>
  )
}

export default SuggestedCard