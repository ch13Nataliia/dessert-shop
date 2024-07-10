// import React from 'react'
import Pic1 from '../../assets/testImg/pic1.jpg';
import Pic2 from '../../assets/testImg/pic2.jpg';
import Pic3 from '../../assets/testImg/pic3.jpg';

const TestimanialsData = [
  {
    id: 1,
    name: 'Victor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: Pic1,
  },
  {
    id: 2,
    name: 'Nadya Roy',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: Pic2,
  },
  {
    id: 3,
    name: 'John Pix',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: Pic3,
  },
];

const Testimanial = () => {
  return (
    <>
      <div className="pb-10">
        <div className="container ">
          {/* header */}
          <div className="text-center mb-20 max-w-[500px] mx-auto space-y-4">
            <h1 className="text-3xl font-bold text-gray-400 uppercase">
              Testimonials
            </h1>{' '}
            <p className="text-md text-primary">What our customers says</p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              itaque aspernatur mollitia sunt, hic corrupti nisi porro nulla
              distinctio facere adipisci deserunt iure, dolores inventore ullam
              suscipit molestias? Incidunt, ea!
            </p>
          </div>
          {/* card */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {TestimanialsData.map((data) => (
                <div key={data.id} className="my-6">
                  <div className="space-y-4 gap-4 shadow-lg py-8 px-6 mx-6 rounded-xl bg-primary/20  ">
                    <div>
                      <img
                        src={data.img}
                        alt="testImg"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex items-center gap-4  ">
                      <div className="space-y-4">
                        <p className="text-md text-gray-400 ">{data.text}</p>
                        <p className="text-xl font-bold text-black/80 text-gray-400">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimanial;
