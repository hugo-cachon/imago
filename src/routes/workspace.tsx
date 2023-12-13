import React, {JSX} from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import {Badge, Dropdown, Popconfirm, Space, Table} from 'antd';
import Header from "../components/Header";
import {render} from "react-dom";

interface DataType {
    key: React.Key;
    name: string;
    version: string;
    upgradeNum: number;
    creator: string;
    createdAt: string;
}

interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
}

const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {

    const columns: TableColumnsType<DataType> = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { title: 'Creation Date', dataIndex: 'upgradeNum', key: 'upgradeNum' },
        { title: 'Last Updated', dataIndex: 'creator', key: 'creator' },
        {
            title: 'Status',
            key: 'state',
            render: () => <Badge status="success" text="Online" />,
        },
        {
            title: 'Action',
            key: 'operation',
            render: (_, record) => (
                <Space size="middle">
                    <a>View Online</a>
                    <a>Edit</a>
                    <a>Set Online</a>
                    <Popconfirm
                        title="Are you sure delete this record?"
                        onConfirm={() => console.log("Delete")}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            name: 'Screen',
            version: '10.3.4.5654',
            upgradeNum: 500,
            creator: 'Jack',
            createdAt: '2014-12-24 23:12:00',
        });
    }

    return (
        <>
            <Header />
            <Table
                bordered={true}
                pagination={false}
                columns={columns}
                dataSource={data}
                sticky={true}
                title={() => 'Workspace'}
            />
        </>
    );
};

export default App;