import React from 'react'

function Select(props) {
    return (
        <div>
            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Seleccione una opción</option>
                    {props.opciones.map((opcion)=>
                        <option value={opcion.id.toString()}>{opcion.nombre}</option>
                    )}
                </select>
                <label for="floatingSelect">{props.label}</label>
            </div>
        </div>
    )
}

export default Select
