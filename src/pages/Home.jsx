// import React from 'react'
import Cake1 from '../assets/desserts/1.png';
import Cake2 from '../assets/macaroon_cake.png';
import Cake3 from '../assets/fruit_cake.png';
import BannerOne from '../assets/backgroundBanner/3.png';

const bgImage = {
  backgroundImage: `url(${BannerOne})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const CakeMenu = [
  {
    id: 1,
    name: 'Chocolate Cake',
    image: Cake1,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 27,
  },
  {
    id: 2,
    name: 'Macaroons',
    image: Cake2,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 20,
  },
  {
    id: 3,
    name: 'Fruit Cake',
    image: Cake3,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vitae ab quos ea tempora eaque velit quisquam iusto debitis inventore adipisci',
    price: 15,
  },
];
const Home = () => {
  return (
    <div className="container my-16 space-y-4">
      {' '}
      <h2 className="text-3xl font-bold text-gray-400 border-b-[2px] pb-2">
        Trending Now
      </h2>
      <div className="text-center  mx-auto space-y-2">
        {/* card section */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CakeMenu.map((cake) => (
              <div key={cake.id} className="shadow-lg rounded-md min-h-[300px]">
                <img src={cake.image} alt="cake1" />

                <div className="">
                  <h3 className="text-2xl text-gray-500 font-bold uppercase">
                    {cake.name}
                  </h3>
                </div>
                <p className="text-lg text-gray-500/70 text-start p-4">
                  {cake.description}
                </p>
                <p className="font-bold text-2xl">{cake.price} &pound;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* banner_one section */}
      <div style={bgImage}>
        <div className="container min-h-[550px] ">
          <div className=" text-white max-w-[400px]  space-y-6 mt-8 font-bold">
            <h3 className="text-3xl pt-8">
              A Cakes bring happiness
            </h3>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat, omnis. Voluptatibus eveniet tempore molestias animi
              magnam eaque ab sequi ratione, temporibus, consequatur ipsa
              laborum odit voluptatum delectus eligendi id! Voluptates. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam
              ullam, perferendis, vero incidunt porro, dicta assumenda atque
              animi rem voluptas qui tempora deserunt sequi consequuntur velit
              tenetur modi eligendi.
            </p>
            <button className="bg-pink-400/70 text-white text-3xl p-4 rounded-md hover:bg-pink-500 hover:scale-105 duration-300 mb-8">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
