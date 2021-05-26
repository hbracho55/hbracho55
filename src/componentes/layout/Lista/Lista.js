import React from 'react'
import Table from 'react-bootstrap/Table';

function Lista (props) {

    const determinarEstilo = (fecha) =>{
        var fechaSistema = new Date();
        var mes= Number(fecha.substring(3,5));
        var fechaLista = new Date(fecha.substring(6,10),mes-1,fecha.substring(0,2));
        fechaSistema.setHours(0,0,0,0);
        fechaLista.setHours(0,0,0,0);
        
        if (fechaLista.getTime() === fechaSistema.getTime()){
            return "table-warning"
        }else if (fechaLista < fechaSistema){
            return "table-danger"
        }else if (fechaLista > fechaSistema){
            return "table-success"
        }
    }

    return (
        <div>
            {props.datos.map((registro)=> 
                <Table hover responsive="sm" size="sm">
                    <thead>
                        <tr>
                            {registro.titulos.map((titulo)=>
                                <th scope="col">{titulo}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {registro.datos.map((linea)=>
                            <tr className={determinarEstilo(linea.fecha)} key={linea.nro_req}>
                                <td><a href={linea.enlace}>{linea.nro_req}</a></td>
                                <td>{linea.fecha}</td>
                                <td>{linea.prioridad}</td>
                                <td>{linea.solicitante}</td>
                                <td>{linea.actividad}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Lista