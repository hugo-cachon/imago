import React from 'react';
import {
    DatePicker,
    Form,
    Input,
} from 'antd';
import ImageUploader from "./ImageUploader";
import SelectCategory from "./SelectCategory";

const { TextArea } = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export default function UploadForm() {
    return(
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item>
                    <Input placeholder={"Title"}/>
                </Form.Item>
                <Form.Item>
                    <SelectCategory/>
                </Form.Item>
                <Form.Item>
                    <DatePicker style={{width: 350}} placeholder={"Creation Date"} />
                </Form.Item>
                <Form.Item>
                    <TextArea placeholder={"Details"} rows={4} />
                </Form.Item>
                <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                    <ImageUploader />
                </Form.Item>
            </Form>
        </>
    );

}