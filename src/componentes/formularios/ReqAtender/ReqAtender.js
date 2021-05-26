import Textarea from '../../layout/Textarea/Textarea';
import './ReqAtender.css'

function ReqAtender() {
    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Atender Requerimiento</h5>
                    <hr/>
                </div>
                <div className="">
                    <div className="container">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#atender" type="button" role="tab" aria-controls="atender" aria-selected="true">Atender</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#seguimiento" type="button" role="tab" aria-controls="seguimiento" aria-selected="false">Seguimiento</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#infoActividad" type="button" role="tab" aria-controls="infoActividad" aria-selected="false">Información Actividad</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#infoRequerimiento" type="button" role="tab" aria-controls="infoRequerimiento" aria-selected="false">Información Requerimiento</button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="atender" role="tabpanel" >
                                <div className="container border">
                                    <div className="row border">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Nro Req:
                                                </div>
                                                <div className="col">
                                                    123123
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Solicitante:
                                                </div>
                                                <div className="col">
                                                    Juan Perez
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Cliente:
                                                </div>
                                                <div className="col">
                                                    Maria Sanchez
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Unidad:
                                                </div>
                                                <div className="col">
                                                    Planificación
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Ubicación:
                                                </div>
                                                <div className="col">
                                                    Edificio sede principal
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Teléfono:
                                                </div>
                                                <div className="col">
                                                    987666584
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Estado:
                                                </div>
                                                <div className="col">
                                                    En proceso
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Unidad:
                                                </div>
                                                <div className="col">
                                                    Soporte Técnico
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Servicio:
                                                </div>
                                                <div className="col">
                                                    Atención de incidencias
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Producto:
                                                </div>
                                                <div className="col">
                                                    Computador de escritorio
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Prioridad:
                                                </div>
                                                <div className="col">
                                                    Alta
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3 reqatender__col">
                                                    Interno:
                                                </div>
                                                <div className="col">
                                                    98766
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col reqatender__linea">
                                            Actividad: Asignar responsable a la actividad
                                        </div>
                                    </div>
                                    <div className="reqatender__solucion__container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <div class="form-floating mb-3">
                                                        <textarea class="form-control form-control-sm" placeholder="Solución" id="floatingTextarea" style={{height: 150}} required></textarea>
                                                        <label for="floatingInput col-form-label-sm">Solución</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control form-control-sm" placeholder="" />
                                                        <label for="floatingInput col-form-label-sm">Palabras claves para base de conocimiento</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                No hay notas registradas
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col reqatender__linea">
                                            Próxima(s) Actividad(es) a realizar
                                        </div>
                                    </div>
                                    <div className="reqatender__prox__act__container">
                                      <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Flujo de trabajo
                                                </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div className="row">
                                                            <div className="col">
                                                                Las actividades definidas en el módulo de flujo de trabajo se proponen de forma automática en la lista de la parte inferior. Si necesita incorporar alguna actividad paralela a las registradas en el flujo de trabajo puede agregarla a la lista junto al responsable de atenderla si así lo desea.
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <br/> 
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-10">
                                                                <div class="form-floating mb-3">
                                                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                                        <option selected>Seleccione una opción</option>
                                                                        <option value="1">Asignar responsable a la actividad</option>
                                                                        <option value="2">Formatear disco duro</option>
                                                                        <option value="3">Instalar sistema operativo</option>
                                                                    </select>
                                                                    <label for="floatingSelect">Actividad</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-10">
                                                                <div class="form-floating mb-3">
                                                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                                        <option selected>Seleccione una opción</option>
                                                                        <option value="1">Alberto Jose Rodriguez Perez</option>
                                                                        <option value="2">Maria Alejandra Barbera Gomez</option>
                                                                        <option value="3">Jose Alejandro Velazquez Polanco</option>
                                                                    </select>
                                                                    <label for="floatingSelect">Responsable</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="row">
                                                                <div className="col">
                                                                    Actividades Paralelas
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <select class="form-select" multiple aria-label="multiple select example">
                                                                        <option value="1">Instalación de antivirus</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col">
                                                                    <select class="form-select" multiple aria-label="multiple select example">
                                                                        <option value="1">Jose Eduardo Gomez Padilla</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <br/>
                                                            </div>
                                                            <div className="row justify-content-center">
                                                                <div className="col-2">
                                                                    <button type="button" class="btn btn-primary btn-sm">Modificar</button>
                                                                </div>
                                                            </div>    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Actividades de la Unidad Organizativa
                                                </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <div className="row">
                                                            <div className="col-10">
                                                                <div class="form-floating mb-3">
                                                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                                        <option selected>Seleccione una opción</option>
                                                                        <option value="1">Asignar responsable a la actividad</option>
                                                                        <option value="2">Formatear disco duro</option>
                                                                        <option value="3">Instalar sistema operativo</option>
                                                                    </select>
                                                                    <label for="floatingSelect">Actividad</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-10">
                                                                <div class="form-floating mb-3">
                                                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                                        <option selected>Seleccione una opción</option>
                                                                        <option value="1">Alberto Jose Rodriguez Perez</option>
                                                                        <option value="2">Maria Alejandra Barbera Gomez</option>
                                                                        <option value="3">Jose Alejandro Velazquez Polanco</option>
                                                                    </select>
                                                                    <label for="floatingSelect">Responsable</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <br/>
                                                        </div>
                                                        <div className="row justify-content-center">
                                                            <div className="col-2">
                                                                <button type="button" class="btn btn-primary btn-sm">Agregar</button>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="row">
                                                                <div className="col">
                                                                    Lista de Actividades
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col">
                                                                    <select class="form-select" multiple aria-label="multiple select example">
                                                                        <option value="1">Instalación de antivirus</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col">
                                                                    <select class="form-select" multiple aria-label="multiple select example">
                                                                        <option value="1">Jose Eduardo Gomez Padilla</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <br/>
                                                            </div>
                                                            <div className="row justify-content-center">
                                                                <div className="col-2">
                                                                    <button type="button" class="btn btn-primary btn-sm">Eliminar</button>
                                                                </div>
                                                            </div>    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="seguimiento" role="tabpanel" >
                                <div className="container border">
                                    <div className="row">
                                        <div className="col">
                                            <table class="table table-striped table-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Orden</th>
                                                        <th scope="col">Fecha</th>
                                                        <th scope="col">Actividad</th>
                                                        <th scope="col">Unidad</th>
                                                        <th scope="col">Responsable</th>
                                                        <th scope="col">Estado</th>
                                                        <th scope="col">Detalle</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>12/04/2021</td>
                                                        <td>Instalación de antivirus</td>
                                                        <td>Soporte Técnico</td>
                                                        <td>Angel Roberto Vargas García</td>
                                                        <td>En proceso</td>
                                                        <td></td>
                                                        <td>Actividad actual</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>11/04/2021</td>
                                                        <td>Instalación de sistema operativo</td>
                                                        <td>Soporte Técnico</td>
                                                        <td>Oswaldo Antonio García Montes</td>
                                                        <td>Finalizado</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>10/04/2021</td>
                                                        <td>Asignar Requerimiento</td>
                                                        <td>Soporte Técnico</td>
                                                        <td>Yolando Isabel Pañaloza Yañez</td>
                                                        <td>Finalizado</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <br/><br/>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="infoActividad" role="tabpanel">
                                <div className="container border">
                                    <div className="row">
                                        <br/>
                                    </div>
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="row">
                                                <Textarea label="Nota" placeholder="Solución" style={{height: 150}} required="required"/>
                                            </div>
                                            <div className="row">
                                                <div class="form-check mb-3">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label class="form-check-label" for="gridCheck">
                                                        Agregar nota sólo para usuarios de la Unidad
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" class="btn btn-primary btn-sm">Agregar nota</button>
                                                </div>    
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row justify-content-end ">
                                                <div className="col-6">
                                                    <button type="button" class="btn btn-primary btn-sm">Histórico de notas</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <br/>
                                    </div>
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="row">
                                                <div className="col">
                                                    <div class="mb-3">
                                                        <label for="formFileSm" class="form-label">Adjuntar Archivo</label>
                                                        <input class="form-control form-control-sm" id="formFileSm" type="file" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="infoRequerimiento" role="tabpanel" >
                                <div className="container border">
                                    <div className="row">
                                        <div className="col-3">
                                            Descripción Original:
                                        </div>
                                        <div className="col">
                                            <div class="">
                                                <textarea class="form-control form-control-sm" id="floatingTextarea" style={{height: 100}} required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Descripción Actual:
                                        </div>
                                        <div className="col">
                                            <div class="">
                                                <textarea class="form-control form-control-sm" id="floatingTextarea" style={{height: 100}} required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Prioridad Actual:
                                        </div>
                                        <div className="col-3">
                                            <div class="">
                                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                    <option value="1" selected>Alta</option>
                                                    <option value="2">Media</option>
                                                    <option value="3">Baja</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Responsable Seguimiento:
                                        </div>
                                        <div className="col-8">
                                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                <option value="1" selected>Juan Alberto Mendoza Gonzalez</option>
                                                <option value="2">Wilfredo Jesus MArquez Colmenarez</option>
                                                <option value="3">Raul Alejandro Suarez Blanco</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Fecha para la atención:
                                        </div>
                                        <div className="col-3">
                                            <input type="text" class="form-control form-control-sm" id="floatingInput"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Archivos adjuntos:
                                        </div>
                                        <div className="col-6">
                                            <select class="form-select" multiple aria-label="multiple select example">
                                                <option value="1">Foto.jpg</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
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
                                <button type="button" class="btn btn-primary btn-sm">Atender</button>
                            </div>
                            <div className="col-4">
                                <button type="button" class="btn btn-primary btn-sm">Agregar actividad sin antender</button>
                            </div>
                            <div className="col-2">
                                <button type="button" class="btn btn-primary btn-sm">Limpiar</button>
                            </div>
                            <div className="col-2">
                                <button type="button" class="btn btn-primary btn-sm">Imprimir</button>
                            </div>
                        </div>
                        <div className="row">
                            <br/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ReqAtender;