import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems,productToAdd) =>{
    // cartıtems'in productToAdd içerip içermediğini bakıyoruz

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // Bulunursa, miktarı artırıyoruz

    if(existingCartItem) {
        return cartItems.map((cartItems) => cartItems.id === productToAdd.id ?
        {...cartItems,quantity: cartItems.quantity +1 }
        : cartItems )
    }

    //daha sonra güncel cartItems array şeklinde döndürüyoruz.

    return [...cartItems, {...productToAdd, quantity : 1}];

};

const removeCartItem = (cartItems,cartItemToRemove) =>{
    // silinecek cartItem ' i buluyoruz

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );


    // miktar 1 e eşitse seçilen öğe silinecek

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    // silindikten sonra geri döndürme

    return cartItems.map((cartItems) =>
    cartItems.id === cartItemToRemove.id
    ? {...cartItems,quantity: cartItems.quantity - 1 }
    : cartItems 
    );
};

const clearCartItem = (cartItems, cartItemToClear) =>{
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext ({
    isCartOpen : false,
    setIsCartOpen : () =>{},
    cartItems: [],
    addItemToCart : () =>{},
    removeItemFromCart : () =>{},
    clearItemFromCart : () =>{},
    cartCount : 0,
    cartTotal : 0
});

export const CartProvider = ({children}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]);
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems]);


    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd))
    };
    const removeItemToCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    };
    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(clearCartItem(cartItems,cartItemToClear))
    };



    const value = { 
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemToCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal
    }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}