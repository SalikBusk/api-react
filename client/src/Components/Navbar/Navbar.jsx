import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../Container';
import Cart from '../Cart/Cart';
import Logo from './Logo';
import Navigation from './Navigation';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      {isHomePage ? null : <hr/>}
    </div>
  );
};

export default Navbar;
