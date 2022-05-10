import React, { useState } from 'react';
import { icono_aflechita_abajo, icono_aflechita_derecha } from '../helpers/iconos';

const ItemSidebar = ({ opcion }) => {

    const [mostrarOpciones, setMostrarOpciones] = useState(false)

    const setMostrarOpciones_ = () => {
        if (mostrarOpciones) {
            setMostrarOpciones(false)
        } else {
            setMostrarOpciones(true)
        }
    }

    return (
        <div>
            <div onClick={() => setMostrarOpciones_()} className='cursor-pointer d-flex justify-content-between'>
                <p className='text-secondary'>{opcion.icono}  {opcion.titulo}</p>
                {opcion.cartel ?
                    <p
                        style={{ backgroundColor: opcion.cartel.color, borderRadius: '4px', color: "#fff", fontSize: '80%', width:'18%', height: '5%', textAlign: 'center' }}
                    >
                        <strong>{opcion.cartel.nombre}</strong></p>
                    : null}
                {opcion.opciones ?
                    <p className='text-secondary ms-4'>{mostrarOpciones? icono_aflechita_derecha : icono_aflechita_abajo}</p>
                    : null}
            </div>
            {opcion.opciones && mostrarOpciones ?
                opcion.opciones.map((item) => {
                    return (
                        <p className='text-secondary ms-4'>{item}</p>
                    )
                })
                : null}

        </div>
    );
};

export default ItemSidebar;