import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import logo from '../../img/logo.jpg'
import { icono_auriculares, icono_basurero, icono_engranaje, icono_grafico, icono_project, icono_usuario } from '../helpers/iconos';



const NavBar = () => {
    return (
        <Navbar variant='dark' expand="lg" className='bg-gris row'>
            <Container className=''>
                <Navbar.Brand href="#home">
                    <img src={logo} className='ms-4 ps-4 w-75'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Create New" id="basic-nav-dropdown">
                            <NavDropdown.Item className='text-secondary' href="#action/3.1">{icono_project} New Projects</NavDropdown.Item>
                            <NavDropdown.Item className='text-secondary' href="#action/3.2">{icono_usuario} Create Users</NavDropdown.Item>
                            <NavDropdown.Item className='text-secondary' href="#action/3.3">{icono_grafico} Revenue Report</NavDropdown.Item>
                            <NavDropdown.Item className='text-secondary' href="#action/3.3">{icono_engranaje} Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='text-secondary' href="#action/3.4">{icono_auriculares} Help & Support</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Mega Menu</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;