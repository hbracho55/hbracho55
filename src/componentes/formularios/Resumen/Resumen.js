import React from 'react'
import Table from 'react-bootstrap/Table';

const Resumen = () => {
    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Información Resumida de Requerimientos</h5>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <h6>Requerimientos por Unidad</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table striped hover responsive="sm" size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Unidad</th>
                                        <th scope="col">Pendientes</th>
                                        <th scope="col">Suspendidos</th>
                                        <th scope="col">Solicitados</th>
                                        <th scope="col">Borradores</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Depto de Ssitems de Información</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </div>
                    </div>
                    <div className="row">
                        <br/>
                    </div>
                    <div className="row">
                        <h6>Requerimientos por Responsable</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table striped hover responsive="sm" size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Responsable</th>
                                        <th scope="col">Pendientes</th>
                                        <th scope="col">Suspendidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hector Jose Bracho Mendoza</td>
                                        <td>3</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Maria Alejandra Gonzalez Ramos</td>
                                        <td>4</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </div>
                    </div>
                    <div className="row">
                        <br/>
                    </div>
                    <div className="row">
                        <h6>Requerimientos por Unidad Cliente</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table striped hover responsive="sm" size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Unidad Cliente</th>
                                        <th scope="col">Pendientes</th>
                                        <th scope="col">Suspendidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dpto de Contabilidad</td>
                                        <td>3</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>DEpto de Mantenimiento</td>
                                        <td>4</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </div>
                    </div>
                    <div className="row">
                        <br/>
                    </div>
                    <div className="row">
                        <h6>Requerimientos por Servicio/Producto</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table striped hover responsive="sm" size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Servicio</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Pendientes</th>
                                        <th scope="col">Suspendidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Atención de incidencias</td>
                                        <td>Antivirus/Antispamware</td>
                                        <td>2</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Instalar equipo</td>
                                        <td>PC corporativo</td>
                                        <td>1</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </Table>    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Resumen;