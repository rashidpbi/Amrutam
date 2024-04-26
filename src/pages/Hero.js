import React from "react";
import hamburger from '../assets/hero pics/hamburger.png'

function Hero() {
  return (
    <div className="bg-custom ">
      <div className="flex  text-center justify-center text-green-500  pt-5  items-center"><div className=" h-full"><img src={hamburger} alt="" height="20" width="30"  className=" md:hidden "/></div><div className="w-full md:hidden font-bold text-xl text-green "><p className="tracking-wide">AMRUTAM</p></div></div>
      <div className="bg-cover text-xl">
        <div className="bg-small md:bg-hero p-24 bg-cover ">
          <div className="">
            <p className="text-custom font-thin m-8 ">
              Namaste, Welcome to Amrutam{" "}
            </p>
            <p className="text-custom font-bold m-8 text-din ">
              Step into Holistic Healing with Ayurveda Book Consultation with
              certified Experts.{" "}
            </p>
            <p className="text-custom font-thin m-8">
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
              Anytime, anywhere.
            </p>
            <button className="bg-green rounded-[16px] p-4 m-[35px] text-custom bg-green-300 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
