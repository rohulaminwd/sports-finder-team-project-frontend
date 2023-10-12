"use client"

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";

import { Layout } from "antd"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
    const userLoggedIn = true
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!userLoggedIn) {
            router.push("/login")
        }
        setIsLoading(true)
    }, [router])

    if (!isLoading) {
        return <p>Loading...</p>
    }


    return <Layout hasSider>
        <Sidebar />
        <Contents>
            {children}
        </Contents>
    </Layout>;
};

export default DashBoardLayout;