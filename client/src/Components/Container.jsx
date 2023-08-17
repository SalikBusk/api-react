import React from 'react';

const Container = ({ children }) => {
  return (
    <section className='max-w-[2520px] xl:px-13 md:px-10 sm:px-2 px-4'>
      {children}
    </section>
  );
};

export default Container;
