

import React from 'react';
import FromTextInput from './FromTextInput';
import "react-phone-input-2/lib/style.css";
import PasswordInput from './PasswordInput';


const PersonalInfo = ({ register, errors, ph, setPh }: any) => {
    return (
        <div>
            <div className="flex w-full justify-between gap-x-3">
                <div className="form-control w-full">
                    <FromTextInput
                        name={"firstName"}
                        label={"First Name"}
                        message={"First Name is required"}
                        register={register}
                        errors={errors}
                        type={"text"}
                    />
                </div>

                <div className="form-control w-full">
                    <FromTextInput
                        name={"lastName"}
                        label={"Last name"}
                        message={"Last Name is required"}
                        register={register}
                        errors={errors}
                        type={"text"}
                    />
                </div>
            </div>

            <div className="flex w-full gap-x-3 justify-between">
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
            </div>

            <div className="flex w-full gap-3 justify-between">
                <div className="form-control w-full">
                    <PasswordInput
                        register={register}
                        errors={errors}
                        field={'Password'}
                    />
                </div>
                <div className="form-control w-full">
                    <div className="form-control w-full">
                        <PasswordInput
                            register={register}
                            errors={errors}
                            field={'Confirm Password'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;