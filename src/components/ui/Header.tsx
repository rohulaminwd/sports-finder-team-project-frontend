import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { removeUserInfo } from '@/redux/service/auth.service';
import { authKey } from '@/constants/storageKye';
import { useRouter } from 'next/navigation';
const { Header: AntHeader } = Layout;

const Header = () => {
    const router = useRouter()
    const logOut = () => {
        // removeUserInfo(authKey)
        router.push("/login")
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Button onClick={logOut} type='text' danger>Logout</Button>,
        },
    ];

    return (
        <AntHeader
            style={{
                background: "#fff"
            }}
        >
            <Row
                justify="end"
                align="middle"
                style={{
                    height: "100%"
                }}
            >
                <Dropdown menu={{ items }}>
                    <a>
                        <Space wrap size={16}>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </Space>
                    </a>
                </Dropdown>
            </Row>
        </AntHeader>
    );
};

export default Header;