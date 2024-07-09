// import React from 'react'
import AboutImg from '../assets/about1.png';

const About = () => {
  return (
    <div className="container mt-8 mb-8">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 space-y-4">
        <div>
          <img src={AboutImg} />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center ">Title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dicta
            ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
            laudantium molestiae debitis repellendus incidunt neque illum
            placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vero dicta ullam aut! Porro voluptatum
            aspernatur laboriosam nam, illo laudantium molestiae debitis
            repellendus incidunt neque illum placeat nostrum qui possimus rerum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dicta
            ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
            laudantium molestiae debitis repellendus incidunt neque illum
            placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vero dicta ullam aut! Porro voluptatum
            aspernatur laboriosam nam, illo laudantium molestiae debitis
            repellendus incidunt neque illum placeat nostrum qui possimus rerum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dicta
            ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
            laudantium molestiae debitis repellendus incidunt neque illum
            placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vero dicta ullam aut! Porro voluptatum
            aspernatur laboriosam nam, illo laudantium molestiae debitis
            repellendus incidunt neque illum placeat nostrum qui possimus rerum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dicta
            ullam aut! Porro voluptatum aspernatur laboriosam nam, illo
            laudantium molestiae debitis repellendus incidunt neque illum
            placeat nostrum qui possimus rerum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Vero dicta ullam aut! Porro voluptatum
            aspernatur laboriosam nam, illo laudantium molestiae debitis
            repellendus incidunt neque illum placeat nostrum qui possimus rerum.
          </p>
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
              className=" text-xl border-b-[2px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" text-xl border-b-[2px]"
            />
            <input
              type="email"
              placeholder="Email"
              className=" text-xl border-b-[2px]"
            />
            <span className="text-center text-yellow-500">
              I agree to terms and conditions
            </span>
          </form>
          <div className='text-center mt-8'>
            <button className="bg-gray-400/70 text-xl text-white p-2 uppercase align-center max-w-[120px]">
            Sign up
          </button>
          </div>
          
        </div>
        <div className="space-y-6 text-center text-gray-400 text-lg">
          <h2 className="text-5xl text-gray-400  mt-6">Dessert and Joy</h2>
          <p>
            Cafe Royal <br />
            10 Baker Street <br />
            Stafford, WB1 5DN{' '}
          </p>
          <p>
            The Dessert and Joy experience is served all day from <br />
            11:00am to 9:00pm.
          </p>
          <p>
            offerdessertandjoy@gmail.com <br />
            +44 12345 456456
          </p>
          <p>
            Reservations at Dessert and Joy are open daily from 11am onwards.{' '}
            <br /> Kindly note, on Fridays, Saturdays, Sundays and public
            holidays, <br /> there is a dine-in minimum spend of £25pp for
            external guests.
          </p>
          <button className="bg-gray-400/70 text-white uppercase p-2">
            reservations
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
