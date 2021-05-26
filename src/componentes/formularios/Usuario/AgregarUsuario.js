import React from 'react'
import { useForm } from 'react-hook-form'

const AgregarUsuario = (props) => {

    const {register,errors,handleSubmit} = useForm();

    const onSubmit = (data, e) =>{

        props.AgregarUsuario(data);

        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input type="text" name="name" />
                <div>{errors?.name?.message}</div>
                <label>usuario</label>
                <input type="text" name="username" />
                <button>Agregar</button>
            </form>
        </div>
    )
}

export default AgregarUsuario;