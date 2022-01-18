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
                        <UncontrolledDropdown nav inNavbar>
                             <DropdownToggle nav caret>
                                {permission.role}
                            </DropdownToggle>
                            <DropdownMenu right>
                                { permission && 
                                    permission.modules.map((module, key) => {

                                        return   <DropdownItem key={key}>
                                                {module.option} 
                                            </DropdownItem>
                                        

                                    })
                                }                                      
                            </DropdownMenu>                          
                        </UncontrolledDropdown>
                        <NavItem>
                            <button  onClick={ e => history.history.push({ pathname: '/login' })}>Salir</button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}

export default Menu;