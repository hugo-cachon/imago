import React, { useState } from 'react';
import {ExperimentOutlined, FolderOutlined, HomeOutlined, SettingOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import "../style/Header.css"

const items: MenuProps['items'] = [
    {
        label: <Link to={'/'}>Home</Link>,
        key: 'Home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to={'/dashboard'}>Dashboard</Link>,
        key: 'Dashboard',
        icon: <FolderOutlined />,
    },
    {
        label: <Link to={'/workspace'}>Workspace</Link>,
        key: 'Workspace',
        icon: <ExperimentOutlined />,
    },
    {
        label: <Link to={'/settings'} style={{marginLeft: "auto"}}>Settings</Link>,
        key: 'Settings',
        icon: <SettingOutlined />,
    },
];

const Header: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;