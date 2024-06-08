import React from "react";
import ReusableComponentFirst from "./ReusableComponentFirst";
import {
  hotproduct,
  recentproduct,
  topproduct,
  trendingproduct,
} from "../../utilis";
import ReusableSecond from "./ReusableSecond";
import ReusableThird from "./ReusableThird";
import Carousel from "./Carousel";
import LatestProduct from "./LatestProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchcarouselData } from "../../../services/AllProduct";
import { Spin } from "antd";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state?.allproduct);
  const {
    data: carouseldata,
    loading: carouselloading,
    error: carouselerror,
  } = useSelector((state) => state?.carouselSlice);

  React.useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchcarouselData());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Carousel title={"Carousel"} data={hotproduct} />
      </div>
      <Spin spinning={loading}>
      <ReusableComponentFirst title={'HotProduct'} data={data?.data?.map((item)=>{
          return{
            ...item,
            qty:1
          }
        })}  />      </Spin>
      <LatestProduct title={"Latest Product"} data={hotproduct} />
      <ReusableComponentFirst title={"Top Product"} data={data?.data} />
      <ReusableSecond title={"Trending Product"} data={trendingproduct} />
      <ReusableThird title={"Recent Product"} data={recentproduct} />
    </div>
  );
};
export default Dashboard;
