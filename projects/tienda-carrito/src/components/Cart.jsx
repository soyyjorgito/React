import './Cart.css';
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import useCartStore from '../store/useCartStore';

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, clearCart, incrementQuantity, decreaseQuantity, removeFromCart } = useCartStore();

    function CartItem({ thumbnail, price, title, quantity, incrementQuantity, decreaseQuantity, removeFromCart }) {
        return (
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>
                <footer>
                    <small>Cantidad: {quantity}</small>
                    <div className="cart-item-buttons">
                        <button onClick={decreaseQuantity}>-</button>
                        <button onClick={incrementQuantity}>+</button>
                        <button onClick={removeFromCart}>🗑️</button>
                    </div>
                </footer>
            </li>
        );
    }

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((product) => (
                                <CartItem
                                    key={product.id}
                                    incrementQuantity={() => incrementQuantity(product)}
                                    decreaseQuantity={() => decreaseQuantity(product)}
                                    removeFromCart={() => removeFromCart(product)}
                                    {...product}
                                />
                            ))}
                        </ul>
                        <button className = "clear-cartbutton" onClick={clearCart}>
                            <ClearCartIcon />
                        </button>
                    </>
                )}
            </aside>
        </>
    );
}
