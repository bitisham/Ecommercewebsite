import React from "react";
import {
  DeleteFilled,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import { useAppContext } from "../ContextAPI";
import { updateCart } from "../../redux/slices/AddToCart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Order = () => {
  const navigate = useNavigate();

  const { appState, updateState } = useAppContext();
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state);
  console.log("cartdata", cartdata);
  console.log("appState", appState);
  const [orderdata, setOrderData] = React.useState([]);
  const handleAdd = (id) => {
    const addtoqty = orderdata.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      } else {
        return item;
      }
    });
    updateState({
      ...appState,
      addToCart: addtoqty,
    });
    dispatch(updateCart(addtoqty));
  };

  const handleMin = (id,qty) => {
    const minqty = orderdata.map((item) => {
      if (id === item.id) {
        // Subtract 1 from quantity if greater than 0
        return {
          ...item,
          qty: Math.max(1, item.qty - 1), // Ensure qty doesn't go below 0
        };
      } else {
        return item;
      }
    });

    // Update state with the updated order data
    updateState({
      ...appState,
      addToCart: minqty,
    });
    dispatch(updateCart(minqty));
  };

  const handleDelete = (id) => {
    updateState({
      ...appState,
      addToCart: appState?.addToCart?.filter((item) => item.id !== id),
    });
    dispatch(
      updateCart(cartdata?.addToCart?.data.filter((item) => item.id !== id))
    );
  };
  const totalPrice = orderdata?.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
  React.useEffect(() => {
    setOrderData(cartdata?.addToCart?.data);
  }, [cartdata?.addToCart?.data]);

  return (
    <div>
      <div>
        {cartdata?.addToCart?.data?.map((item) => (
          <div key={item.id} className="flex justify-start gap-3 items-center">
            <div>
              <img src={item.image} className="w-[100px] h-auto" alt="asd" />
            </div>
            <div>
              <div>{item.name}</div>
              <div>{item.price * item.qty}</div>
              <div>{item.qty}</div>
            </div>
            <div>
              <div>
                <PlusCircleFilled onClick={() => handleAdd(item.id)} />
              </div>
              <div>
                <MinusCircleFilled onClick={() => handleMin(item.id)} />
              </div>
              <div>
                <DeleteFilled onClick={() => handleDelete(item.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>Total Sum:{totalPrice}</div>
      <div>
        <Button
          className="bg-blue-900 text-white "
          onClick={() => navigate("/ordernow")}
        >
          Order now
        </Button>
      </div>
    </div>
  );
};

export default Order;
