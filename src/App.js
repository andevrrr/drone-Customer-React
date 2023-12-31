import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateOrder from './Pages/CreateOrder/CreateOrder';
import ViewOrders from './Pages/Orders/orders';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Order</Link>
            </li>
            <li>
              <Link to="/orders">View Orders</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CreateOrder />} />
          <Route path="/orders" element={<ViewOrders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
