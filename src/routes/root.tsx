import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet, Route } from 'react-router-dom';
import Dashboard from './dashboard';

const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const Root: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }}>
                    <Menu.Item>
                        <Link to={'/'}>Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'workspace'}>Workspace</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/settings'}>Settings</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Root;
