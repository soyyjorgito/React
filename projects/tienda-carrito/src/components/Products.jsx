import { useState } from "react";
import "./Products.css";
import Modal from "./Modal.jsx";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import useCartStore from "../store/useCartStore.js";

export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCartStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const checkProductInCart = (product) => {
        return cart.some((item) => item.id === product.id);
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <main className="products">
            <ul>
                {products.map((product) => {
                    const isProductInCart = checkProductInCart(product);
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div className="product-buttons">
                                <button
                                    className={isProductInCart ? "is-incart" : "isnot-incart"}
                                    onClick={() =>
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }
                                >
                                    {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                </button>
                                <button className="details-button" onClick={() => openModal(product)}>
                                    🔍 Ver más
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                product={selectedProduct}
            />
        </main>
    );
}
