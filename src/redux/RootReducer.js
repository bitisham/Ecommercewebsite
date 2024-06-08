import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/metaReducer";
import AddToCart from "./slices/AddToCart";
import authSlice from "./slices/LoginSlices";
import AllProduct from "./slices/AllProduct";
import CarouselSlice from "./slices/Carousel";
import Userslice from "./slices/Userslice";
import SearchProduct from "./slices/SearchProduct";

import SearchDynamicProduct from "./slices/SearchDynamicProduct";
import Sortproduct from "./slices/Sortproduct";

const resetSlices = ["addtocart", "auth", "allproduct", "carouselSlice","alluser","searchproduct","searchdynamicproduct","sortproduct"];
const rootReducer = createResetMetaReducer(
  "GLOBAL_RESET",
  resetSlices
)(
  combineReducers({
    addToCart: AddToCart,
    authinfo: authSlice,
    allproduct: AllProduct,
    carouselSlice: CarouselSlice,
    alluser: Userslice,
    searchProduct: SearchProduct,
    searchdynamicproduct: SearchDynamicProduct,
    sortproduct: Sortproduct,

  })
);
const persistConfig = {
  key: "root",
  storage,
  Whitelist: resetSlices,
};
export default persistReducer(persistConfig, rootReducer);
