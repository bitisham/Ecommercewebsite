import React from 'react'
import {Tabs} from "antd";
import Profile from './userprofile/Profile'

const UserProfile = () => {
    const tabsitem=[
        {
            label:'Profile',
            key:1,
            children:<Profile/>,
        },
        {
            label:'Activity',
            key:2,
            children:'Content of Tab 2',
        },
    ];
  return (
    <div>
   <div>
    <Tabs tabPosition ="left" items={tabsitem}/>
   </div>
    </div>
  );
};

export default UserProfile;
