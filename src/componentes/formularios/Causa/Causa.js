import React from 'react'
import {causasData} from '../../../datos/causasData.json';
import FormularioBase from '../FormularioBase/FormularioBase';

const Causa = () =>{

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
            <FormularioBase titulo="Causa" titulo_lista="Causas registradas" 
            mensaje_sin_resgitros="No hay causas registradas" arregloData={causasData}
            camposAdicionales={camposAdicionales} mostrarLista="true" />
        </div>    
        )
}

export default Causa
