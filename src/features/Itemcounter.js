import { createReducer } from "@reduxjs/toolkit";

const initialstate ={
    kart:0,
};

export const Itemreducer = createReducer(initialstate,{
    increase:(state, action)=>{
            state.kart += 1;
    }

});