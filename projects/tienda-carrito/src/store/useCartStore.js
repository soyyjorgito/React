import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }]
        })),
    removeFromCart: (product) =>
        set((state) => {
            return {
                cart: state.cart.filter((item) => item.id !== product.id),
            };
        }),

    clearCart: () => set({ cart: [] }),
    incrementQuantity: (product) =>
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            return { cart: updatedCart };
        }),
    
    decreaseQuantity: (product) =>
        set((state) => {
            const updatedCart = state.cart
                .map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0); // Elimina productos con cantidad 0
            return { cart: updatedCart };
        }),

}));

export default useCartStore;