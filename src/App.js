import React, { useState } from "react";
import "./App.css";
import { FaHome, FaSearch, FaHeart, FaShoppingCart, FaCheck } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Produkt 1", price: "10 PLN" },
  { id: 2, name: "Produkt 2", price: "20 PLN" },
  { id: 3, name: "Produkt 3", price: "30 PLN" },
  { id: 4, name: "Produkt 4", price: "40 PLN" },
  { id: 5, name: "Produkt 5", price: "50 PLN" },
  { id: 6, name: "Produkt 6", price: "60 PLN" },
  { id: 7, name: "Produkt 7", price: "70 PLN" },
  { id: 8, name: "Produkt 8", price: "80 PLN" },
  { id: 9, name: "Produkt 9", price: "90 PLN" },
  { id: 10, name: "Produkt 10", price: "90 PLN" },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [purchaseMessage, setPurchaseMessage] = useState("");

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setPurchaseMessage("");
  };

  const confirmPurchase = () => {
    setPurchaseMessage(FaCheck, "Zakup udany!");
  };

  const closePopup = () => {
    setSelectedProduct(null);
    setPurchaseMessage("");
  };

  return (
    <div className="app">
      {/* Górny pasek */}
      <div className="header">
        <GiLipstick size={50} /> Beauty Market
      </div>

      {/* Sekcja produktów */}
      <div className="container">
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card" onClick={() => handleBuy(product)}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dolny toolbar */}
      <div className="toolbar">
        <button>
          <FaHome size={30} />
          <br />Strona główna
        </button>
        <button>
          <FaSearch size={30} />
          <br />Szukaj
        </button>
        <button>
          <FaShoppingCart size={30} />
          <br />Koszyk
        </button>
        <button>
          <FaHeart size={30} />
          <br />Ulubione
        </button>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.price}</p>
            {purchaseMessage ? (
              <motion.p 
                className="success-message" 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.7 }}
              >
                {purchaseMessage}
              </motion.p>
            ) : (
              <button className="buy-btn" onClick={confirmPurchase}>Kup teraz!</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
