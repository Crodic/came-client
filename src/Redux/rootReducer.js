import { combineReducers } from "redux";
import ProductReducer from "./SliceReducer/ProductReducer";
import userReducer from "./SliceReducer/userReducer";
import blogReducer from "./SliceReducer/blogReducer";
import cartReducer from "./SliceReducer/cartReducer";

const rootReducer = combineReducers({
    products: ProductReducer,
    user: userReducer,
    blog: blogReducer,
    cart: cartReducer,
});

export default rootReducer;