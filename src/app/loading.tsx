
import { Row, Space, Spin } from "antd";

const Loading = () => {
    return (
        <div className="h-screen w-full bg-[#f2f2f7] flex justify-center items-center">
            <Spin tip="Loading" size="large"></Spin>
        </div>
    );
};

export default Loading;
