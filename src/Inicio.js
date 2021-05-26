import React from 'react';
import Encabezado from './componentes/layout/Encabezado/Encabezado';
import MenuIzquierdo from './componentes/layout/MenuIzquierdo/MenuIzquierdo';
import PiePagina from './componentes/layout/PiePagina/PiePagina';
import { Link } from 'react-router-dom';
import Rutas from './Rutas';

const Inicio = () => {

  const [user, setUser] = React.useState({});

  const token = localStorage.getItem("token");
  /*fetch('http://localhost:3000/inicio',{headers: new Header({ 'Autorization': 'Bearer ${token}'})})
  .then(response => {
    if (response.ok){
      return response.json();
    }
    throw new Error("Ocurrió un error");
  })
  .then(user => setUser({user}))
  .catch(e=>console.log(e))
*/
  return (
        <div className="app__principal">
          <div className="app__container">
            <div className="app__header"><Encabezado /></div>
            <div className="app__menu"><MenuIzquierdo/></div>
            <div className="app__content">
              
            </div>  
            <div className="app__footer"><PiePagina /></div>
          </div>
        </div>
  );
}

export default Inicio
