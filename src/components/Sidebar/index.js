import React from 'react'; 
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap 
}from'./SidebarElements'; 

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}> {/*anywhere you click it will close sidebar */}
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"> Pizzass </SidebarLink> 
                <SidebarLink to="/"> Desserts </SidebarLink> 
                <SidebarLink to="/"> Full Menu </SidebarLink> 
                <SidebarLink to="/"> Contact Us </SidebarLink>  
                
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/"> Order Now </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
            
        
    ); 
}; 

export default Sidebar; 
