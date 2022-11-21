import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../features/Cartslice';
import {Itemreducer} from '../features/Itemcounter';
const store = configureStore({
    reducer:{
        Cart:CartReducer, 
        Counter:Itemreducer,     
    },
});

export default store;