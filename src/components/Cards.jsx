import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Card = ({ img, user, special }) => {
  return (
    <div
      className={`${
        special ? "md:my-0 my-8 bg-gray-100 " : "  my-4 "
      } w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 `}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={img}
        alt=""
      />
      <h2 className="text-2xl font-bold text-center py-8">{user} User</h2>
      <p className="text-center text-4xl font-bold">$149</p>
      <div className="text-center font-medium">
        <p className="py-2 mx-8 border-b mt-8">500 GB Storage</p>
        <p className="py-2 mx-8 border-b">1 Granted User</p>
        <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
      </div>
      <button
        className={`${
          special ? "text-[#00df9a] bg-black " : "bg-[#00d49a] text-black "
        } w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 `}
      >
        Start Trial
      </button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card img={Single} user="Single" />
        <Card img={Single} user="Double" special="true" />
        <Card img={Single} user="Triple" />
      </div>
    </div>
  );
};

export default Cards;
