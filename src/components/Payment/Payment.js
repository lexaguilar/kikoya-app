import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../Cart/CartItem';
import Toppage from '../Header/TopPage';

const Payment = () => {

    const { products } = useSelector(store => store);

    return (
        <Toppage>

            <div className='container'>
                {products.length > 0 && (
                    <div className="cart__body">
                        {products.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </Toppage>
    );
}

export default Payment;
