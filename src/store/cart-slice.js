import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem (state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((itm) => (itm.id === newItem.id));
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem (state, action) {
            const id = action.payload;
            const existingItem = state.items.find((itm) => (itm.id === id));
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter((itm) => (itm.id !== id));
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;