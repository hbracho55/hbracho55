import React from 'react'
import { useForm } from 'react-hook-form';
import Toast from 'react-bootstrap/Toast';

const OpcionesUnidad = () => {

    const [opcionesForm, setOpcionesForm] = React.useState({id: null, idEstado:null});
    const [aviso, setAviso] = React.useState(false);
    
    const {handleSubmit, reset } = useForm();

    const guardar = (data) =>{
        if (opcionesForm.id > 0) {
            data= {...data, id: opcionesForm.id, idEstado: opcionesForm.idEstado};
          //  setOpcionesForm(servicios.map(servicio=>(servicio.id === servicioForm.id ? data : servicio)))
        }else{
          //  setOpcionesForm([...opciones,data])
        }
        setAviso(true);
        reset();
        setOpcionesForm({id: null, idEstado: null});
    }

    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Opciones de Unidad</h5>
                    <hr/>
                    <Toast onClose={() => setAviso(false)} show={aviso} delay={3000} autohide 
                    className="text-white bg-success"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        }}>
                        <Toast.Body>Información registrada!</Toast.Body>
                    </Toast>
                </div>
                <div className="">
                    <div className="container">
                        <form onSubmit={handleSubmit(guardar)}>
                            <div className="row">
                                <div className="col-9">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control form-control-sm" value="Depto de Sistemas de Información" id="floatingInput" placeholder="Nro Identificación" readOnly/>
                                        <label htmlFor="floatingInput col-form-label-sm">Unidad</label>
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-9">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" aria-label="Floating label select example" required>
                                            <option defaultValue >Seleccione una opción</option>
                                            <option value="1">Hector Jose Bracho Mendoza</option>
                                            <option value="2">Maria Alejandra Lopez Hernandez</option>
                                            <option value="3">Horacio Antonio Marquez Lopez</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Responsable por defecto</label>
                                    </div>
                                </div>
                                <div className="col-9">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" aria-label="Floating label select example" required>
                                            <option defaultValue >Seleccione una opción</option>
                                            <option value="1">En proceso</option>
                                            <option value="2">Suspendido</option>
                                            <option value="3">Finalizado</option>
                                        </select>
                                        <label htmlFor="floatingInput col-form-label-sm">Etapa por defecto</label>
                                    </div>
                                </div>
                                <div className="col-9">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-9">
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            <button type="submit" id="liveToastBtn" className="btn btn-primary btn-sm">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpcionesUnidad
