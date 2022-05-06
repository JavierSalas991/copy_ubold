import React from 'react';
import NavBar from '../common/NavBar';
import Sidebar from './Sidebar';

const Inicio = () => {
    return (
        <>  
            <NavBar></NavBar>
            
            <div className='contenedor-app'>

                <Sidebar></Sidebar>

                <div className='seccion-principal'>
                    {/* <Barra></Barra> */}
                    <main>


                    </main>
                </div>

            </div>
        </>
    );
};

export default Inicio;