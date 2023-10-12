"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import PhoneInput from 'react-phone-input-2';
import PasswordInput from './PasswordInput';
import FromTextInput from './FromTextInput';

const LoginFrom = () => {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [ph, setPh] = useState<any>();



    const onSubmit = (data: any) => {
        console.log(data, data)
    }
    return (
        <div className="h-full">
            <div
                className="w-full backdrop-blur-sm  my-auto mx-auto md:w-[500px] shadow-2xl shadow-purple-500 gradient1 p-3 sm:p-5"
            >
                <div className="text-center">

                    <p className="text-xl py-3 text-left sm:mb-2 font-bold font-all">
                        <span className="text2">Login Now</span>
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control mt-2 w-full">
                            <FromTextInput
                                name={"email"}
                                label={"Email"}
                                message={"Email is required"}
                                register={register}
                                errors={errors}
                                type={"email"}
                            />
                        </div>
                        <PasswordInput
                            register={register}
                            errors={errors}
                            field={'Password'}
                        />


                        {error && (
                            <p className="text-red-500 mb-2">
                                <small>{error}</small>
                            </p>
                        )}

                        <input
                            className="btn w-full text-purple-300 uppercase font-bold bg-gradient-to-r from-[#1f7fa5e8] to-[#7034df] hover:from-[#8155e9e7] hover:to-[#267da0e3] duration-300 border-0"
                            type="submit"
                            value="Login"
                        />



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
                            <Link href="/signup">
                                <h6 className="flex text-white items-center gap-1 text2">
                                    Sign Up Now <AiOutlineArrowRight />
                                </h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginFrom;