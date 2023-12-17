import React, { useState } from 'react';

function CreateOrder() {
  const [order, setOrder] = useState({ customerName: '', pizzaType: '', destination: { address: '', city: '' } });

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
      const response = await fetch('/orders', {
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
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Name:
          <input type="text" name="customerName" value={order.customerName} onChange={handleInputChange} />
        </label>
        <label>
          Pizza Type:
          <input type="text" name="pizzaType" value={order.pizzaType} onChange={handleInputChange} />
        </label>
        <label>
          Destination Address:
          <input type="text" name="address" value={order.destination.address} onChange={handleDestinationChange} />
        </label>
        <label>
          Destination City:
          <input type="text" name="city" value={order.destination.city} onChange={handleDestinationChange} />
        </label>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
}

export default CreateOrder;
