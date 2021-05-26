import Table from 'react-bootstrap/Table';

function ListaAdministrar() {
    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Administrar Requerimientos</h5>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Table striped hover responsive="sm" size="sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Nro Req</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Fecha Asig</th>
                                        <th scope="col">Actividad</th>
                                        <th scope="col">Responsable</th>
                                        <th scope="col">Prioridad</th>
                                        <th scope="col">Cliente</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="/reqatender">234233</a></td>
                                        <td>Necesito que revisen la impresora, ya que no imprime</td>
                                        <td>25/03/2021</td>
                                        <td>Asignar Responsable</td>
                                        <td>Luis Jesus Gonzalez Oropeza</td>
                                        <td>Media</td>
                                        <td>Carmen Yolanda Moreno Davila</td>
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

export default ListaAdministrar