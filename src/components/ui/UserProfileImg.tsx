

const UserProfileImg = ({ me, className, textColor }: any) => {
    return (
        <div className={`${className} rounded-full flex items-center justify-center ring ring-[#91f2dc] ring-offset-base-100 ring-offset-2`}>
            <h2 className={`${textColor ? textColor : "text-xl element-font-5 text-white"} uppercase font-bold `}>{me?.firstName?.slice(0, 1)}{me?.lastName?.slice(0, 1)}</h2>
        </div>
    );
};

export default UserProfileImg;