import React from 'react'
import { useForm } from 'react-hook-form';
import Toast from 'react-bootstrap/Toast';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

const FormularioBase = (props) => {

    const [datos, setDatos] = React.useState(props.arregloData);
    const [aviso, setAviso] = React.useState(false);
    const [datosForm, setDatosForm] = React.useState({id: null, idEstado:null});
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [posxpag] = React.useState(5);
    
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    
    const guardar = (data) =>{
        if (datosForm.id > 0) {
            data= {...data, id: datosForm.id, idEstado: datosForm.idEstado};
            setDatos(datos.map(dato=>(dato.id === datosForm.id ? data : dato)))
        }else{
            data.id=datos.length+1;
            data.idEstado=1;
            setDatos([...datos,data])
        }
        setAviso(true);
        reset();
        setDatosForm({id: null, idEstado: null});
    }

    const editar = (data) =>{
        setValue('nombre',data.nombre);
        /*props.camposAdicionales.map((campo) => {
            setValue('nombre',data.nombre)
            console.log("campo.nombre: ",campo.nombre)
            console.log("campo: ",campo)
        }
        )*/
        
        console.log("data: ",data);
        console.log("errors: ",errors);
        //setValue('descripcion',data.descripcion);
        setDatosForm({id: data.id, idEstado: data.idEstado});
    }
    
    const activar = (data) =>{
        data= {...data, idEstado: 1};
        setDatos(datos.map(dato=>(dato.id === data.id ? data : dato)))
        setAviso(true);
    }
    
    const inactivar = (data) =>{
        data= {...data, idEstado: 2};
        setDatos(datos.map(dato=>(dato.id === data.id ? data : dato)))
        setAviso(true);
    }
   
    const filtrar = (e) => {
        setPaginaActual(1);
        setDatos(props.arregloData.filter(dato => dato.nombre.toUpperCase().substring(0,e.target.value.length) === e.target.value.toUpperCase()))
    }
    
    const paginar = (numPagina) => setPaginaActual(numPagina); 

    const ultimapos = paginaActual * posxpag;
    const primerapos = ultimapos - posxpag; 
    const valorespagina = datos.slice(primerapos, ultimapos);

    let active = paginaActual;
    let items = [];
    for (let number = 1; number <= Math.ceil(datos.length / posxpag); number++) {
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
                    <h5 className="">{props.titulo}</h5>
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
                                        <input type="text" className="form-control form-control-sm" placeholder="Nombre" {...register("nombre", { required: true })}/>
                                        <label for="floatingInput col-form-label-sm">Nombre</label>
                                        <div className="alert-danger">
                                            {errors.nombre && <span>Este dato es requerido.</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9">
                                    {errors?.nombre?.message}
                                </div>
                            </div>
                            {props.camposAdicionales.map((campo) => (
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-floating mb-3">
                                            {campo.tipo === "textarea" && !campo.requerido ? 
                                                <textarea className="form-control form-control-sm" placeholder={campo.titulo} {...register(campo.nombre)}  style={{height: 100}}></textarea>
                                            : campo.tipo === "textarea" && campo.requerido ? 
                                                <div> 
                                                    <textarea className="form-control form-control-sm" placeholder={campo.titulo} {...register(campo.nombre, { required: true })}  style={{height: 100}}></textarea>
                                                    <div className="alert-danger">
                                                        {errors.nombre && <span>Este dato es requerido.</span>}
                                                    </div>
                                                </div>
                                            : campo.tipo === "text" && !campo.requerido ?
                                                <input type="text" className="form-control form-control-sm" placeholder={campo.titulo} {...register(campo.nombre)}/>
                                            : campo.tipo === "text" && campo.requerido ?
                                                <input type="text" className="form-control form-control-sm" placeholder={campo.titulo} {...register(campo.nombre, { required: true })}/>
                                            : campo.tipo === "select" && !campo.requerido ?
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                    <option defaultValue>Seleccione una opción</option>
                                                    {campo.opcionesSelect.map((opcion) =>
                                                        <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                                                    )}
                                                </select>
                                            : campo.tipo === "select" && campo.requerido ?
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                    <option selected>Seleccione una opción</option>
                                                    {campo.opcionesSelect.map((opcion) =>
                                                        <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
                                                    )}
                                                </select>
                                            : campo.tipo === "check" && !campo.requerido ?
                                                <div class="">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label class="form-check-label" for="gridCheck">
                                                        Registrar requerimiento como borrador
                                                    </label>
                                                </div>
                                            : campo.tipo === "check" && campo.requerido ?
                                            <div class="">
                                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                <label class="form-check-label" for="gridCheck">
                                                    Registrar requerimiento como borrador
                                                </label>
                                            </div>
                                            : <div></div>
                                            }
                                            <label htmlFor="floatingInput col-form-label-sm">{campo.titulo}</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        
                                    </div>
                                </div>
                            ))}
                            <div className="row">
                                <div className="col-9">
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            <button type="submit" id="liveToastBtn" className="btn btn-primary btn-sm">Guardar</button>
                                        </div>
                                        <div className="col-3">
                                            <button type="reset" className="btn btn-primary btn-sm" onClick={reset}>Limpiar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>
                            <div className="row">
                                <br/>
                            </div>
                            {props.mostrarLista === "true" ? 
                                <div>
                                    <div className="row">
                                        <hr/>
                                    </div>
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
                                                    <th scope="col" colSpan="4">{props.titulo_lista}</th>
                                                    <th scope="col">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    valorespagina.length > 0 ?
                                                    valorespagina.map((dato)=> 
                                                    <tr>
                                                        <td colSpan="4">{dato.nombre}</td>
                                                        <td><button type="button" onClick={()=>editar(dato)} className="btn btn-primary btn-sm ">Editar</button>{"  "}
                                                        {dato.idEstado === 1 ? 
                                                        <button type="button" onClick={()=>inactivar(dato)} className="btn btn-warning btn-sm">Inactivar</button>
                                                        : 
                                                        <button type="button" onClick={()=>activar(dato)} className="btn btn-success btn-sm">Activar</button>
                                                        }
                                                        </td>
                                                    </tr>
                                                    ) : ( 
                                                        <tr>
                                                        <td colSpan="5">{props.mensaje_sin_resgitros}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                            {paginacion}
                                        </Table>
                                    </div>
                                </div>
                            : <div></div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormularioBase
