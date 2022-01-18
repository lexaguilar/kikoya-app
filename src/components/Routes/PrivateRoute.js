import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userService } from '../../services/userService';


const PrivateRoute = routeProps => {

      let { component: Component, ...rest } = routeProps;

      const isLogged = userService.isLogged();

      return (<Route exact {...rest} render= { props => 
        isLogged 
          ? <Component {...props} />
          : <Redirect to={{pathname:'/login', state:{ from: props.location }}} />
      } />)
};


export default PrivateRoute;
