import { Card } from "antd";
import React from "react";

const HotProduct = () => {
  return (
    <div className="grid grid-cols-12 grid-flow-row gap-6">
      {data?.map((item) => (
        <div key={item.id} className="col-span-2">
          <div>
            <Card
              cover={
                <img src={item.image} alt={item.name} className="h-[250px]" />
              }
            ></Card>

            <div className="grid gap-6">
              <div>{item.name}</div>
            </div>
            <div>
              <div>{item.price}</div>
            </div>
            <div>
              <div>{item.description}</div>
            </div>
            <div>
              <div>{item.brand}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotProduct;
