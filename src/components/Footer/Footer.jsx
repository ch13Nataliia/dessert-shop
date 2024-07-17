// import React from 'react'
import { FaMapLocation } from 'react-icons/fa6';
import { FaPhoneFlip } from 'react-icons/fa6';
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa';
import PlayStore from '../../assets/play_store.png';
import AppStore from '../../assets/app_store.png';
import CreditCards from '../../assets/credit-cards.webp';
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-400">
      <div className="container text-white">
        <div className="grid frid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="mt-4">
            <h3 className="font-bold text-2xl">Dessert  &amp; Joy</h3>
            <p className="text-sm max-w-[300px] mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nemo maiores, magni labore ipsam recusandae. Rerum
              cupiditate unde accusamus quasi animi excepturi aspernatur
              consequatur fuga incidunt, ab dignissimos repellendus
              exercitationem?
            </p>
            <div className="space-y-4 mt-4 text-xl">
              <p className="flex gap-4">
                <FaMapLocation />
                <span>England, Stafford ST19</span>
              </p>
              <p className="flex gap-4">
                <FaPhoneFlip />
                <span>+1234 567890</span>
              </p>
            </div>
          </div>
          {/* footer links */}
          <div className="space-y-4 mt-6">
            <h3 className="font-bold text-xl">Quick links</h3>
            <div className="grid grid-cols-2  gap-3">
              {/* first links */}
              <div>
                <ul className="space-y-2 font-bold ">
                  <li className="hover:text-pink-500  hover:scale-105 duration-200 cursor-pointer">
                    Home
                  </li>
                  <li className="hover:text-pink-500 hover:scale-105 duration-200 cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-pink-500 hover:scale-105 duration-200 cursor-pointer">
                    Cakes
                  </li>

                </ul>
              </div>
              {/* second links */}
              <div>
                <ul className="space-y-2 font-bold ">
                  <li className="hover:text-pink-500 hover:scale-105 duration-300 cursor-pointer">
                    Contact Us
                  </li>
                  <li className="hover:text-pink-500 hover:scale-105 duration-300 cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-pink-500 hover:scale-105 duration-300 cursor-pointer">
                    Privacy Policy
                  </li>

                </ul>
              </div>
            </div>
            {/* social links */}
          </div>
          <div className="space-y-4">
            <h3 className="mt-6 font-bold text-xl">Follow Us</h3>
            <div className="flex gap-4 ">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 hover:text-pink-500 cursor-pointer" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 hover:text-pink-500 cursor-pointer" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 hover:text-pink-500 cursor-pointer" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 hover:text-pink-500 cursor-pointer" />
            </div>
            {/* follow links */}
            <div className="flex max-w-[150px]">
              <img src={PlayStore} alt="play-store" />
              <img src={AppStore} alt="play-store" />
            </div>
            {/* payment methods */}
            <div className="">
              <img src={CreditCards} alt="credit-cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
