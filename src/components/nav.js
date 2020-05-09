import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = (props)=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
      <div>
        <Navbar color="#282828" dark>
          <Container>
            <NavbarBrand href="/">AKHILESH</NavbarBrand>
            <NavbarToggler onClick={toggle} className="navbar-light" />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#">HOME</NavLink>
                    <NavLink href="about">ABOUT</NavLink>
                    <NavLink href="skills">SKILLS</NavLink>
                    <NavLink onClick={()=>{window.scrollTo({top:1800,left:0,behavior:'smooth'});}}>JOURNEY</NavLink>
                    <NavLink href="contact">CONTACT</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
}

export default Navigation;
