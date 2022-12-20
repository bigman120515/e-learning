import React, {lazy, Suspense } from 'react'
import UserNavbar from '../userInterface/UserNavbar'
const BookNav=lazy(()=>import('./Component/Booking/BookNav'))
const Result=lazy(()=>import('./Component/Booking/Result'))


function Booking() {
  return (
    <>
   <div className='bg_theme'>
   <UserNavbar />
      
      <Suspense fallback={<div>Loading...</div>}>
      <Result/>
      </Suspense>
   </div>
    </>
  )
}

export default Booking