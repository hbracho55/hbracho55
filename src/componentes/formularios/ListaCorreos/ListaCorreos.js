import React from 'react'
import { Table } from 'react-bootstrap'

export default function ListaCorreos() {
    return (
        <div>
            <Table striped responsive hover size="sm">
                <thead>
                    <tr>
                        <th width="30%">Remitente</th>
                        <th>Asunto</th>
                        <th width="10%">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jose Manuel Gomez Fernandez</td>
                        <td>Modificar reporte de entregas</td>
                        <td>25/04/2021</td>
                    </tr>
                    <tr>
                        <td>Rafael Jose Fernandez Gonzalez</td>
                        <td>Modificar reporte de entregas</td>
                        <td>25/04/2021</td>
                    </tr>
                    <tr>
                        <td>Maria Alejandra Jimenez Rodriguez</td>
                        <td>Modificar reporte de entregas</td>
                        <td>25/04/2021</td>
                    </tr>
                    <tr>
                        <td>Jose Manuel Gomez Fernandez</td>
                        <td>Modificar reporte de entregas</td>
                        <td>25/04/2021</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
