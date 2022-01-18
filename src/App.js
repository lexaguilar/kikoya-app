import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import PrivateRoute from './components/Routes/PrivateRoute';


const App = () => {

    return (
        <BrowserRouter>
            <Switch>                   
                <PrivateRoute
                    path="/app"
                    component={Layout}
                />             
                <PrivateRoute
                    path="/payment"
                    component={Payment}
                />             
                <Route path="/login" component={Login} />
                <Redirect to='/app'/>
            </Switch>
        </BrowserRouter>
    )
   
}

export default App;
