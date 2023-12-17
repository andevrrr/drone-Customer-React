import React from 'react';
import './order.css';

function Order({ id, customerName, pizzaType, orderTime, status, street, city, state, zip }) {
    const readableOrderTime = new Date(orderTime).toLocaleString();

    return (
        <div className='order'>
            <div className='information'>
                <p>Pizza Type: {pizzaType}</p>
                <p>Order time: {readableOrderTime}</p>
                <p>Customer: {customerName}</p>
                <p>Address: {street}, {city}, {state}, {zip}</p>
            </div>
        </div>
    );
}

export default Order;
