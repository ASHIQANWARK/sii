import React from "react";
import keralaImg from "../assets/images/kerala.jpg";
import tamilnaduImg from "../assets/images/chennai.jpg";
import karnatakaImg from "../assets/images/karnataka.jpg";
import delhiImg from "../assets/images/delhi.jpg";
import telanganaImg from "../assets/images/hyderabad.jpg";
import maharashtraImg from "../assets/images/maharashtra.jpg";

const states = [
  { name: "Kerala", img: keralaImg },
  { name: "Tamil Nadu", img: tamilnaduImg },
  { name: "Karnataka", img: karnatakaImg },
  { name: "Delhi", img: delhiImg },
  { name: "Telangana", img: telanganaImg },
  { name: "Maharashtra", img: maharashtraImg },
];

const TopStates = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Top States for Admissions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {states.map((state, index) => (
            <div key={index} className="relative rounded-lg shadow-lg overflow-hidden">
              <img
                src={state.img}
                alt={state.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0  bg-transparent backdrop-blur-sm bg-opacity-30 text-white text-lg font-extrabold py-3 text-center">
                {state.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStates;
