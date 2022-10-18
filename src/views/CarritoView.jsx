import React, { useContext } from 'react';
import { PizzaDataContext } from '../context/PizzaDataProvider';

export const CarritoView = () => {
  const { cartPizzas, updatePizzaToCard, total } = useContext(PizzaDataContext);

  const addPizza = (currentPizza, index) => {
    updatePizzaToCard('add', currentPizza, index);
  };

  const removePizza = (currentPizza, index) => {
    updatePizzaToCard('remove', currentPizza, index);
  };

  return (
    <div className="pedido">
      {cartPizzas.length > 0 && (
        <div className="w-100">
          <h2 className="title">Detalles del pedido</h2>
          <div className="w-100">
            <table className="w-100">
              {cartPizzas.map((e, i) => (
                <tr key={e.id}>
                  <td className="img-cell">
                    <img style={{ width: '100px' }} src={e.img}></img>
                  </td>
                  <td>{e.name}</td>
                  <td>$ {e.total.toLocaleString('es-CL')}</td>
                  <td>
                    <div className="d-flex align-items-center table-action justify-content-end">
                      <button
                        onClick={() => removePizza(e, i)}
                        className="rojo"
                      >
                        -
                      </button>
                      <div>{e.quantity}</div>
                      <button onClick={() => addPizza(e, i)} className="azul">
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
            <div className="d-flex gap-1 price">
              <div className="bold">Total</div>
              <div className="bold">$ {total.toLocaleString('es-CL')}</div>
            </div>
            <button
              className="verde"
              onClick={() => alert('Disfruta tu compra... Capicci')}
            >
              Ir a Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
