import React from 'react';
import Container from '../Container';
import Cart from '../Cart/Cart';
import Logo from './Logo';
import Navigation from './Navigation';

const Navbar = () => {
  return (
    <div className='z-[999] fixed w-full'>
      <Container>
        <nav className='grid grid-cols-3 items-center pt-2'>
          <Navigation />
          <div className='flex justify-center'>
            <Logo />
          </div>
          <div className='flex justify-end'>
            <Cart />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
