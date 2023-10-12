import React from 'react';

const SelectInput = ({ register, name, errors, label, optionData, message }: any) => {
    console.log(errors, errors.hasOwnProperty(name))
    return (
        <div className='font-all mt-2'>
            <p className="text-[14px] text-left">
                <span className="text-left text2 py-0 font-bold">
                    {label}
                </span>
            </p>
            <select
                className="text2 rounded-none border px-2 border-dashed border-white p-0 bg-transparent input-md outline-none w-full"
                {...register(name, {
                    required: {
                        value: true,
                        message: "class is required",
                    },
                })}
            >
                {
                    optionData?.map((item: string, index: number) => (
                        <option key={index} value="Play">
                            {item}
                        </option>
                    ))
                }

            </select>
            {errors.hasOwnProperty(name) && (
                <label className="label p-0 pt-1">
                    {errors.class?.type === "required" && (
                        <span className="label-text-alt text1 text-red-500">
                            {message as string}
                        </span>
                    )}
                </label>
            )}
        </div>
    );
};

export default SelectInput;