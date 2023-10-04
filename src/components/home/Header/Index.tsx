import React from 'react'
import Nav from './Nav'
import Banner from './Banner'

const Header = () => {
  return (
    <header className='bg-[linear-gradient(#00000090,#00000090),url(/images/coxs-bazar.png)]'>
      <Nav />
      <Banner />
    </header>
  )
}

export default Header