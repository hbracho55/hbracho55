import React from 'react'
import Usuario from './Usuario'
import AgregarUsuario from './AgregarUsuario'

export const UsuarioForm = () => {

    
  const datos_usuarios = [
    {id:1,nombre: "Hector", usuario:"hbracho55"},
    {id:2,nombre: "Juan", usuario:"laura444"},
    {id:3,nombre: "Pedro", usuario:"Juan.kkk"}
  ];
  
const [usuarios, setUsuarios] = React.useState(datos_usuarios);


const AgregarUsuarios = (usuario) =>{
    usuario.id=1
    setUsuarios([
        ...usuarios, usuario
    ])
}

    return (
        <div>
            <AgregarUsuario adduser={AgregarUsuarios}/>
            <Usuario datos={usuarios}/>
        </div>
    )
}