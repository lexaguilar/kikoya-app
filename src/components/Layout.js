import React from 'react';
import Cart from '../containers/Cart';
import ProductList from '../containers/ProductList';
import Menu from './Header/Menu';
import Toppage from './Header/TopPage';



const Layout = props => {
     return (
        <Toppage>
            <Menu history={props.history} />
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </Toppage>        
    );
}

export default Layout;
