import React from 'react';
import { useForm } from 'react-hook-form';
import {serviciosData} from '../../../datos/serviciosData.json';
import Toast from 'react-bootstrap/Toast';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

const Servicio = () => {

    const [servicios, setServicios] = React.useState(serviciosData);
    const [aviso, setAviso] = React.useState(false);
    const [servicioForm, setServicioForm] = React.useState({id: null, idEstado:null});
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [posxpag] = React.useState(5);
    
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const guardar = (data) =>{
        if (servicioForm.id > 0) {
            data= {...data, id: servicioForm.id, idEstado: servicioForm.idEstado};
            setServicios(servicios.map(servicio=>(servicio.id === servicioForm.id ? data : servicio)))
        }else{
            data.id=servicios.length+1;
            data.idEstado=1;
            setServicios([...servicios,data])
        }
        setAviso(true);
        reset();
        setServicioForm({id: null, idEstado: null});
    }

    const editar = (data) =>{
        setValue('nombre',data.nombre);
        setValue('descripcion',data.descripcion);
        setServicioForm({id: data.id, idEstado: data.idEstado});
    }
   
    const productos = (data,e) =>{
        //mostrarModalProductos();
    }
    
    const activar = (data) =>{
        data= {...data, idEstado: 1};
        setServicios(servicios.map(servicio=>(servicio.id === data.id ? data : servicio)))
        setAviso(true);
    }
    
    const inactivar = (data) =>{
        data= {...data, idEstado: 2};
        setServicios(servicios.map(servicio=>(servicio.id === data.id ? data : servicio)))
        setAviso(true);
    }

    const filtrar = (e) => {
        setPaginaActual(1);
        setServicios(serviciosData.filter(servicio => servicio.nombre.toUpperCase().substring(0,e.target.value.length) === e.target.value.toUpperCase()))
    }

    const paginar = (numPagina) => setPaginaActual(numPagina); 

    const ultimapos = paginaActual * posxpag;
    const primerapos = ultimapos - posxpag; 
    const valorespagina = servicios.slice(primerapos, ultimapos);

    let active = paginaActual;
    let items = [];
    for (let number = 1; number <= Math.ceil(servicios.length / posxpag); number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>paginar(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginacion = (
        <div>
          <Pagination size="sm">{items}</Pagination>
        </div>);

    return (
        <div>
            <div className="animate__animated animate__zoomInDown">
                <div className="">
                    <h5 className="">Servicio</h5>
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
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control form-control-sm" placeholder="Nombre" {...register("nombre", { required: true })}/>
                                                <label for="floatingInput col-form-label-sm">Nombre</label>
                                                <div className="alert-danger">
                                                    {errors.nombre && <span>Este dato es requerido.</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div class="form-floating mb-3">
                                                <textarea class="form-control form-control-sm" placeholder="Descripción" {...register("descripcion")}  style={{height: 100}}></textarea>
                                                <label for="floatingInput col-form-label-sm">Descripción</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row justify-content-center">
                                                <div className="col-3">
                                                    <button type="submit" id="liveToastBtn" className="btn btn-primary btn-sm">Guardar</button>
                                                </div>
                                                <div className="col-3">
                                                    <button type="reset" className="btn btn-primary btn-sm" onClick={reset}>Limpiar</button>
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
                                </div>
                                <div className="col">
                                    <div className="row justify-content-end">
                                        <div className="col-1">
                                            Buscar    
                                        </div>
                                        <div className="col-3">
                                            <input onChange={filtrar} type="text" placeholder="" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>    
                                        </div>
                                    </div>
                                    <div className="table-responsive-sm">
                                        <Table striped hover responsive="sm" size="sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col" colSpan="4">Servicios registrados</th>
                                                    <th scope="col">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    valorespagina.length > 0 ?
                                                    valorespagina.map((servicio)=> 
                                                    <tr>
                                                        <td colSpan="4">{servicio.nombre}</td>
                                                        <td><button type="button" onClick={()=>editar(servicio)} className="btn btn-primary btn-sm ">Editar</button>{"  "}
                                                        <button type="button" onClick={productos} className="btn btn-primary btn-sm ">Productos</button>{"  "}
                                                        {servicio.idEstado === 1 ? 
                                                        <button type="button" onClick={()=>inactivar(servicio)} className="btn btn-warning btn-sm">Inactivar</button>
                                                        : 
                                                        <button type="button" onClick={()=>activar(servicio)} className="btn btn-success btn-sm">Activar</button>
                                                        }
                                                        </td>
                                                    </tr>
                                                    ) : ( 
                                                        <tr>
                                                        <td colSpan="5">No hay Servicios registrados</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                            {paginacion}
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicio
