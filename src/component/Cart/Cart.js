import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const{cart} = props ||{};

    // reduceloop in cart as cart is array of object
    const totalReducer =(prevValue, currentValue) => prevValue + currentValue.price_ticket;
    const total = cart.reduce(totalReducer,0);


    // console.log(cart)
    return (
        <div className="calculation px-3">
            <h1 className="fw-bold"><i className="fas fa-ticket-alt"></i>Ticket: {cart.length}

            </h1>
            <h2 className="fw-bold">Total Money: ${total}</h2>
            <ul>
                {
                    cart.map((group,i) => <React.Fragment key={i}><li>{group.name}</li> </React.Fragment>) 
                }
            </ul>
            <button className="btn fw-bold mx-5 mb-2 ">Ticket Buy<i className="fas fa-money-bill-alt "></i></button>
        </div>
    );
};

export default Cart;