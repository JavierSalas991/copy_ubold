import React from 'react';
import { icono_antena, icono_calendario, icono_carro, icono_chat, icono_dashboards } from '../helpers/iconos';
import ItemSidebar from './ItemSidebar';

const Sidebar = ({ sidebarDesplegado }) => {

    let opciones = [
        {
            titulo: 'Dashboards',
            opciones: [
                'Dashboard 1',
                'Dashboard 2',
                'Dashboard 3',
                'Dashboard 4'
            ],
            icono: icono_dashboards,
        },
        {
            titulo: 'Calendar',
            icono: icono_calendario,
        },
        {
            titulo: 'Chat',
            icono: icono_chat,
        },
        {
            titulo: 'Ecommerce',
            opciones: [
                'Dashboard',
                'Product Detail',
                'Add Product',
                'Customers'
            ],
            icono: icono_carro,
        },
        {
            titulo: 'Social Feed',
            icono: icono_antena,
            cartel: {
                nombre: "Hot",
                color: "pink"
            }
        },

    ]

    return (
        <div style={{ transition: '0.1s' }} className={sidebarDesplegado ? 'sidebarGrande ps-3 pe-2' : 'sidebar'}>
            {sidebarDesplegado ?
                <>
                    <h6 className='text-secondary mt-3'> Apps</h6>
                    {opciones.map((opcion) => {
                        return (
                         <ItemSidebar opcion={opcion} ></ItemSidebar>
                        )
                    })}
                </>
                :
                <>
                    {opciones.map((opcion, key) => {
                        return (
                            <div className='d-flex mt-3 justify-content-center'>
                                <p className='text-secondary'>{opcion.icono}</p>
                            </div>

                        )
                    })}
                </>}


        </div>
    );
};

export default Sidebar;