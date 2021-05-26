import React from 'react'
import { useForm } from 'react-hook-form';
import {productosData} from '../../../datos/productosData.json';
import Toast from 'react-bootstrap/Toast';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

const Producto = () =>{

    const [productos, setProductos] = React.useState(productosData);
    const [aviso, setAviso] = React.useState(false);
    const [productoForm, setProductoForm] = React.useState({id: null, idEstado:null});
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [posxpag] = React.useState(5);
    
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const guardar = (data) =>{
        if (productoForm.id > 0) {
            data= {...data, id: productoForm.id, idEstado: productoForm.idEstado};
            setProductos(productos.map(producto=>(producto.id === productoForm.id ? data : producto)))
        }else{
            data.id=productos.length+1;
            data.idEstado=1;
            setProductos([...productos,data])
        }
        setAviso(true);
        reset();
        setProductoForm({id: null, idEstado: null});
    }

    const editar = (data) =>{
        setValue('nombre',data.nombre);
        setValue('descripcion',data.descripcion);
        setProductoForm({id: data.id, idEstado: data.idEstado});
    }
   
    const activar = (data) =>{
        data= {...data, idEstado: 1};
        setProductos(productos.map(producto=>(producto.id === data.id ? data : producto)))
        setAviso(true);
    }
    
    const inactivar = (data) =>{
        data= {...data, idEstado: 2};
        setProductos(productos.map(producto=>(producto.id === data.id ? data : producto)))
        setAviso(true);
    }

    const filtrar = (e) => {
        setPaginaActual(1);
        setProductos(productosData.filter(producto => producto.nombre.toUpperCase().substring(0,e.target.value.length) === e.target.value.toUpperCase()))
    }
    
    const paginar = (numPagina) => setPaginaActual(numPagina); 

    const ultimapos = paginaActual * posxpag;
    const primerapos = ultimapos - posxpag; 
    const valorespagina = productos.slice(primerapos, ultimapos);

    let active = paginaActual;
    let items = [];
    for (let number = 1; number <= Math.ceil(productos.length / posxpag); number++) {
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
                <h5 className="">Producto</h5>
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
                        <div className="row">
                            <div className="col-9">
                                <div class="form-floating mb-3">
                                <textarea class="form-control form-control-sm" placeholder="Descripción" {...register("descripcion")}  style={{height: 100}}></textarea>
                                <label for="floatingInput col-form-label-sm">Descripción</label>
                            </div>
                            </div>
                            <div className="col">
                                
                            </div>
                        </div>
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
                                        <th scope="col" colSpan="4">Productos registrados</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        valorespagina.length > 0 ?
                                        valorespagina.map((producto)=> 
                                        <tr>
                                            <td colSpan="4">{producto.nombre}</td>
                                            <td><button type="button" onClick={()=>editar(producto)} className="btn btn-primary btn-sm ">Editar</button>{"  "}
                                            {producto.idEstado === 1 ? 
                                              <button type="button" onClick={()=>inactivar(producto)} className="btn btn-warning btn-sm">Inactivar</button>
                                             : 
                                              <button type="button" onClick={()=>activar(producto)} className="btn btn-success btn-sm">Activar</button>
                                            }
                                            </td>
                                        </tr>
                                        ) : ( 
                                            <tr>
                                            <td colSpan="5">No hay Productos registrados</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                {paginacion}
                            </Table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Producto
