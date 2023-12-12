import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import type { InputRef } from 'antd';

let index = 0;
let categories: string[] = ['Photography', 'Art Direction', 'Video', 'Scenography', 'Mixed']
const SelectCategory: React.FC = () => {
    const [items, setItems] = useState([...categories]);
    const [name, setName] = useState('');
    const inputRef = useRef<InputRef>(null);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        if (name.trim() !== '') { // Adding a condition to check if the name is not empty
            setItems([...items, name || `New item ${index++}`]);
            setName('');
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    };

    return (
        <Select
            style={{ width: 350 }}
            allowClear={true}
            placeholder="Category"
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider style={{ margin: '8px 0' }} />
                    <Space style={{ padding: '0 8px 4px' }}>
                        <Input
                            placeholder="Please enter item"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                            onKeyDown={(e) => e.stopPropagation()}
                        />
                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                            Add category
                        </Button>
                    </Space>
                </>
            )}
            options={items.map((item) => ({ label: item, value: item }))}
        />
    );
};

export default SelectCategory;