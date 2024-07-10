// import React from 'react'

import Cake1 from '../assets/CakeImg/strawberry.webp';
import Cake2 from '../assets/CakeImg/chocolate.webp';
import Cake3 from '../assets/CakeImg/raspberry.webp';
import Cake4 from '../assets/CakeImg/blueberry.webp';

const CakeMenu = [
  {
    id: 1,
    name: 'Strawberry Cake',
    image: Cake1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum.',
  },
  {
    id: 2,
    name: 'Chocolate Cake',
    image: Cake2,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum.',
  },
  {
    id: 3,
    name: 'Orange Cake',
    image: Cake3,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum.',
  },
  {
    id: 4,
    name: 'Carrot Cake',
    image: Cake4,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum.',
  },
];
const Cakes = () => {
  return (
    <div className="space-y-6 mt-4">
      <div className="container  bg-pink-100/50">
        <div className="text-center pt-8 space-y-6">
          <h1 className="text-5xl text-gray-500 font-bold">
            Make a right choice
          </h1>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corporis, aliquid praesentium rerum, velit qui in enim assumenda
            perferendis magni, id sed harum consequuntur vero consectetur
            deleniti delectus nihil suscipit?
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6 pb-6">
          {CakeMenu.map((cake) => (
            <div key={cake.id} className="w-70 shadow-md bg-pink-400/50   ">
              <img src={cake.image} alt="cake-one" className="h-75" />
              <div className="p-4 space-y-4">
                <h1 className="text-3xl font-bold text-white text-center">
                  {cake.name}
                </h1>
                <p className="text-xl font bold text-white text-center">
                  {cake.description}
                </p>
                <div className="text-center">
                  {' '}
                  <button
                    className="bg-pink-600 text-white text-lg p-2 font-bold rounded-md"
                    onClick={() => {}}
                  >
                    buy now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* banner section */}
      <div className="bg-pink-400/70 min-h-[250px]">
        <div className="grid md:grid-cols-3 sm:grid-cols-3 gap-2 items-center justify-between  py-24">
          <div className="text-center items-center ">
            <h3 className="uppercase text-white font-bold text-xl">
              Free delivery on weekends
            </h3>
            <p className="text-white text-lg">When you spent over 40 &pound;</p>
          </div>

          <div className="text-center">
            <h3 className="uppercase text-white font-bold text-xl">
              hand made in England
            </h3>
            <p className="text-white text-lg">Baking since 2020</p>
          </div>

          <div className="text-center">
            <h3 className="uppercase text-white font-bold text-xl">
              natural ingredients
            </h3>
            <p className="text-white text-lg">
              Only ever flavoured and coloured with fruits, vegetable and
              spices.
            </p>
          </div>
        </div>
      </div>
      {/* text section */}
      <div className='container '>Hello</div>
    </div>
  );
};

export default Cakes;
