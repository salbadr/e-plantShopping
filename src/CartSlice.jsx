import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const itemExist = state.items.find(items=>items.name === name);
      if(itemExist){
        itemExist.quantity++
      }
      else{
        state.items.push({ name, image, cost, quantity: 1 })

      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item =>item.name!==name);

    },
    updateQuantity: (state, action) => {
      const {name, amount} = action.payload;
      const itemExist = state.items.find(items=>items.name === name);
      if(itemExist){
        itemExist.quantity = amount
      }


    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
