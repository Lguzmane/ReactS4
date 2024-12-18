import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = ({ addToCart, setView, setSelectedPizzaId }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al cargar pizzas:", error));
  }, []);

  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas?.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={pizza.ingredients}
            addToCart={() => addToCart(pizza)}
            onViewMore={() => {
              setSelectedPizzaId(pizza.id); // Guardar el ID de la pizza seleccionada
              setView("pizza"); // Cambiar la vista
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
