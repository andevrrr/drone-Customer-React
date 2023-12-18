import React, { useState } from 'react';
import './CreateOrder.css';

function CreateOrder() {
  const [order, setOrder] = useState({
    customerName: '',
    pizzaType: '',
    destination: { street: '', city: '', state: '', zip: '' }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleDestinationChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, destination: { ...order.destination, [name]: value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      if (response.ok) {
        console.log('Order created:', await response.json());
      } else {
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-order">
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-group">
          <label>
            Customer Name:
            <input type="text" name="customerName" value={order.customerName} onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Pizza Type:
            <input type="text" name="pizzaType" value={order.pizzaType} onChange={handleInputChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Street:
            <input type="text" name="street" value={order.destination.street} onChange={handleDestinationChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input type="text" name="city" value={order.destination.city} onChange={handleDestinationChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input type="text" name="state" value={order.destination.state} onChange={handleDestinationChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            ZIP:
            <input type="text" name="zip" value={order.destination.zip} onChange={handleDestinationChange} />
          </label>
        </div>
        <button type="submit" className="submit-button">Create Order</button>
      </form>
    </div>
  );
}

export default CreateOrder;
