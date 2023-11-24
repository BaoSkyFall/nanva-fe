import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalItems: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
                item.price = item.oneQuantityPrice * item.quantity;
            } else {
                state.cartItems.push({ ...action.payload });
            }
            state.totalItems += action.payload.quantity

        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((p) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        const qtyOld = p.quantity;
                        state.totalItems = state.totalItems + (action.payload.quantity - qtyOld)
                        p.price =
                            p.oneQuantityPrice * action.payload.quantity;
                    }
                    return { ...p, [action.payload.key]: action.payload.quantity };
                }
                return p;
            });
        },
        removeFromCart: (state, action) => {
            const qtyItemDelete = state.cartItems.find((p) => p.id === action.payload.id)?.quantity || 0;
            state.totalItems -= qtyItemDelete;
            state.cartItems = state.cartItems.filter(
                (p) => p.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
