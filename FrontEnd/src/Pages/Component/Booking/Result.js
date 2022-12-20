import React from 'react'
import ResultCard from './cards/ResultCard'
import Filter from './Common/Filter'
import Result_data from './Lists/ResultList'

function Result() {
  return (
    <>
        <section>
       <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
            <div className="selectbox_section">
            <Filter/>
            <div className="reslultbg">
                <div className="comman_heading mt-5 mb-2">
                    <h5>5 Results</h5>
                </div>
                {
                    Result_data.map((val,ind)=>{
                        return (
                            <ResultCard 
                                key={ind}
                                img={val.img}
                                name={val.name}
                                specelize={val.specelize}
                                place={val.place}
                                field={val.field}
                                curr={val.curr}
                                rupay ={val.rupay}
                            />
                        );
                    })
                }
                {/* <ResultCard/> */}
            </div>


        </div>
            </div>

        </div>


       </div>

    </section>
    </>
  )
}

export default Result