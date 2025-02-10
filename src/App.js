import React, { useState } from "react";
import "./App.css";
import { FaHome, FaSearch, FaHeart, FaShoppingCart, FaCheck } from "react-icons/fa";
import { GiNestedEclipses } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import Twarz from "./Twarz.png";
import { TiThMenu } from "react-icons/ti";

const products = [
  { id: 1, name: "Produkt do pielęgnacji twarzy", price: "Zadbaj o zdrowy wygląd twarzy!", image: Twarz },
];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const confirmPurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setPurchaseComplete(true);
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setPurchaseComplete(false);
    }, 8000);
  };

  return (
    <div className="app">
      <div className="header">
      <TiThMenu size={40} className="menu-item"/>
        <GiNestedEclipses size={40} className="logo-item"/>
      </div>

      <div className="container">
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <AnimatePresence mode="wait">
                {!loading && !purchaseComplete && (
                  <button className="buy-btn" onClick={confirmPurchase}>Kup Teraz!</button>
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
          ))}
        </div>
      </div>

      <div className="toolbar">
        <button><FaHome size={15} /><br />Strona główna</button>
        <button><FaSearch size={15} /><br />Szukaj</button>
        <button><FaShoppingCart size={15} /><br />Koszyk</button>
        <button><FaHeart size={15} /><br />Ulubione</button>
      </div>
    </div>
  );
};

export default App;
