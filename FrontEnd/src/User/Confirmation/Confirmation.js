import React from 'react'
import UserHeader from '../UserHeader'
import ConfirmCard from './ConfirmCard'
import Confirm_List from './ConfirmList'

function Confirmation() {
  return (
    <>
        <UserHeader/>
        <section>
        <div class="confirmed_section">
            <div class="confirmation_section">
                <div class="confirmation_img">
                    <img src="assets/images/confirmimg.png"/>
                    <h3 class="text-center">Confirmed</h3>
                    <p class="text-center">You are Scheduled with Jhon Menon</p>
                    <h6 class="text-center border_bottom"><i class="fas fa-plus-circle plus-circle"></i> <span>Add to your calender</span> <i class="fa fa-chevron-down chevron-down"></i></h6>


                </div>
                <div class="intro_section">
                    {
                        Confirm_List.map((val,ind)=>{
                            return (
                                <ConfirmCard
                                    time={val.time}
                                    timeZone={val.timeZone}
                                    field={val.field}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Confirmation