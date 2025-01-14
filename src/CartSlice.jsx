import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            console.log(name)
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
        incrementPlantQuantity: (state, action) => {
            const { name} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            }
        },
        decrementPlantQuantity: (state, action) => {
            const { name} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem && existingItem.quantity > 0) {
                existingItem.quantity--
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity, incrementPlantQuantity, decrementPlantQuantity } = CartSlice.actions;

export default CartSlice.reducer;
