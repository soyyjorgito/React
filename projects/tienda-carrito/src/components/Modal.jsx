import "./Modal.css";

const Modal = ({ isOpen, onClose, product }) => {
    return (
        <div
            className={`modal-overlay ${isOpen ? "open" : ""}`}
            onClick={onClose}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                {product ? (
                    <>
                        <img src={product.thumbnail} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description || "No hay descripción para este producto."}</p>
                        <p>Price: ${product.price}</p>
                    </>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};

export default Modal;
