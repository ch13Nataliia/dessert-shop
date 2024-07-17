// import React from 'react'
import AboutImg from '../assets/about1.png';
import BgImage from '../assets/banner.jpg';
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const About = () => {
  return (
    <div>
      <div style={bgImage}>
        <div className="min-h-[650px] "></div>
      </div>
      <div className="container mt-8 mb-8">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 space-y-4">
          <div className="space-y-4 tracking-wide leading-loose">
            <h2 className="text-3xl font-bold text-center  text-gray-500 tracking-wide ">
              About Us
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              dicta ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
              laudantium molestiae debitis repellendus incidunt neque illum
              placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Vero dicta ullam aut! Porro
              voluptatum aspernatur laboriosam nam, illo laudantium molestiae
              debitis repellendus incidunt neque illum placeat nostrum qui
              possimus rerum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              dicta ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
              laudantium molestiae debitis repellendus incidunt neque illum
              placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Vero dicta ullam aut! Porro
              voluptatum aspernatur laboriosam nam, illo laudantium molestiae
              debitis repellendus incidunt neque illum placeat nostrum qui
              possimus rerum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              dicta ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
              laudantium molestiae debitis repellendus incidunt neque illum
              placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Vero dicta ullam aut! Porro
              voluptatum aspernatur laboriosam nam, illo laudantium molestiae
              debitis repellendus incidunt neque illum placeat nostrum qui
              possimus rerum.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              dicta ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
              laudantium molestiae debitis repellendus incidunt neque illum
              placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Vero dicta ullam aut! Porro
              voluptatum aspernatur laboriosam nam, illo laudantium molestiae
              debitis repellendus incidunt neque illum placeat nostrum qui
              possimus rerum.
            </p>
          </div>
          <div>
            <img src={AboutImg} className="rounded-md" />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 space-y-4">
          <div className="mt-10">
            <form className="grid space-y-12 ">
              <span className="text-gray-400">Want more info?</span>
              <h2 className="uppercase text-2xl text-gray-600 font bold text-center">
                sign up to our newsletter
              </h2>

              <input
                type="text"
                placeholder="First Name"
                className=" text-xl border-b-[2px] p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className=" text-xl border-b-[2px] p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className=" text-xl border-b-[2px] p-2 rounded-md"
              />
              <div className=" flex items-center justify-center text-yellow-500">
                <input type="checkbox" value=""  />
                <label form="checked-checkbox" className='px-2'>
                  I agree to terms and conditions
                </label>
              </div>
            </form>
            <div className="text-center mt-8">
              <button className="bg-gray-400/70 text-xl text-white p-2 uppercase align-center max-w-[120px] rounded-md hover:bg-gray-500 hover:font-bold">
                Sign up
              </button>
            </div>
          </div>
          <div className="space-y-6 text-center text-gray-400 text-lg">
            <h2 className="text-5xl text-gray-400  mt-6">Dessert &amp; Joy</h2>
            <p>
              Cafe Royal <br />
              10 Baker Street <br />
              Stafford, WB1 5DN{' '}
            </p>
            <p>
              The Dessert &amp; Joy experience is served all day from <br />
              11:00am to 9:00pm.
            </p>
            <p>
              offerdessertandjoy@gmail.com <br />
              +44 12345 456456
            </p>
            <p>
              Reservations at Dessert &amp; Joy are open daily from 11am onwards.{' '}
              <br /> Kindly note, on Fridays, Saturdays, Sundays and public
              holidays, <br /> there is a dine-in minimum spend of &pound; 25pp for
              external guests.
            </p>
            <button className="bg-gray-400/70 text-white uppercase p-2 rounded-md hover:bg-gray-500 hover:font-bold">
              reservations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
