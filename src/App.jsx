import './App.css';
import { PizzaDataProvider } from './context/PizzaDataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { PizzaView } from './views/PizzaView';
import { CarritoView } from './views/CarritoView';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <PizzaDataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/pizza/:id" element={<PizzaView />} />
            <Route path="/carrito" element={<CarritoView />} />
          </Routes>
        </BrowserRouter>
      </PizzaDataProvider>
    </div>
  );
}

export default App;
