import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PizzaDataContext } from '../context/PizzaDataProvider';

export const PizzaView = () => {
  const { selectedPizza, addPizzaToCart } = useContext(PizzaDataContext);
  return (
    <div className="pizza-view">
      <div>
        {selectedPizza !== null && (
          <div className="d-flex">
            <div className="w-50">
              <img className="pizza-img" src={selectedPizza.img} />
            </div>
            <div className="w-50 pizza-info">
              <h2 className="title">{selectedPizza.name}</h2>
              <p>{selectedPizza.desc}</p>
              <h3>Ingredientes:</h3>
              <ul>
                {selectedPizza.ingredients.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <div className="d-flex price">
                <div className="w-50">
                  <h3>
                    Precio: $ {selectedPizza.price.toLocaleString('es-CL')}
                  </h3>
                </div>
                <div className="w-50 d-flex justify-content-end">
                  <button
                    className="carro btn"
                    onClick={() => {
                      addPizzaToCart(selectedPizza);
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
