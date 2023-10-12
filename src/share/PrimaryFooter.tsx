import React from "react";
import logo from "../assets/image/quran.png";
import Image from "next/image";

const PrimaryFooter = () => {
  return (
    <div className="w-full h-full bgGradient">
      <div className="text-center max-w-7xl mx-auto w-full pt-5 gap-x-3">
        <div className="w-40 mx-auto flex justify-center items-center">
          <Image src={logo} width={80} alt="logo" />
        </div>
      </div>
      <div className="w-full font-all max-w-7xl mx-auto grid grid-clos-1 sm:grid-cols-2 p-5 text-white gap-5">
        <div className="text-center sm:text-left">
          <h1 className="text-xl py-2 md:text-2xl text bg-gradient-to-r from-white to-purple-600 font-bold">
            জামিয়া আরাবিয়া ফাতেমা জান্নাত
          </h1>
          <h1 className="text-3xl py-2 md:text-4xl text bg-gradient-to-r from-white to-purple-600 font-bold">
            আদর্শ মহিলা মাদ্রাসা
          </h1>
          <p className="text bg-gradient-to-r from-white to-purple-600">
            শিক্ষা আলোর পথ যেন জ্বলতে থাকে সর্বদা, তাই আমরা শিক্ষার উজ্জ্বল পথে
            অগ্রসর করে যাচ্ছি । আমরা সম্পূর্ণ নির্ভরযোগ্য ও বিশ্বস্ত পথে অগ্রসর
            করে যাচ্ছি একটি পরিপূর্ণ সমস্ত শিক্ষার প্রস্তুতি দেওয়ার জন্য।
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="mx-auto">
            <ul>
              <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                হোম
              </li>
              <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                এবাউট{" "}
              </li>
              <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                কন্টাক্ট
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <ul>
              <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                সাপোর্ট
              </li>
              <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                ফিচার{" "}
              </li>
              <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                গ্যালারি
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text bg-gradient-to-r from-white to-purple-600 py-3 font-all text-center">
        {new Date().getFullYear()} &copy; ফাতেমা জান্নাত মহিলা মাদ্রাসা
      </p>
    </div>
  );
};

export default PrimaryFooter;
