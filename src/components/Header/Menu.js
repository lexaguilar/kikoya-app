import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import { userService } from '../../services/userService';
import './Menu.css';
const Menu = history => {

    const { role } = useSelector(store => store.user);    

    const [isOpen] = useState(false);

    const permission = userService.permissions(role || 'admin');

    return (
        <div>
            <Navbar color="light" light expand="md">

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavbarBrand href="#"></NavbarBrand>
                        <div className='menu'>
                            <div>{permission.role}</div>
                            { permission && 
                                    permission.modules.map((module, key) => {

                                        return <div key={key} className='submenu'>
                                            {module.option}
                                        </div>
                                       
                                        

                                    })
                                } 
                             <div><button  onClick={ e => history.history.push({ pathname: '/login' })}>Salir</button></div>
                        </div>
                         
                    
                        
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}

export default Menu;