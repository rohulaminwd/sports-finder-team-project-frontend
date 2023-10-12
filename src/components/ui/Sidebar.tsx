"use client"

import { useState } from "react";
import { Layout, Menu, } from "antd"

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "./SidebarItems";
// import { getUserInfo } from "@/redux/service/auth.service";

const { Sider } = Layout


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.ADMIN
    // const { role } = getUserInfo() as any;
    console.log({ role }, "role")
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            width={200}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div
                style={{
                    color: "white",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                }}
            >
                PH-University
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    );
};

export default Sidebar;