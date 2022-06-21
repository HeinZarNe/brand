import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  //array for footer list
  const textList = [
    {
      head: "Solution",
      body: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      head: "Support",
      body: ["Pricing", "Documentation", "Guides", "Api Status"],
    },
    {
      head: "Company",
      body: ["About", "Blog", "Jobs", "Press", "Careers"],
    },
    {
      head: "Legal",
      body: ["Claims", "Policy", "Terms"],
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-fuu text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque
          recusandae quaerat expedita, fugit culpa odit nostrum quasi et,
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="md:col-span-2 flex justify-between mt-6">
        {textList.map((text) => (
          <div>
            <h6 className="font-medium text-gray-400">{text.head}</h6>
            <ul>
              {text.body.map((miniText) => (
                <li className="py-2 text-sm  cursor-pointer hover:underline ease-in duration-150">
                  {miniText}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
