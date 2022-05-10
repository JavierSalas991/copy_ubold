import React from 'react';
import { Form } from 'react-bootstrap';
import { icono_carro, icono_corazon, icono_flecha_abajo, icono_flecha_arriba, icono_hamb, icono_ojo, icono_recargar, icono_wifi } from '../helpers/iconos';
import { VictoryPie } from 'victory';

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
            <div className='row mt-2'>
                <div className='col-sm-12 col-lg-4 px-3 py-2'>
                    <div className='p-4 bg-white d-flex flex-column align-items-center h-100'>
                        <div className='w-100'>
                            <p>Total Revenue</p>
                        </div>
                        <div className='w-50'>
                            <VictoryPie
                                innerRadius={125}
                                colorScale={['#F06B7F', '#EDEFF1']}
                                style={{
                                    labels: {
                                        fontSize: 0, fill: "black"
                                    }
                                }}
                                data={[
                                    { x: "Cats", y: 6.8 },
                                    { x: "Dogs", y: 3.2 }
                                ]}
                            />
                        </div>
                        <p className='text-secondary'>Total sales made today</p>
                        <p style={{ fontSize: '200%' }}>$178</p>
                        <p style={{ fontSize: '80%' }} className='text-secondary text-center'>Traditional heading elements are designed to work best in the meat of your page...</p>
                        <div className='d-flex justify-content-around w-100 mt-2'>
                            <div className=''>
                                <p className='text-secondary mb-1'>Target</p>
                                <p><span className='text-danger'>{icono_flecha_abajo}</span> $7.8k</p>
                            </div>
                            <div className=''>
                                <p className='text-secondary mb-1'>Target</p>
                                <p><span className='text-success'>{icono_flecha_arriba}</span> $7.8k</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-secondary mb-1'>Target</p>
                                <p><span className='text-danger'>{icono_flecha_abajo}</span> $7.8k</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-sm-12 col-lg-8 px-3 py-2'>
                    <div className='p-4 bg-white d-flex flex-column align-items-center h-100'>
                        <div className='w-100'>
                            <p>Sales Analytics</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard1;