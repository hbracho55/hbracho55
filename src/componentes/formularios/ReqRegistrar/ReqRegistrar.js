import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CatalogoCliente from '../CatalogoCliente/CatalogoCliente';

function ReqRegistrar() {

    const [modalClientes, setModalClientes] = React.useState(false);
    
    const mostrarModalClientes = () =>{
        setModalClientes(true);    
    }

    const ocultarModalClientes = () =>{
        setModalClientes(false);    
    }

    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Registrar Requerimiento</h5>
                    <hr/>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col">
                                
                            </div>
                            <div className="col">
                                <div className="row justify-content-end">
                                    <div className="col-6">
                                        <button type="button" class="btn btn-primary btn-sm"><i className="fas fa-copy" data-bs-toggle="tooltip" data-bs-placement="top"></i> Copiar Requerimiento</button>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" class="btn btn-primary btn-sm"><i className="fas fa-sort-amount-down" data-bs-toggle="tooltip" data-bs-placement="top"></i> 10 últimos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control form-control-sm" id="floatingInput" placeholder="Nro Identificación" required/>
                                            <label for="floatingInput col-form-label-sm">Enviar a unidad</label>
                                            <div class="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <a href="#/" onClick={mostrarModalClientes}> <i class="fas fa-search-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Servicio 1</option>
                                        <option value="2">Servicio 2</option>
                                        <option value="3">Servicio 3</option>
                                    </select>
                                    <label for="floatingSelect">Servicio</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Producto 1</option>
                                        <option value="2">Producto 2</option>
                                        <option value="3">Producto 3</option>
                                    </select>
                                    <label for="floatingSelect">Producto</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control form-control-sm" id="floatingInput" placeholder="Nro Identificación" required/>
                                            <label for="floatingInput col-form-label-sm">Solicitante</label>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <a href="#/" onClick={mostrarModalClientes}> <i class="fas fa-search-plus"></i></a>
                                    </div>
                                </div>        
                            </div>
                            <div className="col">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                <textarea class="form-control form-control-sm" placeholder="Descripción" id="floatingTextarea" style={{height: 100}} required></textarea>
                                    <label for="floatingInput col-form-label-sm">Descripción</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Solicitud</option>
                                        <option value="2">Incidente</option>
                                        <option value="3">Incidente Mayor</option>
                                    </select>
                                    <label for="floatingSelect">Tipo de Requerimiento</label>
                                </div>
                            </div>
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Alta</option>
                                        <option value="2">Media</option>
                                        <option value="3">Baja</option>
                                    </select>
                                    <label for="floatingSelect">Prioridad</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="mb-3">
                                    <label for="formFileSm" class="form-label">Adjuntar Archivo</label>
                                    <input class="form-control form-control-sm" id="formFileSm" type="file" />
                                </div>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Registrar requerimiento como borrador
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
                            <div className="col-3">
                                <button type="button" class="btn btn-primary btn-sm">Guardar</button>
                            </div>
                            <div className="col-3">
                                <button type="button" class="btn btn-primary btn-sm">Guardar y Atender</button>
                            </div>
                            <div className="col-3">
                                <button type="button" class="btn btn-primary btn-sm">Limpiar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={modalClientes}
                onHide={ocultarModalClientes}
                backdrop="static"
                keyboard={false}
                size="xl"
                scrollable={true}
            >
                <Modal.Header>
                    <Modal.Title>Catálogo de Clientes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CatalogoCliente />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={ocultarModalClientes}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ReqRegistrar;