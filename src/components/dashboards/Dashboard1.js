import React from 'react';
import { Form } from 'react-bootstrap';
import { icono_carro, icono_corazon, icono_hamb, icono_ojo, icono_recargar, icono_wifi } from '../helpers/iconos';

const Dashboard1 = () => {

    let principales = [
        {
            valor: '$58,947',
            titulo: 'Total Revenue',
            icono: icono_corazon,
            color: '#6658DD',
            colorFondo: '#D8D5F7'
        },
        {
            valor: '127',
            titulo: "Today's Scales",
            icono: icono_carro,
            color: '#23BEA0',
            colorFondo: '#C5EEE6'
        },
        {
            valor: '0,58%',
            titulo: "Conversion",
            icono: icono_hamb,
            color: '#56C8E2',
            colorFondo: '#D3F1F8'
        },
        {
            valor: '78,41k',
            titulo: "Today's Visits",
            icono: icono_ojo,
            color: '#F7BD57',
            colorFondo: '#FDEDD2'
        }
    ]

    return (
        <div className='p-4 '>
            <div className='d-flex justify-content-between' style={{ height: '4vw' }}>
                <h5>Dashboard</h5>
                <div className='d-none d-md-block'>
                    <div className='d-flex '>
                        <Form.Control size="sm" type='date' className='w-auto'></Form.Control>
                        <button className='botones-azules ms-2'>{icono_recargar}</button>
                        <button className='botones-azules ms-2'>{icono_wifi}</button>
                    </div>
                </div>

            </div>
            <div className='row'>
                {principales.map((item) => {
                    return (
                        <div className='col-lg-3 col-md-6 col-sm-12 px-3 py-2'>
                            <div className='p-4 bg-white d-flex justify-content-between align-items-center h-100'>
                                <div style={{
                                    color: item.color,
                                    backgroundColor: item.colorFondo,
                                    padding: "30px",
                                    border: `solid 1px ${item.color}`,
                                    borderRadius: '100%',
                                    width: "70px",
                                    height: "70px"
                                }}
                                className='d-flex justify-content-center align-items-center'
                                >
                                    {item.icono}
                                </div>
                                <div>
                                    <h4>{item.valor}</h4>
                                    <p className='text-secondary'>{item.titulo}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>

                </div>
                <div className='col-sm-12 col-md-8'>

                </div>
            </div>
        </div>
    );
};

export default Dashboard1;