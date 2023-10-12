"use client"

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import PersonalInfo from "./PersonalInfo";

const Registration = () => {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [sector, setData] = useState("student");
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState("male");


    const onSubmit = (data: any) => {
        console.log(data, data)
    }

    return (
        <div className="h-full">
            <div
                className="w-full backdrop-blur-sm  my-auto mx-auto md:w-[500px] shadow-2xl shadow-purple-500 gradient1 p-3 sm:p-5"
                data-aos="zoom-in-left"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                <div className="text-center">

                    <p className="text-xl py-3 text-left sm:mb-2 font-bold font-all">
                        <span className="text2">SignUp Now</span>
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <PersonalInfo
                                register={register}
                                errors={errors}

                            />
                        </div>
                        {error && (
                            <p className="text-red-500 mb-2">
                                <small>{error}</small>
                            </p>
                        )}


                        <div className="w-full">
                            <input
                                className="btn w-full text-purple-300 uppercase font-bold bg-gradient-to-r from-[#1f7fa5e8] to-[#7034df] hover:from-[#8155e9e7] hover:to-[#267da0e3] duration-300 border-0"
                                type="submit"
                                value="Submit"
                            />
                        </div>
                    </form>

                    <div className="divider after:bg-purple-300 before:bg-purple-300 text2 !mb-1">OR</div>

                    <div className="flex sm:mt-5 font-all items-center font-bold justify-between">
                        <div>
                            <Link href="/">
                                <h6 className="flex text-white items-center gap-1 text2">
                                    <AiOutlineArrowLeft />
                                    Back to Home
                                </h6>
                            </Link>
                        </div>
                        <div>
                            <Link href="/login">
                                <h6 className="flex text-white items-center gap-1 text2">
                                    Login<AiOutlineArrowRight />
                                </h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;