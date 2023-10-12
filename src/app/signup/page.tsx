import RegistrantionLeft from "@/components/registration/RegistrantionLeft";
import Registration from "@/components/registration/Registration";


const signUpPage = () => {
    return (
        <div className="registration-bg bg-cover">
            <div className="bg-gradient-trasparent flex justify-center sm:items-center items-start bg-center h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center lg:items-center items-start">
                    <div className="h-full z-10 shadow-md">
                        <RegistrantionLeft />
                    </div>
                    <div className="h-full">
                        <Registration />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default signUpPage;