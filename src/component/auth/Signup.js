import React from "react";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div>
      <Card className="w-[700px]">
        <ArrowLeftOutlined onClick={() => handleNavigate()} />
        <div className="font-bold text-center text-base mb-3 font-sans ">
          SIGNUP
        </div>
        <div>
          <Form onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-12 gap-x-2 ">
              <div className="col-span-6">
                <Form.Item label="First Name" name="fname">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Last Name" name="Lname">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Contact" name="contact">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Address" name="address">
                  <Input />
                </Form.Item>
              </div>
              <div className="col-span-6">
                <Form.Item label="Password" name="password">
                  <Input.Password />
                </Form.Item>
              </div>
            </div>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" className="bg-blue-950">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
