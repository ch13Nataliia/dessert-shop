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
    name: 'Cakes',
    link: '/cakes',
  },
  {
    id: 4,
    name: 'Macaroons',
    link: '/macaroons',
  },
];
const Navbar = () => {
  return (
    <div className='flex justify-between'>
    <div>
      <h1>N.J</h1>
    </div>
    <div>
       <nav>
        {Menu.map((item) => (
          <li key={item.id}>
            <Link to={item.link} className="mb-5 inline-block">
              {item.name}
            </Link>
          </li>
        ))}
      </nav>
    </div>
     
    </div>
  );
};

export default Navbar;
