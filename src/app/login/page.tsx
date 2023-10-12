import LoginFrom from '@/components/registration/LoginFrom';
import LoginLeft from '@/components/registration/LoginLeft';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="registration-bg bg-cover">
            <div className="bg-gradient-trasparent flex justify-center sm:items-center items-start bg-center h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:items-center items-start">
                    <div className="h-full z-10 shadow-md">
                        <LoginLeft />
                    </div>
                    <div className="h-full">
                        <LoginFrom />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;