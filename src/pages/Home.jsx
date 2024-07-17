// import React from 'react'
import { Link } from 'react-router-dom';
import Cake1 from '../assets/desserts/1.png';
import Cake2 from '../assets/macaroon_cake.png';
import Cake3 from '../assets/fruit_cake.png';
import SpecialImg from '../assets/special.png';
import Occasion1 from '../assets/occasion/5.png';
import Occasion2 from '../assets/occasion/4.png';
import Occasion3 from '../assets/occasion/1.png';
import Occasion4 from '../assets/occasion/2.png';
import Occasion5 from '../assets/occasion/3.png';
import Occasion6 from '../assets/backgroundBanner/3.png';
import BgImage from '../assets/HeroBackground.png';

const CakeMenu = [
  {
    id: 1,
    name: 'Chocolate Cake',
    image: Cake1,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 27,
    link: '/chococake',
  },
  {
    id: 2,
    name: 'Macaroons',
    image: Cake2,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 20,
    link: '/macaroons',
  },
  {
    id: 3,
    name: 'Fruit Cake',
    image: Cake3,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 15,
    link: '/fruitcake',
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
      <div style={bgImage}>
        <div className="min-h-[650px] "></div>
      </div>
      <div className="container my-16 space-y-8">
        {' '}
        <h2 className="text-3xl font-bold text-gray-400 border-b-[2px] pb-2">
          Trending Now
        </h2>
        <div className="text-center  mx-auto space-y-2">
          {/* card section */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CakeMenu.map((cake) => (
                <div
                  key={cake.id}
                  className="shadow-lg rounded-md min-h-[300px]"
                >
                  <img src={cake.image} alt="cake1" />

                  <div className="">
                    <h3 className="text-2xl text-gray-500 font-bold uppercase">
                      {cake.name}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-500/70 text-start p-4">
                    {cake.description}
                  </p>
                  <div className="flex justify-between p-4">
                    <Link to={cake.link}>
                      <button className="bg-gray-400 p-3 text-white rounded-md ml-5 font-bold text-xl">
                        buy now
                      </button>
                    </Link>

                    <p className="font-bold text-2xl">{cake.price} &pound;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* banner_one section */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
          <div>
            <img src={SpecialImg} className="h-full" />
          </div>
          <div className="mx-auto text-center justify-center  font-bold p-16 space-y-4 max-h-[500px]">
            <h2 className="text-5xl text-gray-400 ">Special offer</h2>
            <p className="text-lg text-gray-400  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              odit! Eligendi repellendus unde, maxime, porro possimus nisi ullam
              libero doloribus assumenda consectetur velit necessitatibus!
            </p>
            <button className="bg-pink-500/50 p-4 text-2xl uppercase rounded-md mt-8 text-white">
              buy now
            </button>
          </div>
        </div>
        {/* info home section */}
        <div className=" space-y-8">
          <h2 className="text-5xl text-center text-gray-400 font-bold">
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
                <div className="px-6 py-4 mb-auto uppercase text-gray-400 font-bold text-2xl">
                  {occasion.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
