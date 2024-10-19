"use client";
import Footer from "@/components/footer/page";
import Nabar from "@/components/navbar/page";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const Products = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Nabar />
      <div className="relative w-full h-[400px]">
        <img
          src="/4358b5b2-f04a-4ba9-bac1-ac758403f1d9.jpeg"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <p
          data-aos-offset="500"
          data-aos-duration="500"
          data-aos="fade-right"
          className="text-[50px] font-[700] text-center absolute top-[40%] left-[10%] md:left-[35%] text-white"
        >
          Products we handle
        </p>
      </div>
      <div className="container px-4 mt-20 mx-auto">
        <p className="text-[30px] font-[600]">Agro & Food Products</p>
        <div className="flex flex-wrap gap-8 mt-12 justify-between rounded-lg">
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/s (1).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Leather Shoes
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/s (2).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              White Chick Peas
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/s.jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Sports Items (Tracksuits)
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/t (1).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Food Masala
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/t (2).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Non-Basmati Rice{" "}
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/t (3).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              White Chick Peas{" "}
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/t (4).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Maize{" "}
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/t.jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Sports Item (Bat, Ball, FootBall)
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/thumbnail (1).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Barley{" "}
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/thumbnail-1 (1).jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Leather Jackets{" "}
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/thumbnail.jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Basmati Rice{" "}
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/screen.jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              Himalayan Pink Salt
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/thumbnail-1.jpg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between  text-[22px] font-[500]">
              Surgical Equipments (Dental Kits)
            </label>
          </div>
          <div className="sm:w-[45%] w-full md:w-[20%] shadow-lg pb-4">
            <img src="/width_199.jpeg" className="mb-3 h-42 w-full" />
            <label className="mt-3 text-center mx-auto ml-5 flex justify-between text-[22px] font-[500]">
              WHITE UREA N46 PRILLED
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
