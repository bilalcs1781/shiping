"use client";
import React, { useEffect } from "react";
import { FaBusinessTime, FaShip } from "react-icons/fa6";
import { TbMessageSearch } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styes

const HeroSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div>
        <div className="relative w-full h-[500px]">
          <img
            src="/shipping.jpg"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <p
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
            className="text-[50px] font-[700] text-center absolute top-[40%] left-[27%] text-white"
          >
            Simplifying Cross-Border Trade
          </p>
        </div>
      </div>
      <div className="container px-4 mx-auto md:flex flex-wrap mt-24">
        <div
          className="md:w-1/2 w-full"
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <label className="text-[#AF6B00] text-[36px] font-[700]">
            Solving the complexities of international trade
          </label>
          <p data-aos="zoom-in" data-aos-offset="500" data-aos-duration="500">
            We are a company that provides export-import solutions for a diverse
            range of products in a wide range of industries and markets. NS
            Infinitus has chosen to play a vital role in developing the African
            market, promoting fair and honest trade between markets, and
            fostering trust through effective business practices.
          </p>
          <p className="text-[#AF6B00] text-[30px] font-[600] my-3">
            We Deal in
          </p>
          <img
            data-aos="zoom-in"
            data-aos-offset="500"
            data-aos-duration="500"
            src="/Screenshot 2024-10-12 232647.png"
            className="mt-1"
          />
          <img
            data-aos="zoom-in"
            data-aos-offset="500"
            data-aos-duration="500"
            src="/Screenshot 2024-10-12 232706.png"
            className="mt-1"
          />
          <img
            data-aos="zoom-in"
            data-aos-offset="500"
            data-aos-duration="500"
            src="/Screenshot 2024-10-12 232731.png"
            className="ml-2.5 mt-1"
          />
        </div>
        <div className="w-full md:w-1/2" data-aos="zoom-in">
          <img
            data-aos="zoom-in"
            data-aos-offset="500"
            data-aos-duration="500"
            src="/Asset-2-1-e1678886096539 (2).png"
          />
        </div>
      </div>
      <img
        data-aos="zoom-in"
        data-aos-offset="500"
        data-aos-duration="500"
        src="/Screenshot 2024-10-12 233432.png"
        className="w-full my-12"
      />
      {/* <div className={styles.imageContainer}>
        <img src="/shipping.jpg" className={styles.overlayImage} />
        <div className={styles.textc}>
          <p>Our Vision & Mission</p>
          <span>
            NSINFINITUS understands that the world is fast changing and the
            African commodity market is growing at as geometric pace, therefore
            it is on a mission to make a difference and contribute to positive
            development by delivering value to its customers and fostering the
            environment for growth and development.
          </span>
        </div>
      </div> */}

      <p className="text-[#AF6B00] font-[700] text-center mt-8 text-[45px]">
        Services
      </p>
      <div className="container px-4 flex-wrap gap-5 md:flex justify-between mx-auto mt-12">
        <div
          //   data-aos-offset="500"
          //   data-aos-duration="500"
          //   data-aos="fade-right"
          className="bg-[#F7F7F7] sm:w-1/2 w-full md:w-[30%] py-8 rounded-lg flex-col items-center justify-center gap-3 p-3"
        >
          <FaBusinessTime className="mx-auto" fontSize={80} />
          <p className="text-2xl font-[600] mx-auto text-center mt-4">
            Consultancy
          </p>
        </div>
        <div
          //   data-aos-offset="500"
          //   data-aos-duration="500"
          //   data-aos="fade-right"
          className="bg-[#F7F7F7] py-8 sm:w-1/2 w-full md:w-[30%] rounded-lg flex-col items-center justify-center gap-3 p-3"
        >
          <FaShip className="mx-auto" fontSize={80} />
          <p className="text-2xl font-[600] mx-auto text-center mt-4">
            Shipping & Costing Advice
          </p>
        </div>
        <div
          //   data-aos-offset="500"
          //   data-aos-duration="500"
          //   data-aos="fade-right"
          className="bg-[#F7F7F7] py-8 sm:w-1/2 w-full md:w-[30%] rounded-lg flex-col items-center justify-center gap-3 p-3"
        >
          <TbMessageSearch className="mx-auto" fontSize={80} />
          <p className="text-2xl font-[600] mx-auto text-center mt-4">
            Supply Research
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
