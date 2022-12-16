import React from 'react';
import { PlusOutlined, SmileOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
} from 'antd';
import './index.scss';

const BookServiceForm = () => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  return (
    <div className='main'>
      <Form
      name="hgjgj"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
   
        <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please fill your name'}]}>
          <Input  prefix={<SmileOutlined />}  />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please fill your phone number'}]}>
          <Input />
        </Form.Item>
        <Form.Item label="Pincode" name="pin" rules={[{ required: true, message: 'Please fill your pin code '}]}>
         <Input/>
        </Form.Item>
        <Form.Item label="Address" name="add" rules={[{ required: true, message: 'Please fill your address'}]}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Vehical Type" name="vehical"
        rules={[{ required: true, message: 'Please select your vehical type'}]}>
          <Radio.Group>
            <Radio value="apple"> 4 wheeler</Radio>
            <Radio value="pear"> 2 wheeler </Radio>
          </Radio.Group>
        </Form.Item>
        
        <Form.Item label="Brand" name="brand" rules={[{ required: true, message: 'Please select your brand'}]} >
          <Select>
            <Select.Option value="demo">Maruti Suzuki</Select.Option>
            <Select.Option value="hyundai">Hyundai</Select.Option>
            <Select.Option value="tata">Tata Motors</Select.Option>
            <Select.Option value="kia">Kia</Select.Option>
            <Select.Option value="mahindra">Mahindra</Select.Option>
            <Select.Option value="toyota">Toyota</Select.Option>
            <Select.Option value="renault">Renault</Select.Option>
            <Select.Option value="honda">Honda</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Model" name="select" rules={[{ required: true, message: 'Please select your car model!'}]}>
          <TreeSelect
            treeData={[
              {
                title: 'Maruti Suzuki',
                value: 'light',
                children: [
                  {
                    title: 'alto',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Fuel type" name="fuel" rules={[{ required: true, message: 'Please select fuel type'}]}>
          <Select>
          <Select.Option value="petrol">Petrol</Select.Option>
            <Select.Option value="diesel">Diesel</Select.Option>
            <Select.Option value="cng">CNG</Select.Option>
            <Select.Option value="ev">EV</Select.Option>
          </Select>
          {/* <Cascader
            options={[
              {
                value: 'zh',
                label: 'Petrol',
              }, {
                value: 'diesel',
                label: 'Diesel',
              },{
                value: 'CNG',
                label: 'CNG',
              }
            ]}
          /> */}
        </Form.Item>
        <Form.Item label="Service Type" name="service" rules={[{ required: true, message: 'Please select service!'}]}>
        <Select>
          <Select.Option value="petrol">Periodic Services </Select.Option>
            <Select.Option value="diesel">AC service and repair</Select.Option>
            <Select.Option value="cng">Batteries</Select.Option>
            <Select.Option value="ev">Tyre & wheel care </Select.Option>
            <Select.Option value="ev">Detailing service </Select.Option>
            <Select.Option value="ev">Car spa </Select.Option>
            <Select.Option value="ev">Car inspections </Select.Option>
            <Select.Option value="ev">Windshield & light</Select.Option>
            <Select.Option value="ev">Clutch & body parts</Select.Option>
            <Select.Option value="ev">Insurance clame</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item  label="Select Date" name="select date">
          <DatePicker />
        </Form.Item> */}
        <Form.Item label="Duration" name="dur">
          <RangePicker />
        </Form.Item>
       
        {/* <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item> */}
        <Form.Item label="Upload RC" name="rc" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        {/* <Form.Item label="Button">
          <Button type="primary" htmlType="submit">Button</Button>
        </Form.Item> */}
      
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
    
      </Form>
    </div>
  );
};

export default () => <BookServiceForm />;