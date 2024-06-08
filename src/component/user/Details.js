import React from "react";
import { useAppContext } from "../ContextAPI";
import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import RelatedProduct from "./RelatedProduct";

const Details = () => {
  const { appState } = useAppContext();

  return (
    <div className=" w-[1000px] flex flex-wrap justify-around">
      <div>
        <img className="w-[300px]" src={appState?.data?.image} alt="asd" />
      </div>
      <div>
        <div>
          Name: {appState.data.name}
          <div>Price: {appState.data.price}</div>
          <div>Description: {appState.data.description}</div>
          <div>Brand: {appState.data.brand}</div>
          <div>
            <Rate allowHalf defaultValue={appState.data.Rate} />
            <TextArea></TextArea>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-500">
            Buy Now
          </button>
          <div>
            <button className="bg-slate-800 text-[#FFFFFF]  ">
              Add to cart
            </button>
          </div>
          <RelatedProduct
            data={appState?.data?.relatedProduct}
            title={"RelatedProduct"}
          ></RelatedProduct>
        </div>
      </div>
    </div>
  );
};

export default Details;
