import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoView } from '../views/CarritoView';
import carroImg from '../img/carro.png';
import pizza from '../img/pizza.png';
import { PizzaDataContext } from '../context/PizzaDataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const { total } = useContext(PizzaDataContext);
  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">
          <img src={pizza} className="pizza" />
          <a className="nombre">Pizzeria Mamma Mia!</a>
        </div>
      </Link>
      <Link to="/carrito" className="btn big-text">
        <FontAwesomeIcon icon={faCartShopping} />
        <div>$ {total.toLocaleString('es-CL')}</div>
      </Link>
    </nav>
  );
};
