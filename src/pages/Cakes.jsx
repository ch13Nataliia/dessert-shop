// import React from 'react'
import Cake1 from '../assets/occasion/1.png';

const CakeMenu = [
  {
    id: 1,
    name: 'Strawberry Cake',
    image: Cake1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum, corrupti minima tempore aliquid ipsa iure? Quidem corporis sunt neque eveniet libero. Voluptate!',
  },
  {
    id: 2,
    name: 'Chocolate Cake',
    image: Cake1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum, corrupti minima tempore aliquid ipsa iure? Quidem corporis sunt neque eveniet libero. Voluptate!',
  },
  {
    id: 3,
    name: 'Orange Cake',
    image: Cake1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum, corrupti minima tempore aliquid ipsa iure? Quidem corporis sunt neque eveniet libero. Voluptate!',
  },
  {
    id: 4,
    name: 'Carrot Cake',
    image: Cake1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolor illum enim, facilis fuga dolores in nostrum, corrupti minima tempore aliquid ipsa iure? Quidem corporis sunt neque eveniet libero. Voluptate!',
  },
];
const Cakes = () => {
  return (
    <div className="container  bg-pink-100/50">
      <div className="text-center pt-8 space-y-6">
        <h1 className="text-5xl text-gray-500 font-bold">
          Make a right choice
        </h1>
        <p className="text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          corporis, aliquid praesentium rerum, velit qui in enim assumenda
          perferendis magni, id sed harum consequuntur vero consectetur deleniti
          delectus nihil suscipit?
        </p>
      </div>
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
  );
};

export default Cakes;
