import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart',JSON.stringify(data));
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: fetchFromLocalStorage(),
        itemCount: 0,
        totalamount: 0,
        totalQuantity:0
    },
    reducers: {
        addToBag: (state, action) => {
            const isItemCart = state.cart.find(item => item.id === action.payload.id)
            if (isItemCart) {
                const tempCart = state.cart.map(item => {
                    if(item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity ;
                        let tempTotalprice = tempQty + item.price;
                        return {
                            ...item, 
                            quantity: tempQty,
                            totalPrice:tempTotalprice
                        }  
                                   
                    } else {
                        return item
                    }                  
                })
                state.cart= tempCart;
                storeInLocalStorage(state.cart);
            } else {
                state.cart.push(action.payload);
                storeInLocalStorage(state.cart);

            }
        },
        removeFromCart : (state, action) => {
            const tempCart = state.cart.filter(item=>item.id !== action.payload)
            state.cart=tempCart
            storeInLocalStorage(state.cart)
        },
        clearCart :(state) => {
            state.cart = []
            storeInLocalStorage(state.cart)
        },
        getCartTotal: (state) => {
            state.totalamount =  state.cart.reduce((cartTotal,cartItem) => {
                return cartTotal += cartItem.totalPrice
            }, 0)
            state.itemCount = state.cart.length
        },
        getCartQuantityTotal: (state) => {
            state.totalQuantity = state.cart.reduce((totalQuantity, cartItem) => {
                return totalQuantity += cartItem.quantity
            }, 0)
        }
    }
})
export const {addToBag, removeFromCart,clearCart,getCartTotal,getCartQuantityTotal} = cartSlice.actions
export default cartSlice.reducer