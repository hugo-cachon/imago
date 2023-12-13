import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    Upload,
} from 'antd';
import '../style/ImageUploader.css'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const UploadForm: React.FC = () => {
    return (
        <>
            <section className={'upload-form-container'} >
                <div className={'data-entry'}>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Input">
                    <Input />
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="TextArea">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Button">
                    <Button>Button</Button>
                </Form.Item></Form>
                </div>
                <div className={'image-upload'}>
                <Form>
                <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload multiple={true} action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload Media</div>
                        </div>
                    </Upload>
                </Form.Item>
                </Form>
                </div>
            </section>
        </>
    );
};

export default () => <UploadForm />;
