import ZInput from '../../layout/ZInput/ZInput';
import Textarea from '../../layout/Textarea/Textarea';
import Select from '../../layout/Select/Select'
import {unidades} from '../../../datos/unidades.json'
import {ubicaciones} from '../../../datos/ubicaciones.json'

function Persona() {
    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Persona</h5>
                    <hr/>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ZInput type="text" label="Nro Identificación" placeholder="Nro Identificación" required="required"/>
                            </div>
                            <div className="col">
                                <a href="/"> <i class="fas fa-search-plus"></i></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ZInput type="text" label="Nombres" placeholder="Nombres" required="required"/>
                            </div>
                            <div className="col">
                                <ZInput type="text" label="Apellidos" placeholder="Apellidos" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ZInput type="text" label="Cargo" placeholder="Cargo"/>
                            </div>
                            <div className="col">
                                <ZInput type="text" label="Correo electrónico" placeholder="Correo Electrónico"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ZInput type="text" label="Nro Teléfono" placeholder="Nro Teléfono"/>
                            </div>
                            <div className="col">
                                <ZInput type="text" label="Nro Teléfono Interno" placeholder="Nro Teléfono Interno"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Textarea label="Dirección" placeholder="Dirección" />
                            </div>
                            <div className="col">
                                <Select label="Unidad Organizativa" opciones={unidades}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Select label="Ubicación" opciones={ubicaciones}/>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Responsable de actividades
                                    </label>
                                </div>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="row">
                            <br/>
                        </div>
                        <div className="row">
                            <hr/>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <button type="button" class="btn btn-primary btn-sm">Guardar</button>
                            </div>
                            <div className="col-2">
                                <button type="button" class="btn btn-primary btn-sm">Inactivar</button>
                            </div>
                            <div className="col-2">
                                <button type="button" class="btn btn-primary btn-sm">Limpiar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Persona;
