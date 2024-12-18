import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza"; 
import "./assets/App.css";

function App() {
  const [view, setView] = useState("home"); 
  const [selectedPizzaId, setSelectedPizzaId] = useState(null); 
  const [cart, setCart] = useState([]); 

  // Función para agregar una pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === pizza.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === pizza.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Calcular total del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar setView={setView} total={total} /> {/* Pasar el total como prop */}
      {view === "register" && <Register />}
      {view === "login" && <Login />}
      {view === "home" && (
        <Home addToCart={addToCart} setView={setView} setSelectedPizzaId={setSelectedPizzaId} />
      )}
      {view === "cart" && <Cart cart={cart} setCart={setCart} />}
      {view === "pizza" && <Pizza pizzaId={selectedPizzaId} addToCart={addToCart} />} {/* Nueva vista */}
      <Footer />
    </div>
  );
}

export default App;
