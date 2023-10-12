"use client"

import Lottie from "lottie-react";
import notFound from "../../assets/lottie/not-found.json"
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="w-full h-screen bgGradient flex justify-center items-center">
            <div className="">
                <div className="max-w-[500px]">
                    <Lottie
                        animationData={notFound}
                        loop={true}
                        style={{ height: "100%" }}
                    />
                </div>
                <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#7b2ed3] to-white my-2 font-bold text-center text-xl">Ops No..! 404.. Not Found Page</h1>
                <div className="flex items-center justify-center">
                    <Link href='/' className="btn btn-outline btn-circle mt-3 mx-auto text-xl btn-wide border-2 btn-primary duration-300 hover:bg-gradient-to-r from-blue-700 to-cyan-700"><span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary to-white">Back to Home</span></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;