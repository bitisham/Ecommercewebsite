import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("api/allproduct", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response;
});

export const fetchcarouselData = createAsyncThunk(
  "api/fetchcarousel",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/carts?limit=2");
    return response;
  }
);

export const fetchUser = createAsyncThunk("api/alluser", async () => {
  const response = await axios.get("https://fakestoreapi.com/users?limit=5");
  return response;
});

export const fetchSearchProduct = createAsyncThunk('api/searchproduct', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  return response;
});

export const fetchSearchProducts = createAsyncThunk('api/searchdynamicproduct', async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response;
});


export const fetchSortProducts = createAsyncThunk('api/sortproduct', async (sort) => {
  const response = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
  return response;
});