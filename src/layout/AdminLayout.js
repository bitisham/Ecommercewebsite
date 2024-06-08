import { Outlet, useNavigate } from "react-router-dom";
import React from "react";
import { Layout, Menu, theme } from "antd";
import { items } from "../component/utilis";
const { Header, Content, Sider } = Layout;
const AdminLayout = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("key", e);
    navigate(`${e.key}`);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className="text-[#FFF]"
      >
        <div className="flex justify-between w-full">
          <div>Logo</div>
          <div>User Name</div>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["/admin/dashboard"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items}
              onClick={handleClick}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default AdminLayout;
