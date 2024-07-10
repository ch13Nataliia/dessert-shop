// import React from 'react'
import { Link } from 'react-router-dom';
import BgImage from '../../assets/HeroBackground.png';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

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

const Header = () => {
  return (
    <div style={bgImage} className="">
      <div className="container">
        <div className="min-h-[750px] max">
          <div className="flex justify-end ">
            <ul className="hidden sm:flex space-x-10 mt-8">
              {Menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className=" font-bold text-white text-xl hover:text-pink-500 "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* text section */}
          <div className=" text-white mx-auto space-y-8 text-center ">
            <h1 className="text-5xl  font-bold mt-10 ">Dessert & Joy</h1>
            <p className="text-xl loose-tight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              tempore recusandae voluptates sapiente velit nulla iusto quis
              labore illo? Explicabo aliquam ratione ex? Possimus officiis eum
              atque cum placeat? Assumenda. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Maxime dolore eos atque facilis
              quidem reprehenderit nemo corporis natus repudiandae harum
              accusantium architecto perspiciatis incidunt labore eum,
              cupiditate at quod magni!
            </p>
            {/* button section */}
            <div className="bg-pink-400/70 hover:bg-pink-500 rounded-md mt-10 shadow-xl cursor-pointer ">
              <button className="text-white font-bold text-3xl object-fill">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
