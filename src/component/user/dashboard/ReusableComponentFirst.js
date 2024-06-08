import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextAPI";
import { updateCart } from "../../../redux/slices/AddToCart";
import { useDispatch, useSelector } from "react-redux";

const ReusableComponentFirst = ({ data, title }) => {
  const { appState, updateState } = useAppContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartdata = useSelector((state) => state);
  console.log("cartdata", cartdata);
  const handleDetails = (item) => {
    updateState({
      ...appState,
      data: item,
    });
    navigate("/details");
  };
  const addToCart = (item) => {
    dispatch(
      updateCart([...new Set([...cartdata?.addToCart?.data, ...[item]])])
    );
  };

  return (
    <div>
      <div className="font-extrabold text-base text-sky-800">{title}</div>
      <div className="grid grid-cols-12 grid-flow-row gap-4">
        {data?.map((item, index) => (
          <div key={item.id} className="md:col-span-3">
            <div>
              <Card
                cover={
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[150px] object-contain"
                  />
                }
              >
                <div onClick={() => handleDetails(item)}>
                  <div>
                    <div className="font-sans">{item.name}</div>
                    <div className="text-sky-400 text-2xl font-bold font-sans">
                      {item.price}
                    </div>
                  </div>
                  <div className="min-h-10">{item.description}</div>
                </div>
                <div>
                  <button
                    className="bg-slate-950 text-slate-50 w-full"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableComponentFirst;
