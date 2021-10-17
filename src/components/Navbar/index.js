import React from 'react'; 
import { 
    Nav, 
    NavLink, 
    NavIcon, 
    Bars  
} from './NavbarElements'; 



const Navbar = ({ toggle }) => { /* adding toggle functionality */ 
    return (
        <>
            <Nav>
                <NavLink to= "/"> Burger Town </NavLink> 
                <NavIcon onClick={toggle}>
                    <p> Menu</p>
                    <Bars /> 
                </NavIcon> 
            </Nav>
        </>
    )
}

export default Navbar; 
