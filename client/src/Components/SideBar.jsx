// SideBar.js
import React from 'react';
import Heading from './Heading';
import MenuItem from './Navbar/MenuItem';

const SideBar = ({ setSelectedCategory }) => {
  const ViewAll = [
    {
      label: "VIEW ALL",
      onClick: () => {
        setSelectedCategory(null);
      },
    }
  ];
  const sale = [
    {
      label: 'SALE',
      onClick: () => {
        setSelectedCategory('SALE');
      },
    },
  ];

  const cate = [
    {
      label: 'ACCESSORIES',
      onClick: () => {
        setSelectedCategory('ACCESSORIES');
      },
    },
    {
      label: 'BAGS',
      onClick: () => {
        setSelectedCategory('BAGS');
      },
    },
    {
      label: 'ACTIVEWEAR',
      onClick: () => {
        setSelectedCategory('ACTIVEWEAR');
      },
    },
    {
      label: 'JACKETS & COATS',
      onClick: () => {
        setSelectedCategory('JACKETS & COATS');
      },
    },
    {
      label: 'JEANS',
      onClick: () => {
        setSelectedCategory('JEANS');
      },
    },
    {
      label: 'JUMPSUITS',
      onClick: () => {
        setSelectedCategory('JUMPSUITS');
      },
    },
    {
      label: 'PANTS',
      onClick: () => {
        setSelectedCategory('PANTS');
      },
    },
    {
      label: 'SHIRTS',
      onClick: () => {
        setSelectedCategory('SHIRTS');
      },
    },
  ];

  return (
    <section className="bg-white rounded-lg p-2 z-[500]">
      <Heading number={`1`} title={`SIDEBAR`} />
      <ul className='my-[30px]'>
        {ViewAll.map((item, index) => (
          <MenuItem label={item.label} onClick={item.onClick} key={index} />
        ))}
      </ul>
      <hr />

      <p className='text-md my-[20px]'>SALE</p>
      <ul className='mb-[30px]'>
        {sale.map((item, index) => (
          <MenuItem label={item.label} onClick={item.onClick} key={index} />
        ))}
      </ul>
      <hr />

      <p className='text-md my-[20px]'>CATEGORIES</p>
      <ul className='flex flex-col gap-1'>
        {cate.map((item, index) => (
          <MenuItem label={item.label} onClick={item.onClick} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default SideBar;
