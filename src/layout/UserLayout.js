import {
  Badge,
  ConfigProvider,
  Image,
  Layout,
  theme,
  Avatar,
  Drawer,
  Dropdown,
  Space,
} from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../image/wallie.jpg";
import {
  LoginOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAppContext } from "../component/ContextAPI";
import Order from "../component/user/Order";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../src/redux/slices/LoginSlices";
import { AutoComplete, Input } from "antd";
import { fetchSearchProduct } from "../services/AllProduct";

const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  const { appState } = useAppContext();
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state);
  console.log("cartdata", cartdata);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const iteminfo = [
    {
      name: "About us",
      link: "/aboutus",
    },
    {
      name: "Contact us",
      link: "/contactus",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  const authinfo = [
    {
      name: "LogIn",
      link: "auth/login",
    },
    {
      name: "SignUp",
      link: "auth/signup",
    },
  ];
  const items = [
    {
      key: "1",
      label: <div onClick={() => handleClick("/user/profile")}> Profile</div>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <div onClick={() => handleClick("/user/setting")}> Setting</div>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: <div onClick={() => handleClick(3)}> Logout</div>,
      icon: <LoginOutlined />,
    },
  ];
  const handleClick = (e) => {
    if (e === 3) {
      dispatch(logout());
    } else {
      navigate(`${e}`);
    }
  };
  const handleitem = (item) => {
    navigate(item.link);
  };
  console.log(handleitem);
  console.log("sd", appState);

  console.log("sd", appState);
  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    if (cartdata?.addToCart?.data.length >= 1) setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleSearch = (value) => {
    console.log("values1", value);
    dispatch(fetchSearchProduct(value?.target?.value));
  };
  const onSelect = (e, option) => {
    navigate(`/searchproduct/${option.id}`);
    console.log("onSelect", option);
  };
  const { data: searchdata, loading: searchloading } = useSelector(
    (state) => state.searchproduct || {} // Add a default empty object if state.searchproduct is undefined
  );
  
  console.group("sdadapter", searchdata?.data);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#172554",
            headerHeight: 70,
            fontSize: 20,
            footerBg: "#172554",
          },
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="header">
            <div className="headerlogo">
              <div className="logo">
                <Image src={logo} alt="no image" preview={false} />
              </div>
            </div>

            <div>
              <AutoComplete
                popupMatchSelectWidth={252}
                style={{ width: 300 }}
                options={searchdata?.data?.map((item) => {
                  return {
                    ...item,
                    value: item?.title,
                    label: item?.category,
                  };
                })}
                onSelect={onSelect}
                size="large"
              >
                <Input.Search
                  size="large"
                  placeholder="input here"
                  onPressEnter={handleSearch}
                />
              </AutoComplete>
            </div>

            <div className="iteminfo">
              {iteminfo?.map((item) => (
                <div key={item.link} onClick={() => navigate(item.link)}>
                  {item.name}
                </div>
              ))}
            </div>

            <div className="iteminfo">
              <div>
                {cartdata?.authinfo?.userToken && (
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <UserOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                )}
              </div>
              <div>
                <Badge
                  count={cartdata?.addToCart?.data?.length}
                  size="small"
                  onClick={showDrawer}
                >
                  <Avatar icon={<ShoppingCartOutlined />} size="small" />
                </Badge>
              </div>
              <div className="iteminfo">
                {authinfo?.map((item) => (
                  <div key={item.link} onClick={() => navigate(item.link)}>
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: " 0 48px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
          }}
        >
          Thank You for Visiting !
        </Footer>
        {open && (
          <Drawer title="Orders" onClose={onClose} open={open}>
            <Order />
          </Drawer>
        )}
      </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;
