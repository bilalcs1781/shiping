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
          className="text-[50px] font-[700] text-center absolute top-[40%] left-[35%] text-white"
        >
          Products we handle
        </p>
      </div>
      <div className="container mt-20 mx-auto">
        <p className="text-[30px] font-[600]">Agro & Food Products</p>
        <div className="flex flex-wrap gap-8 mt-12 justify-between rounded-lg">
          <div
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
            className="w-[20%] shadow-lg pb-4"
          >
            <img src="/Asset-26-100.jpg" className="mb-3 h-32 w-full" />
            <label className="mt-3 text-center mx-auto px-5 text-[22px] font-[500]">
              RICE /BASMATI RICE
            </label>
          </div>
          <div
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
            className="w-[20%] shadow-lg pb-4"
          >
            <img
              src="/marek-studzinski-a7WVUj_94Go-unsplash.jpg"
              className="mb-3 h-32 w-full"
            />
            <label className="mt-3 text-center mx-auto px-5 text-[22px] font-[500]">
              Maize{" "}
            </label>
          </div>
          <div
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
            className="w-[20%] shadow-lg pb-4"
          >
            <img
              src="/samet-kurtkus-L6hsus2Q768-unsplash.jpg"
              className="mb-3 h-32 w-full"
            />
            <label className="mt-3 text-center mx-auto px-5 text-[22px] font-[500]">
              Barley
            </label>
          </div>
          <div
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
            className="w-[20%] shadow-lg pb-4"
          >
            <img
              src="/dimitri-photography-7T4z7OQK-U0-unsplash.jpg"
              className="mb-3 h-32 w-full"
            />
            <label className="mt-3 text-center mx-auto px-5 text-[22px] font-[500]">
              Desi Chick Peas
            </label>
          </div>
          <div
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos="fade-right"
            className="w-[20%] shadow-lg pb-4"
          >
            <img
              src="/aditya-kulkarni-MCeNtqgbJUo-unsplash.jpg"
              className="mb-3 h-32 w-full"
            />
            <label className="mt-3 text-center mx-auto px-5 text-[22px] font-[500]">
              Food Masala{" "}
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
