import React from 'react'
import { InputGroup } from 'react-bootstrap'

export default function MenuSecundarioRequerimiento() {
    return (
        <div style={{width: '190px'}} className="d-flex flex-column">
            
            <label >Filtrar</label>
            
            <label htmlFor="basic-url"># Requerimiento</label>
            <InputGroup className="mb-3">
                <input type="text" placeholder="Requerimiento" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </InputGroup>

            <label htmlFor="basic-url">Tipo Requerimiento</label>
            <InputGroup className="mb-3">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue>Seleccione una opción</option>
                    <option>Solicitud</option>
                    <option>Incidente</option>
                    <option>Consulta</option>
                </select>
            </InputGroup>

            <label htmlFor="basic-url">Prioridad</label>
            <InputGroup className="mb-3">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue>Seleccione una opción</option>
                    <option>Urgente</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baja</option>
                </select>
            </InputGroup>

            <label htmlFor="basic-url">Actividad</label>
            <InputGroup className="mb-3">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue>Seleccione una opción</option>
                    <option>Modificar Reporte</option>
                    <option>Instalar impresora</option>
                    <option>Asesoría en sistema</option>
                </select>
            </InputGroup>

            <label htmlFor="basic-url">Solicitante</label>
            <InputGroup className="mb-3">
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue>Seleccione una opción</option>
                    <option>Maria Alejandra Colmenarez García</option>
                    <option>Juan Andres Perez Bolivar</option>
                    <option>Maria José Jimenez Lopez</option>
                </select>
            </InputGroup>

        </div>
    )
}