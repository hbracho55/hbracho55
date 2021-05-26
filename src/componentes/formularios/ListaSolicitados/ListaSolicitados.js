import Lista from "../../layout/Lista/Lista";
import {lista_pendientes} from "../../../datos/ListaPendientes.json";

function ListaSolicitados() {
    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Requerimientos Solicitados</h5>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Lista datos={lista_pendientes}/>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaSolicitados