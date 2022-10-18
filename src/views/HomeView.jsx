import React, { useContext } from 'react';
import { Banner } from '../components/banner';
import { PizzaCard } from '../components/PizzaCard';
import { PizzaDataContext } from '../context/PizzaDataProvider';

export const HomeView = () => {
  const { pizzas } = useContext(PizzaDataContext);
  return (
    <div>
      <Banner />
      {pizzas.length > 0 && (
        <div className="pizzascontainer">
          {pizzas.map((e, i) => (
            <PizzaCard pizza={e} key={e.id} />
          ))}
        </div>
      )}
    </div>
  );
};
