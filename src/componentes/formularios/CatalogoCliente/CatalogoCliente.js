import React from 'react'
import Table from 'react-bootstrap/Table';
import {clientesData} from '../../../datos/clientesData.json';
import { useForm } from 'react-hook-form';

const CatalogoCliente = () => {

    const [clientes, setClientes] = React.useState(null);
    
    const { register, handleSubmit } = useForm();


    const buscar = (data) =>{
        if (data.id === "" && data.nombre === "" && data.apellido === "" && data.nroIdent === "" && data.telefInterno === "" && data.unidad === "" && data.ubicacion === ""){
            setClientes(null);
        } else {
            setClientes(clientesData.filter(cliente => (
                String(cliente.id).substring(0,data.id.length) === String(data.id) &&
                cliente.nombre.toUpperCase().substring(0,data.nombre.length) === data.nombre.toUpperCase() && 
                cliente.apellido.toUpperCase().substring(0,data.apellido.length) === data.apellido.toUpperCase() &&
                cliente.nroIdent.toUpperCase().substring(0,data.nroIdent.length) === data.nroIdent.toUpperCase() &&
                cliente.telefInterno.toUpperCase().substring(0,data.telefInterno.length) === data.telefInterno.toUpperCase() &&
                cliente.unidad.toUpperCase().substring(0,data.unidad.length) === data.unidad.toUpperCase() &&
                cliente.ubicacion.toUpperCase().substring(0,data.ubicacion.length) === data.ubicacion.toUpperCase())));
        } 
    }

    return (
        <div>
            <form onChange={handleSubmit(buscar)}>
                <Table hover responsive="sm" size="sm">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nro Ident</th>
                            <th scope="col">Teléf interno</th>
                            <th scope="col">Unidad</th>
                            <th scope="col">Ubicación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-primary">
                            <td><input {...register("id")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                            <td><input {...register("nombre")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                            <td><input {...register("apellido")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                            <td><input {...register("nroIdent")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                            <td><input {...register("telefInterno")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                            <td><input {...register("unidad")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                            <td><input {...register("ubicacion")} type="text" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/></td>
                        </tr>
                        {clientes!=null ?
                        clientes.map((cliente)=>
                            <tr key={cliente.id}>
                                <td><a href="/reqatender">{cliente.id}</a></td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.nroIdent}</td>
                                <td>{cliente.telefInterno}</td>
                                <td>{cliente.unidad}</td>
                                <td>{cliente.ubicacion}</td>
                            </tr>
                        ) : <td></td>
                        }
                    </tbody>
                </Table>
            </form>
        </div>
    )
}

export default CatalogoCliente