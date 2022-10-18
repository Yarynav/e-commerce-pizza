import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PizzaDataContext } from '../context/PizzaDataProvider';

export const PizzaCard = ({ pizza }) => {
  const navigate = useNavigate();
  const { setSelectedPizza, setCartPizzas, cartPizzas, addPizzaToCart } =
    useContext(PizzaDataContext);

  const goToPizza = () => {
    setSelectedPizza(pizza);
    navigate(`/pizza/${pizza.id}`);
  };

  const goToCart = () => {
    addPizzaToCart(pizza);
  };

  return (
    <div className="pizza-card">
      <img src={pizza.img} alt="" />
      <h2>{pizza.name}</h2>
      <h3>Ingredientes:</h3>
      <div className="ingredients">
        <ul>
          {pizza.ingredients.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div className="price"> $ {pizza.price.toLocaleString('es-CL')}</div>
      <div className="button">
        <button onClick={() => goToPizza()} className="ojos btn">
          <FontAwesomeIcon icon={faEye} />
          Ver Mas
        </button>
        <button onClick={() => goToCart()} className="carro btn">
          <FontAwesomeIcon icon={faCartShopping} />
          Añadir
        </button>
      </div>
    </div>
  );
};
