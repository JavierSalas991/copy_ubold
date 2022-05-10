import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { icono_aflechita_abajo, icono_aflechita_derecha } from '../helpers/iconos';

const ItemSidebar = ({ opcion }) => {

    const navigate = useNavigate();

    const [mostrarOpciones, setMostrarOpciones] = useState(false)

    const setMostrarOpciones_ = () => {
        if (mostrarOpciones) {
            setMostrarOpciones(false)
        } else {
            setMostrarOpciones(true)
        }
    }

    const redireccionarDesdeOpciones = (opcion, item) => {
        navigate(`/inicio/${opcion.titulo.toLowerCase()}/${item.toLowerCase()}`);
    }
    const redireccionar = (opcion) => {
        if (!opcion.opciones) {
            navigate(`/inicio/${opcion.titulo.toLowerCase()}`);
        }
    }

    return (
        <div>
            <div onClick={() => {setMostrarOpciones_(); redireccionar(opcion)}} className='cursor-pointer d-flex justify-content-between'>
                <p className='text-secondary'>{opcion.icono}  {opcion.titulo}</p>
                {opcion.cartel ?
                    <p
                        style={{ backgroundColor: opcion.cartel.color, borderRadius: '4px', color: "#fff", fontSize: '80%', width: '18%', height: '5%', textAlign: 'center' }}
                    >
                        <strong>{opcion.cartel.nombre}</strong></p>
                    : null}
                {opcion.opciones ?
                    <p className='text-secondary ms-4'>{mostrarOpciones ? icono_aflechita_derecha : icono_aflechita_abajo}</p>
                    : null}
            </div>
            {opcion.opciones && mostrarOpciones ?
                opcion.opciones.map((item) => {
                    return (
                        <p onClick={() => redireccionarDesdeOpciones(opcion, item)} className='text-secondary ms-4 cursor-pointer'>{item}</p>
                    )
                })
                : null}

        </div>
    );
};

export default ItemSidebar;