import React from 'react'
import { Table } from "antd";
import { useSelector } from 'react-redux'
import { Esewa } from './Esewa';
import { paymentMethd } from '../utilis';
import { khalti } from './Khalti';
import KhaltiCheckout from 'khalti-checkout-web';
const Ordernow = () => {
    const cartdata  = useSelector((state) => state)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
        },

    ];
    const TotalPrice = cartdata?.addToCart?.data.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0);
    const TotalQty = cartdata?.addToCart?.data.reduce((total, item) => {
        return total + item.qty;
    }, 0);
    const [isPayment,setPayment]=React.useState({
        esewa:false,
        khalti:false,
    })
    const handlePayment = (id) =>{
            if(id==1){
                setPayment({
                    esewa:true,
                    khalti:false,
                })
            }
            else if (id==2){
                const checkout = new KhaltiCheckout(khalti);
                checkout.show({amount: TotalPrice})
            }
    }
    console.log("isPayment",isPayment)
    const path = "https://uat.esewa.com.np/epay/main";
    const parms = {
        amt: TotalPrice,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: TotalPrice,
        pid: "ee2c3cal-696b-4cc5-a6be-2c40d929d45334534544",
        scd: "EPAYTEST",
        su: "http://merchant.com.np/page/esewa_payment_success",
        fu: "http://merchant.com.np/page/esewa_payment_failed",
    }
    return (
        <div>
            <div>
                <Table dataSource={cartdata?.addToCart?.data} columns={columns} />
            </div>
            <div>
                Total Quantity:{TotalQty}
            </div>
            <div>
                Total Sum:{TotalPrice}
            </div>
            <div className="md:col-span-7 flex justify-start gap-2">
                {
                    paymentMethd?.map((item,index) => (
                        <div key={item.id} >
                            <div onClick={()=>handlePayment(item.id)}>
                                <img src={item.image} alt={item.name} className="h-[100px] w-[100px] object-contain"/>
                                {item.name}
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                isPayment?.esewa &&(
                    <Esewa path={path} parms={parms}/>
                )
            }
        </div>
    )
}

export default Ordernow