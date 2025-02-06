import React, { useState } from "react";
import "./App.css";
import { FaHome, FaSearch, FaHeart, FaShoppingCart, FaCheck } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

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
  const [loading, setLoading] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setLoading(false);
    setPurchaseComplete(false);
  };

  const confirmPurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setPurchaseComplete(true);
      setLoading(false);
    }, 2000);
  };


  return (
    <div className="app">
      <div className="header">
        <GiLipstick size={50} /> Beauty Market
      </div>

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

      {selectedProduct && (
        <motion.div 
          className="modal-overlay" 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          exit={{ y: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="modal-content">
            <AnimatePresence mode="wait">
              {!loading && !purchaseComplete && (
                <button className="buy-btn" onClick={confirmPurchase}>Kup teraz!</button>
              )}
              {loading && (
                <motion.div 
                  key="loading"
                  className="loading-circle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              {purchaseComplete && (
                <motion.div 
                  key="success"
                  className="success-icon"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheck size={50} color="green" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
