import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold p-2">
            Manage Data Analytics Centally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            in minus odio fugit similique, officiis sint consequatur rerum
            accusamus possimus aspernatur numquam sit soluta voluptate repellat
            odit suscipit illo dolorem.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md my-6 mx-auto md:mx-0 font-medium px-6 bg-black py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
