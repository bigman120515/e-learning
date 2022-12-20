import React from 'react'
import UserNavbar from '../../userInterface/UserNavbar'
import CardSessionHero from './component/CardSessionHero'
import CardGroup from './component/CardGroup'

const GruopSession = () => {
  return (
    <>

<UserNavbar />
<CardSessionHero />
<main>
    <div className='container'>
    <CardGroup />
    </div>

</main>
    </>
  )
}

export default GruopSession