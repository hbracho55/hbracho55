import React from 'react'
import {etapasData} from '../../../datos/etapasData.json';
import FormularioBase from '../FormularioBase/FormularioBase';

const Etapa = () =>{

    const camposAdicionales=[
        {
            "nombre": "descripcion", 
            "titulo": "descripción", 
            "tipo": "textarea",
            "opcionesSelect": [{"id": 1, "nombre": "Hector"}, {"id": 2, "nombre": "Marce"}], 
            "requerido": false
        }];

    return (
        <div>
            <FormularioBase titulo="Etapa" titulo_lista="Etapas registradas" 
            mensaje_sin_resgitros="No hay etapas registradas" arregloData={etapasData}
            camposAdicionales={camposAdicionales} mostrarLista="true" />
        </div>    
        )
}

export default Etapa
