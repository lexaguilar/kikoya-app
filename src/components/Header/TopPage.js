import React from 'react';

const Toppage = ({ children }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Virtual Shop</h1>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Toppage;
