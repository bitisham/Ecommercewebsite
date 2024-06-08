import { Avatar, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReusableThird = ({ data, title }) => {
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
                <div className="grid gap-2">
                  <div className="flex justify-center">
                    <Avatar
                      size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                      }}
                      src={item.image}
                    />
                  </div>
                  <div className="text-center">{item.name}</div>
                  <div className="text-pretty text-center">
                    {item.description}
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
export default ReusableThird;
