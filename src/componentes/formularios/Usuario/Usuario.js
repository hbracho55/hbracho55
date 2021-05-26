import React from 'react'

const Usuario = (props) => {
    return (
        <div>
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.datos.length > 0 ?
                    props.datos.map(usuario=>(
                    <tr id={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.usuario}</td>
                        <td>
                            <button >Editar</button>
                            <button >Eliminar</button>
                        </td>
                    </tr>
                    )) : (
                        <tr><td>no hay usuario</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Usuario;