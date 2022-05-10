import React from 'react';
import { icono_chat_grande, icono_engranaje_grande, icono_lista_grande } from '../helpers/iconos';

const Configuraciones = () => {
    return (
        <div className='' style={{ height: '100vh', backgroundColor: '#ffffff', borderLeft: 'solid 1px #CFD8DC' }}>
            <div className='d-flex justify-content-around align-items-center text-secondary' style={{ height: '9.5%' }}>
                <p className='pt-2 cursor-pointer'>{icono_chat_grande}</p>
                <p className='pt-2 cursor-pointer'>{icono_lista_grande}</p>
                <p className='pt-2 cursor-pointer'>{icono_engranaje_grande}</p>
            </div>
            <div className='' style={{ height: '7%', backgroundColor: '#F3F7F9' }}>

            </div>
        </div>
    );
};

export default Configuraciones;