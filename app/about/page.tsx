"use client";
import Footer from "@/components/footer/page";
import Nabar from "@/components/navbar/page";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Nabar />
      <img
        src="/Screenshot 2024-10-12 234718.png"
        data-aos="zoom-in"
        className="w-full min-h-[100px]"
      />
      <div className="bg-[#F8F7F3] ">
        <div className="container px-4 mx-auto py-12">
          <p
            className="text-[22px]"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
          >
            We are a company that provides export-import solutions for a diverse
            range of products in a wide range of industries and markets. NS
            Infinitus has chosen to play a vital role in developing the African
            market, promoting fair and honest trade between markets, and
            fostering trust through effective business practices.
          </p>
          <div className="flex-wrap md:flex gap-12 mt-12 ">
            <p
              className="text-[25px] w-full md:w-1/2 "
              data-aos-offset="500"
              data-aos-duration="500"
              data-aos="fade-right"
            >
              MAT GLOBAL TRADING AND CONSULTANCY, is a leading global trading
              company based in Lahore- Pakistan, specialising in facilitating
              international trade and fostering business connections across
              various industries. With our extensive network and expertise, we
              provide comprehensive solutions to meet the diverse needs of our
              clients worldwide.
            </p>
            <img
              src="/1-1003x1024.webp"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
              className="w-full md:w-1/3  rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="w-full gap-6 flex-wrap md:flex justify-between mt-20 items-center">
          <div className="w-full md:w-[45%]">
            <label
              className="text-[#AF6B00] text-[40px] font-[700]"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              {" "}
              Our Mission
            </label>
            <p
              className="text-[20px] mt-5 mb-8"
              data-aos-offset="500"
              data-aos-duration="500"
              data-aos="fade-right"
            >
              Our mission is to provide reliable and efficient trading services,
              connecting buyers and sellers from different regions to facilitate
              seamless transactions. We are committed to delivering exceptional
              value to our clients by leveraging our deep market knowledge,
              industry insights, and a customer- centric approach.
            </p>
            <label
              className="text-[#AF6B00] text-[40px] font-[700] pt-20"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              {" "}
              Our Vision
            </label>
            <p
              className="text-[20px] mt-5"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              At MAT GLOBAL TRADING AND CONSULTANCY, our vision is to be a
              trusted partner in global trade, enabling businesses to expand
              their reach and maximize their growth potential. We strive to
              build enduring relationships, offer innovative solutions, and
              drive economic development through ethical and sustainable
              practices.
            </p>
          </div>
          <div className="w-full md:w-[45%]">
            <img
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
              src="/pexels-julius-silver-240301-753331.jpg"
              className="h-[400px] w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
