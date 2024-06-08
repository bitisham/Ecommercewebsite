import React from 'react';
import { Form } from 'antd';
import { AntdInput, AntdUploader, SaveButton } from '../../common';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';


const Profile = () => {
  const handleFinish = (values) => {
    console.log('Success:', values);
  };
  return (

    <div>
   
    <Form className=' grid grid-cols-2 gap-3 ' onFinish={handleFinish}>
    <div>
      <AntdInput  name="inputa" label="Name"/>
    </div>
    
    <div>
      <AntdInput  name="inputc" label="Email" type="email"/>
    </div>
    <div>
      <AntdInput name="inputd" label="Phone" type="number"/>
    </div>
    <div>
    <SaveButton name="save" htmlType="submit">
        Submit
    </SaveButton>
    </div>
    <div>
      <AntdUploader name="upload"/>
      
    </div>
    </Form>
  </div>


  )
}

export default Profile
