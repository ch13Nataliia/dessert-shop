// import React from 'react'
import { Link } from 'react-router-dom';
import Cake1 from '../assets/desserts/1.png';
import Cake2 from '../assets/macaroon_cake.png';
import Cake3 from '../assets/fruit_cake.png';
// import SpecialImg from '../assets/special.png';

import Occasion1 from '../assets/occasion/5.png';
import Occasion2 from '../assets/occasion/4.png';
import Occasion3 from '../assets/occasion/1.png';
import Occasion4 from '../assets/occasion/2.png';
import Occasion5 from '../assets/occasion/3.png';
import Occasion6 from '../assets/backgroundBanner/3.png';
import BgImage from '../assets/HeroBackground.png';
import { TiStarFullOutline } from 'react-icons/ti';
import { TiStarHalfOutline } from 'react-icons/ti';
import Sweets from '../assets/sweets.webp';
import Sweets1 from '../assets/sweets1.webp';
import Sweets2 from '../assets/sweets2.webp';
const CakeMenu = [
  {
    id: 1,
    name: 'Chocolate Cake',
    image: Cake1,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 27,
    link: '/chococake',
    star1: <TiStarFullOutline className="fill-yellow-400" />,
    star2: <TiStarFullOutline className="fill-yellow-400" />,
    star3: <TiStarFullOutline className="fill-yellow-400" />,
    star4: <TiStarFullOutline className="fill-yellow-400" />,
    star5: <TiStarHalfOutline className="fill-yellow-400" />,
  },
  {
    id: 2,
    name: 'Macaroons',
    image: Cake2,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 20,
    link: '/macaroons',
    star1: <TiStarFullOutline className="fill-yellow-400" />,
    star2: <TiStarFullOutline className="fill-yellow-400" />,
    star3: <TiStarFullOutline className="fill-yellow-400" />,
    star4: <TiStarFullOutline className="fill-yellow-400" />,
    star5: <TiStarHalfOutline className="fill-yellow-400" />,
  },
  {
    id: 3,
    name: 'Fruit Cake',
    image: Cake3,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 15,
    link: '/fruitcake',
    star1: <TiStarFullOutline className="fill-yellow-400" />,
    star2: <TiStarFullOutline className="fill-yellow-400" />,
    star3: <TiStarFullOutline className="fill-yellow-400" />,
    star4: <TiStarFullOutline className="fill-yellow-400" />,
  },
];

const OccasionMenu = [
  {
    id: 1,
    name: 'Birthday',
    image: Occasion1,
  },
  {
    id: 2,
    name: 'Thank you',
    image: Occasion2,
  },
  {
    id: 3,
    name: 'new baby',
    image: Occasion3,
  },
  {
    id: 4,
    name: 'wedding',
    image: Occasion4,
  },
  {
    id: 5,
    name: 'for teachers',
    image: Occasion5,
  },
  {
    id: 6,
    name: 'sent with love',
    image: Occasion6,
  },
];

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Home = () => {
  return (
    <div className="">
      {/* hero section */}
      <div
        className="min-h-[500px] sm:min-h-[450px] flex justify-center items-center"
        style={bgImage}
      >
        <div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col justify-center gap-4 pt-12 mt-10 sm:pt-0 text-center">
              <h3 className="uppercase text-3xl text-white">fruity cakes</h3>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl  text-white">
                simply delicious
              </h2>
              <div>
                <button className="rounded-full px-6 py-2 mt-4 bg-white text-pink-500 text-2xl uppercase">
                  {' '}
                  shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-16 space-y-8">
        {' '}
        <h2 className="text-5xl italic text-gray-400 pb-2">Trending Now</h2>
        <div className="text-center  mx-auto space-y-2">
          {/* card section */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CakeMenu.map((cake) => (
                <div key={cake.id} className="shadow-xl rounded-md ">
                  <Link to={cake.link}>
                    <img src={cake.image} alt="cake1" />

                    <div className="">
                      <h3 className="text-2xl text-gray-500 italic ">
                        {cake.name}
                      </h3>
                    </div>

                    <div className="flex justify-between p-2">
                      <p className="font-bold text-xl"> &pound; {cake.price}</p>
                      <div className="flex gap-1 fill-blue-500">
                        {cake.star1} {cake.star2} {cake.star3} {cake.star4}{' '}
                        {cake.star5}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* banner_one section */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="h-full">
            <div>
              <img src={Sweets} className="" />
            </div>
            <div className="text-center m-4">
              <h2 className="uppercase text-2xl italic  text-gray-500">
                Selection boxes
              </h2>
              <p className="p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                molestiae obcaecati fugiat dignissimos? recusandae.
              </p>
            </div>

            <div className="leading-loose tracking-wider grid lg:grid-cols-3 md:grid-cols-1 list-none gap-4">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam tenetur voluptatum facilis autem saepe, placeat enim
                  nihil perferendis, provident molestiae, laboriosam eum ea odit
                  recusandae deserunt ducimus obcaecati fugiat dignissimos?
                </p>
                <div className="text-center m-4">
                  <button className="bg-gray-400 px-6 text-white rounded-md uppercase italic">
                    here
                  </button>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam tenetur voluptatum facilis autem saepe, placeat enim
                  nihil perferendis, provident molestiae, laboriosam eum ea odit
                  recusandae deserunt ducimus obcaecati fugiat dignissimos?
                </p>{' '}
                <div className="text-center m-4">
                  <button className="bg-gray-400 px-6 text-white rounded-md uppercase italic">
                    here
                  </button>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam tenetur voluptatum facilis autem saepe, placeat enim
                  nihil perferendis, provident molestiae, laboriosam eum ea odit
                  recusandae deserunt ducimus obcaecati fugiat dignissimos?
                </p>{' '}
                <div className="text-center m-4">
                  <button className="bg-gray-400 px-6 text-white rounded-md uppercase italic">
                    here
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid lg:grid-cols-1 gap-4 ">
            <div className="">
              <img src={Sweets1} className="w-full" />
              <div className=" grid gap-2">
                <h2 className="uppercase text-2xl mt-4">
                  A slice of happiness
                </h2>
                <p className="text-xs">
                  From large cakes to bite-sized treats, with next day delivery
                  available.
                </p>
                <div>
                  <button className="uppercase text-xl border-b-[2px]">
                    explore cakes
                  </button>
                </div>
              </div>
            </div>

            <div className="">
              <img src={Sweets2} className="w-full" />
              <div className=" grid gap-2">
                <h2 className="uppercase text-2xl mt-4">
                  Bestselling Brownies
                </h2>
                <p className="text-xs">
                  Our handmade brownies are ideal for gifting (or for treating
                  yourself).
                  <div>
                    <button className="uppercase text-xl border-b-[2px]">
                      shop now
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* info home section */}
      <div className=" space-y-8">
        <h2 className="text-5xl text-center text-gray-400 italic">
          What is the occasion?
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {OccasionMenu.map((occasion) => (
            <div
              key={occasion.id}
              className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer text-center"
            >
              <div className="relative">
                <img src={occasion.image} alt="" className="w-full" />
              </div>
              <div className="px-6 py-4 mb-auto uppercase text-gray-400  text-2xl">
                {occasion.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
