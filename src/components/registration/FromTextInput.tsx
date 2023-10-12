"use client"

const FromTextInput = ({ register, name, errors, label, type, message }: any) => {
    return (
        <div className="font-all mt-2">
            <p className="text-[16px] my-1 text-left">
                <span className="text-left text2 py-0 font-bold">
                    {label}
                </span>
            </p>
            <input
                type={type}
                placeholder={label}
                required
                className=" text2 rounded-none border px-2 border-dashed border-white  bg-transparent input-md outline-none w-full"
                {...register(name, {
                    required: {
                        value: true,
                        message: message,
                    },
                })}
            />
            {errors.hasOwnProperty(name) && (
                <label className="label p-0 pt-1">
                    {errors.firstName?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                            {message}
                        </span>
                    )}

                </label>
            )}
        </div>
    );
};

export default FromTextInput;