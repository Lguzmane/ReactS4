const CardPizza = ({ name, price, ingredients, img, addToCart, onViewMore }) => {
  return (
    <div className="card">
      {/* Imagen de la pizza */}
      <img src={img} alt={name} />

      {/* Título y precio */}
      <h2>{name}</h2>
      <p><strong>Precio:</strong> ${price}</p>

      {/* Lista de ingredientes */}
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {Array.isArray(ingredients) ? (
          ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>No hay ingredientes disponibles</li>
        )}
      </ul>

      {/* Botones */}
      <button onClick={onViewMore}>Ver más</button> {/* Ver más funcional */}
      <button onClick={() => addToCart({ name, price, img })}>Añadir</button>
    </div>
  );
};

export default CardPizza;
