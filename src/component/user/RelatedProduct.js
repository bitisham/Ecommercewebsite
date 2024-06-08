import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const RelatedProduct = ({ title, data }) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/details");
  };
  return (
    <div>
      <div className="font-extrabold text-base text-sky-800">{title}</div>
      <div className="grid grid-cols-12 grid-flow-row gap-6">
        {data?.map((item) => (
          <div key={item.id} className=" md:col-span-4" onClick={handleDetail}>
            <div>
              <Card>
                <div className="grid">
                  <div className="flex justify-start gap-2">
                    <div>
                      {
                        <img
                          alt={item.name}
                          src={item.image}
                          className="h-[150px] w-[150px]"
                        />
                      }
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-700">
                        ${item.price}
                      </div>
                      <div className="text-base font-bold">{item.name}</div>
                    </div>
                  </div>
                  <div className="min-h-10">{item.description}</div>
                  <div>
                    <button className="bg-slate-900 text-slate-50 w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
