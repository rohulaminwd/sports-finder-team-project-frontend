"use client"

import Lottie from 'lottie-react';
import React from 'react';
import registration from "../../assets/lottie/login.json"

const RegistrantionLeft = () => {
    return (
        <div
            data-aos="zoom-in-right"
            data-aos-delay="100"
            data-aos-duration="800"
            className='w-full h-full my-auto ms:shadow-xl  mx-auto md:w-[500px] bg-gradient-trasparent p-3 sm:p-5'
        >
            <p className="text-2xl pt-3 text-left sm:mb-2 font-bold font-all">
                <span className="text2">WellCome to Sports field finder</span>
            </p>

            <div className='md:flex hidden items-center justify-center'>
                <div className='w-[300px] mt-5'>
                    <Lottie
                        animationData={registration}
                        loop={true}
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegistrantionLeft;