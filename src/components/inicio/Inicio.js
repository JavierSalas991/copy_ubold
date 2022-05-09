import React, { useState, useEffect } from 'react';
import NavBar from '../common/NavBar';
import Configuracion from './Configuracion';
import Sidebar from './Sidebar';

const Inicio = () => {

    let widthConfiguracion  = 270;
    const [posicionX, setX] = useState(-widthConfiguracion);

    const mostrarOcultarSidebar = () => {
        if (posicionX < 0) {
            setX(0);
        } else {
            setX(-widthConfiguracion);
        }
    };
    
    useEffect(() => {
        setX(-widthConfiguracion);
    }, []);

    const [sidebarDesplegado, setSidebarDesplegado] = useState(true)
    return (
        <div id='inicio_'>
            <NavBar sidebarDesplegado={sidebarDesplegado} setSidebarDesplegado={setSidebarDesplegado}></NavBar>

            <div className='contenedor-app'>

                <Sidebar sidebarDesplegado={sidebarDesplegado}></Sidebar>

                <div className='seccion-principal' style={{ backgroundColor: '#F4F5F7' }}>
                    {/* <Barra></Barra> */}
                    <main>


                    </main>
                </div>

            </div>
            <div className='contenedor_sidebar'>
                <Configuracion posicionX={posicionX} setX={setX} width={widthConfiguracion} height={''}>
                    <p>prueba</p>
                </Configuracion>
            </div>
        </div>
    );
};

export default Inicio;