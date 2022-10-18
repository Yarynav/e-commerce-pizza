import { createContext, useEffect, useState } from 'react';

export const PizzaDataContext = createContext();

export const PizzaDataProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cartPizzas, setCartPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch('/pizzas.json');
    const json = await response.json();
    setPizzas(json);
  };

  const addPizzaToCart = (pizza) => {
    const pizzaIsInCart = cartPizzas.find((e) => e.id === pizza.id);
    if (pizzaIsInCart === undefined) {
      let newPizza = { ...pizza };
      newPizza.quantity = 1;
      newPizza.total = newPizza.price;
      setCartPizzas([...cartPizzas, newPizza]);
    }
  };

  const updatePizzaToCard = (action, pizza, index) => {
    let pizzaCart = { ...pizza };
    // Si quito pizzas dejo que el minimo sea 1
    if (action == 'remove' && pizzaCart.quantity === 1) return;
    if (action === 'add') {
      pizzaCart.quantity = pizzaCart.quantity + 1;
    }
    if (action === 'remove') {
      pizzaCart.quantity = pizzaCart.quantity - 1;
    }
    pizzaCart.total = pizzaCart.price * pizzaCart.quantity;
    const newCartPizzas = [...cartPizzas];
    newCartPizzas[index] = pizzaCart;
    setCartPizzas(newCartPizzas);
  };
  const total = cartPizzas.reduce((prev, current) => prev + current.total, 0);

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaDataContext.Provider
      value={{
        pizzas,
        setPizzas,
        selectedPizza,
        setSelectedPizza,
        cartPizzas,
        setCartPizzas,
        addPizzaToCart,
        updatePizzaToCard,
        total,
      }}
    >
      {children}
    </PizzaDataContext.Provider>
  );
};
