import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl } from 'react-bootstrap'
import logo from '../../img/logo.jpg'
import logoChico from '../../img/logoChico.jpg'
import { icono_auriculares, icono_basurero, icono_engranaje, icono_grafico, icono_project, icono_usuario, icono_expandir, icono_comprimir, icono_grid, icono_hamb } from '../helpers/iconos';



const NavBar = ({ sidebarDesplegado, setSidebarDesplegado, mostrarOcultarSidebar }) => {

    const [fullScreen, setFullScreen] = useState(false)

    function openFullscreen() {
        var elem = document.getElementById("inicio_");
        console.log(elem)
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
    function deactivateFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };

    const setFullScreen_ = () => {
        console.log('algo')
        if (fullScreen) {
            deactivateFullscreen()
            setFullScreen(false)
        } else {
            openFullscreen()
            setFullScreen(true)
        }
    }

    const setSidebarDesplegado_ = () => {
        if (sidebarDesplegado) {
            setSidebarDesplegado(false)
        } else {
            setSidebarDesplegado(true)
        }
    }

    return (
        <Navbar variant='dark' expand="lg" className='bg-gris row'>
            <Container className=''>
                <Navbar.Brand href="#home">
                    {sidebarDesplegado ?
                        <img src={logo} className='ms-4 ps-4 w-75'></img>
                        :
                        <img src={logoChico} className='ms-0 ps-3 w-75'></img>
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setSidebarDesplegado_()} href="#features">{icono_hamb}</Nav.Link>
                        <NavDropdown title="Create New" id="basic-nav-dropdown">
                            <NavDropdown.Item className='text-secondary' href="#action/3.1">{icono_project} New Projects</NavDropdown.Item>
                            <NavDropdown.Item className='text-secondary' href="#action/3.2">{icono_usuario} Create Users</NavDropdown.Item>
                            <NavDropdown.Item className='text-secondary' href="#action/3.3">{icono_grafico} Revenue Report</NavDropdown.Item>
                            <NavDropdown.Item className='text-secondary' href="#action/3.4">{icono_engranaje} Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='text-secondary' href="#action/3.4">{icono_auriculares} Help & Support</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Mega Menu</Nav.Link>
                    </Nav>
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav className="">
                        <Nav.Link className='text-secondary' onClick={() => setFullScreen_()}>{fullScreen ? icono_comprimir : icono_expandir}</Nav.Link>
                        <Nav.Link className='text-secondary' onClick={() => mostrarOcultarSidebar()}>{icono_engranaje}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;