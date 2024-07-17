// import React from 'react'
import { Link } from 'react-router-dom';
const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Shop',
    link: '/cakes',
  },
];

const Navbar = () => {
  return (
    <div className="top-0 fixed w-full">
      <div className="h-10 bg-pink-400 text-center pt-2">
        <h2 className="uppercase text-white">
          free delivery on orders over 40 &pound;
        </h2>
      </div>
      <div></div>
      <div className="bg-white  shadow-sm  flex justify-between  text-pink-500 px-6 py-6 text-xl">
        <div>
          <h1>Dessert  &amp; Joy</h1>
        </div>

        <ul className="flex space-x-10 ">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="  hover:text-pink-500/50 ">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
