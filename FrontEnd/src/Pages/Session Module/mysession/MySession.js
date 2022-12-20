import React from 'react'
import UserNavbar from '../../userInterface/UserNavbar'
import MySessionRight from './component/MySessionRight'
import LearningSession from '../Session/Component/LearningSession'
const MySession = () => {
  return (
    <>
    <UserNavbar />
    <main>
   <div className='container'>
    <div className='row g-4'>
        <div className='col-lg-3'>
        <MySessionRight />
        </div>
  <div className='col-lg-9 col-md-8'>

<LearningSession />
  </div>
    </div>

   </div>
   </main>
    </>
  )
}

export default MySession