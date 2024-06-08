import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Pagination, Select, Skeleton } from 'antd';
import { fetchSortProducts } from '../../services/AllProduct';
import { useNavigate } from 'react-router-dom';
import {useAppContext} from '../ContextAPI';
import ReusablecomponentFirst from './dashboard/ReusableComponentFirst';
const Sorting = () => {
    const dispatch = useDispatch();
    const{appState, updateState}=useAppContext()
    const navigate=useNavigate()
    const cartdata=useSelector((state)=>state)
const { data, loading } = useSelector((state) => state.sortproduct);
 React.useEffect(() => {
    dispatch(fetchSortProducts());
  }, [dispatch])
  console.log("dataddsadasash", data?.data)
  const options = [
    {
        value:"desc",
        label:"Desc"
    },
    {
        value:"brand",
        label:"Brand"
    }
  ];

const handleChange = (value,option) => {
  console.log('selected',value,option);
  dispatch(fetchSortProducts(value));
};
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  return (
    <div>
        <Select
    style={{
      width: '100%',
    }}
    onChange={handleChange}
    options={options}
    allowClear={true}
  />
  <Skeleton loading={loading}>
  <div>
    <ReusablecomponentFirst title={'HotProduct'} data={data?.data?.map((item)=>{
          return{
            ...item,
            qty:1
          }
        })}  />
  </div>
  </Skeleton>
  <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1}
      total={500}
    />
    </div>
  )
}
export default Sorting ;