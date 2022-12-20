import React from 'react'
import { useState, useEffect } from 'react';
import { getAllPost } from '../../../Services/UserAuth';
import moment from 'moment';



export const LeatestNews = (props) => {


  // const userAllData = JSON.parse(localStorage.getItem("userData"));
  // const linkedinId = userAllData.data.linkedinId
  // const [allUserPosts, setAllUserPost] = useState([]);
  //  const[AllLatestNews,setAllLatestNews]=useState([])
  // setAllLatestNews(props.leatestNews)
  console.log(props.leatestNews)
  let AllLatestNews = []
  AllLatestNews=props.leatestNews
  let setTrue=props.LeatestLoaded


  // useEffect(() => {
  //   try {

  //     if (linkedinId !== null) {
  //       getAllPost(linkedinId).then((res) => {

  //         if (res !== undefined) {
  //           if (res.success) {
  //             console.log(res.data, "response-----------")
  //             //setAllUserPost(res.data.posts);
  //             // setAllLatestNews(res.data.latestNews) 
  //           }
  //         }
  //       });

  //     }
  //   } catch (error) { }
  // }, []);


  return (
    <>
  {setTrue?
  <div className="card">
  {/* <!-- Card header START --> */
            /* <!-- Card header END --> */
            /* <!-- Card body START --> */}
  <div className="card-body">
    <h5 className="card-title mb-4 mt-0">Latest News</h5>

    {

      AllLatestNews.map((val,ind)=>{
        return (
          <div className="mb-3" >
            <h6 className="mb-0">
              <a >
                {val.title}
              </a>
            </h6>
            <small>{moment.utc(val.createdAt).local().startOf('seconds').fromNow()}</small>
          </div>
        )
      })

    }

  </div>
</div>:''

}
      


    </>
  )

}
