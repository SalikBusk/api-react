import React from 'react'
import Container from '../Container'
import Cart from './Cart'
import Logo from './Logo'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className='z-[999]'>
      <Container>
        <nav className='flex flex-row justify-between item-center pt-2'>
          <Logo/>
          <div className='flex flex-row gap-5 items-center'>
            <UserMenu/>
            <Cart/>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
