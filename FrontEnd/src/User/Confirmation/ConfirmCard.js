import React from 'react'

function ConfirmCard(props) {
    return (
        <>
            <div class="first_section bottom_border_section">
                <h3 class="intro_text">Intro call</h3>
                <p><i class="far fa-clock"></i> <span>{props.time}</span></p>
                <p> <i class="fa fa-globe"></i> <span>{props.timeZone}</span> </p>
                <p> <i class="fa fa-video"></i> <span>{props.field}</span> </p>

            </div>
        </>
    )
}

export default ConfirmCard