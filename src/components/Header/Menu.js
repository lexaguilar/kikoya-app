import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { userService } from '../../services/userService';
import './Menu.css';
const Menu = history => {

    console.log(history);

    const { role } = useSelector(store => store.user);    

    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => SetIsOpen(!isOpen);

    const permission = userService.permissions(role || 'admin');

    console.log(permission);

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