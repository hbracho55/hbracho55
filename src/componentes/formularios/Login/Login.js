import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = (props) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [mensaje, setMensaje] = React.useState("");
    
/*    const [mensaje, setMensaje] = React.useState({ mensaje: props.location.state ? props.location.state.mensaje: '',
    })
*/
    const iniciarSesion = (data) => {
        if (data.usuario !=="Administrador" && data.clave !== "12345"){
            setMensaje("Usuario o contraseña incorrecta")
        } else {
            props.history.push("/infoGeneral");
        }

       /* const consultar = {
            method: 'POST', 
            body: JSON.stringify({}),
            headers: new Headers({
                'Content-Type': 'applicaction/json' 
            })
        }
       
        fetch("http://localhost:3000/datosloginAPI", requestInfo)
        .then(response =>{
            if (response.ok){
                return response.json()
            }
            throw new Error("Login inválido...");
        })
        .then(token => {
            localStorage.setItem("token",token);
            props.history.push("/admin");
            return;
        })
        .catch(e=> {
            setMensaje(e.message);*/
    }

    return (
        <div className="login__principal">
            <br/><br/><br/>
            <div className="login__container">
                <div className="login__sesion">
                    <h3 className="login__titulo">Oficina Virtual</h3>
                    Gestiona todas tus solicitudes y ten el control de tus actividades  
                    <Card className="">
                        <form onSubmit={handleSubmit(iniciarSesion)}>
                            <Card.Body>
                                <Card.Title><i className="fas fa-user-lock login__titulo" data-bs-toggle="tooltip" data-bs-placement="top"></i> Iniciar Sesión</Card.Title>
                                <Card.Text>
                                    { mensaje !== "" ?
                                    <div className="form-floating mb-3">
                                        <Alert className="alert-danger">{mensaje}</Alert>
                                    </div>
                                    : ""
                                    }
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control form-control-sm" placeholder="Usuario" {...register("usuario", { required: true })}/>
                                        <label htmlFor="floatingInput col-form-label-sm">Usuario</label>
                                        <div className="alert-danger">
                                            {errors.usuario && <span>Este dato es requerido.</span>}
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control form-control-sm" placeholder="Contraseña" {...register("clave", { required: true })}/>
                                        <label htmlFor="floatingInput col-form-label-sm">Contraseña</label>
                                        <div className="alert-danger">
                                            {errors.clave && <span>Este dato es requerido.</span>}
                                        </div>
                                    </div>
                                </Card.Text>
                                <div className="text-center">
                                    <Button type="submit" variant="btn btn-primary btn-sm"><i className="fas fa-fingerprint" data-bs-toggle="tooltip" data-bs-placement="top"></i> Iniciar Sesión</Button>
                                </div>
                            </Card.Body>
                        </form>
                    </Card>
                </div>
                <div className="login__footer">
                    <br/><br/><br/>
                    .
                </div>
                <br/><br/><br/>
            </div>
        </div>
    );
}


export default Login;