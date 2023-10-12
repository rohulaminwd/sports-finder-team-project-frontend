"use client"

import React from "react";
import banner from "../../assets/lottie/banner.json";
import Lottie from "lottie-react";
import Link from "next/link";

const HomeBanner = () => {
    const me = true
    return (
        <div className="md:!pb-24 pb-5 lg:py-8 -z-10 bgGradient lg:w-full">
            <div className="hero  ">
                <div style={{ justifyContent: "space-between" }} className="hero-content justify-between px-2 sm:px-4 md:px-8 lg:px-16 flex-col md:flex-row-reverse">
                    <div className="order-1 pb-5">
                        <div className="w-full">
                            <Lottie
                                animationData={banner}
                                loop={true}
                                style={{ height: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="ox-hidden text-center mb-5 md:mb-0 md:text-start -order-3 md:order-3">
                        <h1
                            className="text-[26px] font-all pt-4 sm:mb-5 md:mt-2 sm:text-4xl md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 font-bold"
                            data-aos="zoom-in-up"
                            data-aos-delay="300"
                            data-aos-duration="800"
                        >
                            জামিয়া আরাবিয়া ফাতেমা জান্নাত
                        </h1>
                        <h1
                            className="text-[36px] py-3 font-all mb-2 sm:mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 md:mt-2 sm:text-5xl md:text-[70px] font-bold"
                            data-aos="zoom-in-up"
                            data-aos-delay="300"
                            data-aos-duration="800"
                        >
                            আদর্শ মহিলা মাদ্রাসা
                        </h1>
                        <p
                            className="my-1 font-all  sm:text-xl md:my-4 text-white lg:my-4 md:w-3/4"
                            data-aos="zoom-in-up"
                            data-aos-delay="500"
                            data-aos-duration="800"
                        >
                            মেয়েদের দ্বীন শিক্ষার নির্ভরযোগ্য একটি আদর্শ প্রতিষ্ঠান
                        </p>
                        <div
                            className="flex justify-center mt-8 md:justify-start font-all"
                            data-aos="zoom-in-right"
                            data-aos-delay="800"
                            data-aos-duration="800"
                        >
                            <Link href='/registration' className="btn btn-outline btn-circle text-xl btn-wide border-2 btn-primary duration-300 hover:bg-gradient-to-r from-blue-700 to-cyan-700"><span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary to-white">রেজিস্ট্রেশন করুন</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
    );
};

export default HomeBanner;
