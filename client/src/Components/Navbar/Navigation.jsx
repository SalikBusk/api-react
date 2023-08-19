import React from 'react';
import { useLocation } from 'react-router-dom'; // Import the useLocation hook
import MenuItem from './MenuItem';

const Navigation = () => {
    const location = useLocation();

    const handleShop = () => {
    window.location.href = "/shop";
  };
    return (
        <nav>
            <ul className='flex flex-row items-center gap-2'>
                <MenuItem label="Shop" onClick={handleShop} /> 
                <MenuItem label="Men" onClick={() => location.pathname = "/men"} /> 
                <MenuItem label="Women" onClick={() => location.pathname = "/women"} /> 
            </ul>
        </nav>
    );
};

export default Navigation;
