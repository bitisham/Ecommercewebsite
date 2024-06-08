import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Modal } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../services/LoginAction";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onFinish = async (values) => {
    await userLogin(values)(dispatch).unwrap();
    navigate("/");
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = () => {
    navigate(-1);
  };
  const data = useSelector((state) => state);
  console.log("data", data?.authinfo?.loading);

  return (
    <div>
      <Card className="w-80 flex ">
        <ArrowLeftOutlined onClick={() => handleNavigate()} />

        <div className="font-bold text-center text-base mb-3">LOG IN</div>
        <div>
          <Form onFinish={onFinish}>
            <Form.Item label="User Name" name="username">
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>

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
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-900"
                loading={data?.authinfo?.loading}
              >
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <a href="bitisha.com" onClick={showModal}>
                Forget Password ?
              </a>
            </Form.Item>
          </Form>
        </div>
      </Card>

      <Modal
        title="Forget Password"
        open={isModalOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        <p>Email</p>
        <p>User Name</p>
      </Modal>
    </div>
  );
};

export default Login;
