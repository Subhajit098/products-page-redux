import { createSlice } from '@reduxjs/toolkit'

const initialState={
    data:[]
}


const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        fetchProducts(state,action){
            state.data=action.payload
        }
    }
})

export const {fetchProducts} = productSlice.actions //return the functions
export default productSlice.reducer;  // return the state 

export function getProducts(){
    return async function getProductsThunk(dispatch,state){
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        dispatch(fetchProducts(data))
    }
}
