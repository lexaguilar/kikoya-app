import React from 'react';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => {
    let history = useHistory();
    
    const iva = parseFloat(total * 0.16).toFixed(2);
    const totalWithIva = parseFloat(total + parseFloat(iva)).toFixed(2);

    const handleClick = () => {

        history.push("/payment");

    }

    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        {
                            items.length > 0 && <div className="cart__total">IVA: {iva} {currency}</div>
                        }
                        <div className="cart__total">Total: {totalWithIva} {currency}</div>
                        { items.length > 0 &&
                            <button
                             className={'btn btn-primary'}
                                onClick={handleClick}
                            >
                                {'Comprar'}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
