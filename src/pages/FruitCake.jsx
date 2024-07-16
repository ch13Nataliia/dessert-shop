// import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { FaMapLocation } from 'react-icons/fa6';
import { GiCakeSlice } from 'react-icons/gi';
import { MdCardGiftcard } from 'react-icons/md';

import Image1 from '../assets/fruit/fruit_cake.png';

const FruitCake = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  ">
        {/* left section */}
        <div className="space-y-4 mt-4 px-4">
          <img src={Image1} alt="" />
        </div>
        {/* right section */}
        <div className="space-y-4 mt-4 px-4 ">
          {/* title section */}
          <div className="space-y-4">
            <h1 className="text-4xl text-gray-500 ">Fruit Cake</h1>
            <div className="flex justify-between uppercase text-red-500">
              <p>100% vegetarian</p>
              <p>all natural</p>
              <p>multiple size available</p>
            </div>
          </div>
          {/* choice section */}
          <div className="space-y-4 mt-4 ">
            <input
              type="text"
              placeholder="Select size"
              className="border border-gray-[2px] w-full p-2 rounded-md cursor-pointer"
            />

            <input
              type="text"
              placeholder="Select Delivery Date"
              className="border border-gray-[2px] w-full p-2 rounded-md cursor-pointer"
            />
            <input
              type="text"
              placeholder="Select tin"
              className="border border-gray-[2px] w-full p-2 rounded-md cursor-pointer"
            />
            <div className="text-center">
              <button className="bg-gray-400 text-white uppercase px-4 py-2 rounded-2xl w-[70%]">
                select
              </button>
            </div>
          </div>
          {/* description section */}
          <div className="space-y-4 mt-4">
            <h2 className="uppercase text-2xl text-gray-500">description</h2>
            <p>
              Moist and indulgent, this cake has the perfect balance of rich,
              sweet and salty. Sublime chocolate sponge, layered with a sweet
              salted caramel and chocolate fudge buttercream, it is finished
              with caramel fudge pieces and chocolate chips for a real treat for
              any sweet tooth!
            </p>
            <p>
              Our postable cakes also have the option to arrive in a beautiful
              bespoke embossed tin, making this a perfect 2-in-1 gift.
            </p>
            <p>
              Please see our cake care page to find out how to look after your
              goodies and their shelf life.
            </p>
            <p>
              <span className="text-red-500"> * </span>
              Please note that all our products are handmade and colour and
              decoration may differ and are subject to supply. The image
              provided is a representation of the product you will receive.
            </p>
          </div>
          {/* icons section */}
          <div className="space-y-4 ">
            <div className="flex uppercase ">
              <div className="text-red-500 text-2xl">
                <FaMapLocation />
              </div>
              <h4 className="px-4">handmade in uk</h4>
            </div>
            <div className="flex uppercase ">
              <div className="text-red-500 text-2xl">
                <TbTruckDelivery />
              </div>
              <h4 className="px-4">order by 4pm for next day delivery!</h4>
            </div>
            <div className="flex uppercase ">
              <div className="text-red-500 text-2xl">
                <GiCakeSlice />
              </div>
              <h4 className="px-4">100% happiness guaranteed</h4>
            </div>
            <div className="flex uppercase ">
              <div className="text-red-500 text-2xl">
                <GiCakeSlice />
              </div>
              <h4 className="px-4">100% happiness guaranteed</h4>
            </div>
            <div className="flex uppercase ">
              <div className="text-red-500 text-2xl">
                <MdCardGiftcard />
              </div>
              <h4 className="px-4">add gift message at the cart</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitCake;
