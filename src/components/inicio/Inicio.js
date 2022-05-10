import React, { useState, useEffect } from 'react';
import NavBar from '../common/NavBar';
import Configuracion from './Configuracion';
import Configuraciones from './Configuraciones';
import Sidebar from './Sidebar';

const Inicio = () => {

    let widthConfiguracion = 260;
    const [posicionX, setX] = useState(widthConfiguracion);

    const mostrarOcultarSidebar = () => {
        if (posicionX > 0) {
            setX(0);
        } else {
            setX(widthConfiguracion);
        }
    };

    useEffect(() => {
      console.log(posicionX)
    }, [posicionX])

    const cerrarSideBar = () => {
        if (posicionX === 0){
            setX(widthConfiguracion);
        }
    }

    useEffect(() => {
        setX(widthConfiguracion);
    }, []);

    const [sidebarDesplegado, setSidebarDesplegado] = useState(true)
    
    return (
        <div id='inicio_'>
            <div onClick={() => cerrarSideBar()}  style={{opacity: posicionX === 0? '0.85' : '1'}}>

                <NavBar sidebarDesplegado={sidebarDesplegado} setSidebarDesplegado={setSidebarDesplegado} mostrarOcultarSidebar={mostrarOcultarSidebar}></NavBar>

                <div className='contenedor-app'>

                    <Sidebar sidebarDesplegado={sidebarDesplegado}></Sidebar>

                    <div className='seccion-principal' style={{ backgroundColor: '#F4F5F7' }}>
                        <main>


                        </main>
                    </div>

                </div>
            </div>
            <div className='contenedor_sidebar'>
                <Configuracion posicionX={posicionX} setX={setX} width={widthConfiguracion} height={''}>
                    <Configuraciones></Configuraciones>
                </Configuracion>
            </div>
        </div>
    );
};

export default Inicio;