import React from "react";
import '../assets/App.css';

function Navbar({ setView, total }) {
  return (
    <header>
      <h1>Pizzería Mamma Mía!</h1>
      <nav>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("login")}>Login</button>
        <button onClick={() => setView("register")}>Register</button>
        <button onClick={() => setView("cart")}>Carrito</button> {/* Botón Carrito */}
        <span className="cart-total">🛒 Total: ${total}</span> {/* Mostrar el total */}
      </nav>
    </header>
  );
}

export default Navbar;
