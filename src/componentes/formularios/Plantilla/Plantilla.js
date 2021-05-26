import React from 'react'
import {plantillasData} from '../../../datos/plantillasData.json';
import FormularioBase from '../FormularioBase/FormularioBase';

const Plantilla = () =>{

return (
    <div>
        <FormularioBase titulo="Plantilla" titulo_lista="Plantillas registradas" mensaje_sin_resgitros="No hay plantillas registradas" arregloData={plantillasData} />
    </div>    
    )
}

export default Plantilla
