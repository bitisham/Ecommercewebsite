import { Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../services/AllProduct";

const Userlist = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.alluser);
  console.log("data", data?.data);
  const columns = [
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <Table dataSource={data?.data} columns={columns} />
    </div>
  );
};

export default Userlist;
