import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], // Initialize items as an empty array
	},
	reducers: {
		//plant: name, img, descr, cost
		addItem: (state, action) => {
			//Destructure action payload
			const {name, image, cost} = action.payload;
			const existingItem = state.items.find(item => item.name === name);
			//If item already exists incr the count
			if(existingItem) {
				existingItem.quantity += 1;
			} else { //if not, add it to cart with quantity: 1
				state.items.push({name, image, cost, quantity: 1});
			}
		},
		removeItem: (state, action) => {
			state.items = state.items.filter(item => item.name !== action.payload);
		},
		updateQuantity: (state, action) => {
			const {name, quantity} = action.payload;
			const itemToUpdate = state.items.find(item => item.name === name);
			if(itemToUpdate) {
				itemToUpdate.quantity += 1;
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
