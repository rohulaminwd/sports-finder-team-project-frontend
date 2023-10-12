"user client"


import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

const PasswordInput = ({ register, errors, field }: any) => {
    const [showPass, setshowPass] = useState<boolean>(false);
    const [passType, setPassType] = useState<string>("password");

    const handleShowPass = () => {
        setshowPass(!showPass);
        setPassType(passType === "password" ? "text" : "password")
    }
    return (
        <div>
            <div className="form-control mb-5 w-full">

                <p className="text-[14px] py-2 text-left">
                    <span className="text-left text2 py-0 font-bold">
                        {field}
                    </span>
                </p>
                <div className='relative'>
                    <input
                        type={passType}
                        placeholder={field}
                        className=" text2 rounded-none border px-2 border-dashed border-white  bg-transparent input-md outline-none w-full"
                        {...register("password", {
                            required: {
                                value: true,
                                message: `${field} is required`
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters longer'
                            }
                        })}
                    />
                    <div onClick={handleShowPass} className={`${showPass ? "text-purple-700" : "text-purple-400 "} cursor-pointer  absolute top-[12px] right-2`}>
                        {showPass ? <BiShow size={24} /> : <BiHide size={24} />}
                    </div>
                </div>
                {errors?.password &&
                    <label className="label p-0 pt-1">
                        {errors.password?.type === 'required' && <span className="label-text-alt font-all text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt font-all text-red-500">{errors.password.message}</span>}
                    </label>
                }
            </div>
        </div>
    );
};

export default PasswordInput;