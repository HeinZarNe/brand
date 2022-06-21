import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] p-5 mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          growing with data analytic
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold"
              strings={[" BTB", " BTC", " SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTC, BTB & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium px-6 text-black py-3 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
