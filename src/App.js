import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CreateOrder from './CreateOrder';
import ViewOrders from './ViewOrders';

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

        <Switch>
          <Route path="/" exact component={CreateOrder} />
          <Route path="/orders" component={ViewOrders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
