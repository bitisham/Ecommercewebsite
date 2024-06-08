import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import React from "react";
import App from "../App";
import Hotproduct from "../component/admin/Hotproduct";

const Sorting =React.lazy(()=>import("../component/user/Sorting"));
const SearchProduct  =React.lazy (()=>import("../component/user/SearchProduct"));
const Ordernow  =React.lazy (()=>import("../component/user/Ordernow"));
const UserProfile =React.lazy (()=>import ("../component/user/UserProfile"));
const AdminDashboard = React.lazy(() =>import("../component/admin/AdminDashboard"));
const AdminLayout = React.lazy(() => import("../layout/AdminLayout"));
const UserLayout = React.lazy(() => import("../layout/UserLayout"));
const PageNotFound = React.lazy(() => import("../component/PageNotFound"));
const Login = React.lazy(() => import("../component/auth/Login"));
const Signup = React.lazy(() => import("../component/auth/Signup"));
const AuthLayout = React.lazy(() => import("../layout/AuthLayout"));
const Dashboard = React.lazy(() =>import("../component/user/dashboard/Dashboard"));
const Details = React.lazy(() => import("../component/user/Details"));
const Userlist = React.lazy(() => import("../component/admin/Userlist"));
const AdminProfile = React.lazy(() =>import("../component/admin/AdminProfile"));
export const MainRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/details" element={<Details />} />
        <Route path="/ordernow" element={<Ordernow />} />
        <Route path ="/user/profile" element={<UserProfile />} />
        <Route path ="searchproduct/:id" element={<SearchProduct />} />
        <Route path ="/sorting" element={<Sorting />} />

      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="userlist" element={<Userlist />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="hotproduct" element={<Hotproduct />} />

      </Route>

      <Route path="*" element={<PageNotFound />} />
      <Route path="/app" element={<App />} />
    </Route>
  )
);
