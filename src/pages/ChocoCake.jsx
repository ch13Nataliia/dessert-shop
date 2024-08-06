// import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { FaMapLocation } from 'react-icons/fa6';
import { GiCakeSlice } from 'react-icons/gi';
import { MdCardGiftcard } from 'react-icons/md';
import Image1 from '../assets/chocolate/chocoImg1.jpg';
import BgImage from '../assets/banner.jpg';
import ImageOne from '../assets/explore/img1.webp';
import ImageTwo from '../assets/explore/img2.webp';
import ImageThree from '../assets/explore/img4.webp';
import ImageFour from '../assets/explore/img6.webp';
import ImageFive from '../assets/explore/img3.jfif';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ExploreCollection = [
  { id: 1, image: ImageOne, name: 'retirement gifts' },
  { id: 2, image: ImageTwo, name: 'occasion gifts' },
  { id: 3, image: ImageThree, name: 'treats delivery' },
  { id: 4, image: ImageFour, name: 'new parrent gifts' },
  { id: 5, image: ImageFive, name: 'cookie delivery' },
];

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
const ChocoCake = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
       <div
        className="min-h-[500px] sm:min-h-[450px] flex justify-end items-center text-right"
        style={bgImage}
      >
        <div>
          <div className="grid lg:grid-cols-1 text-right pr-6">
            <div className="flex flex-col  gap-4 pt-12 mt-10 sm:pt-0 text-right">
              <h3 className="uppercase text-3xl text-pink-500">Chocolate cakes</h3>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl  text-pink-500">
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

      <div className="container">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2  ">
          {/* left section */}
          <div className="space-y-8 mt-4 px-4">
            <img src={Image1} alt="" />
          </div>
          {/* right section */}
          <div className="space-y-8 mt-4 px-4">
            {/* title section */}
            <div className="space-y-4">
              <h1 className="text-4xl text-gray-500 ">Chocolate Cake</h1>
              <div className="flex justify-between uppercase text-red-500">
                <p>100% vegetarian</p>
                <p>all natural</p>
                <p>multiple size available</p>
              </div>
            </div>
            {/* form section */}
            <form className="space-y-4 mx-auto ">
              <select className="py-2.5 px-2 w-full text-md text-gray-500 rounded-md bg-gray-100 border-[2px] border-gray-200 cursor-pointer">
                <option selected>Choose size</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
              <div className="flex justify-between">
                {' '}
                <input
                  type="date"
                  className="py-2.5 px-2 w-[45%] text-md text-gray-500 rounded-md bg-gray-100 border-[2px] border-gray-200 cursor-pointer"
                />
                <input
                  type="time"
                  value="00:00"
                  className="py-2.5 px-2.5 w-[45%] text-md text-gray-500 rounded-md bg-gray-100 border-[2px] border-gray-200 cursor-pointer"
                />
              </div>

              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Add a message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Add a hand piped message for &pound;5.00..."
              ></textarea>

              <div className="text-center">
                <button
                  onClick={() => {}}
                  className="bg-gray-400 text-white uppercase px-4 py-2 rounded-2xl w-[70%] hover:bg-gray-200 hover:text-gray-500 duration-200 hover:scale-105 m-6"
                >
                  select
                </button>
              </div>
            </form>

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
                  <MdCardGiftcard />
                </div>
                <h4 className="px-4">add gift message at the cart</h4>
              </div>
            </div>
            {/* description section */}
            <div className="space-y-4 mt-4">
              <h2 className="uppercase text-2xl text-gray-500">description</h2>
              <p>
                Moist and indulgent, this cake has the perfect balance of rich,
                sweet and salty. Sublime chocolate sponge, layered with a sweet
                salted caramel and chocolate fudge buttercream, it is finished
                with caramel fudge pieces and chocolate chips for a real treat
                for any sweet tooth!
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
          </div>
        </div>
        {/* slide section */}
      </div>
      <div className="bg-gray-100 my-4">
        <div>
          <h2 className="text-5xl italic py-4 px-4 text-gray-500">
            Explore Collections
          </h2>
        </div>
        <Carousel responsive={responsive}>
          {ExploreCollection.map((photo) => (
            <div key={photo.id} className="m-2">
              <img src={photo.image} alt="" />
              <h3 className="text-2xl text-gray-500 uppercase hover:scale-105 duration-300 translate-x-3">
                {photo.name}
              </h3>
            </div>
          ))}
        </Carousel>
        ;
      </div>
      {/* slide section */}
    </div>
  );
};

export default ChocoCake;
