import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, actions) {
            const newItem = actions.payload;
            const existingItem = state.items.find(item => newItem.id === item.id);
            state.totalQuantity++;
            state.changed = true;
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            }
        },
        removeItemFromCart(state, actions) {
            const id = actions.payload;
            const existingItem = state.items.find(item => id === item.id);
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1) {
                state.items.filter(item => id !== item.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice;