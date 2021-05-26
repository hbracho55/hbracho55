import React from 'react';
import Encabezado from './componentes/layout/Encabezado/Encabezado';
import MenuIzquierdo from './componentes/layout/MenuIzquierdo/MenuIzquierdo';
import PiePagina from './componentes/layout/PiePagina/PiePagina';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Servicio from './componentes/formularios/Servicio/Servicio';
import Producto from './componentes/formularios/Producto/Producto';
import Actividad from './componentes/formularios/Actividad/Actividad';
import Persona from './componentes/formularios/Persona/Persona'
import InfoGeneral from './componentes/formularios/InfoGeneral/InfoGeneral'
import ReqRegistrar from './componentes/formularios/ReqRegistrar/ReqRegistrar';
import ListaPendientes from './componentes/formularios/ListaPendientes/ListaPendientes';
import ListaSolicitados from './componentes/formularios/ListaSolicitados/ListaSolicitados';
import ListaAdministrar from './componentes/formularios/ListaAdministrar/ListaAdministrar';
import ReqAtender from './componentes/formularios/ReqAtender/ReqAtender';
import OpcionesUnidad from './componentes/formularios/OpcionesUnidad/OpcionesUnidad';
import Plantilla from './componentes/formularios/Plantilla/Plantilla';
import Causa from './componentes/formularios/Causa/Causa';
import Etapa from './componentes/formularios/Etapa/Etapa';
import CatalogoCliente from './componentes/formularios/CatalogoCliente/CatalogoCliente';
import Resumen from './componentes/formularios/Resumen/Resumen';
import './Home.css';
import { Usuario } from './componentes/formularios/Usuario/Usuario';
import { UsuarioForm } from './componentes/formularios/Usuario/UsuarioForm';

const Home = () => {

  return (
    <Router>      
      <Switch>
        <div className="app__principal">
          <div className="app__container">
            <div className="app__header"><Encabezado /></div>
            <div className="app__menu"><MenuIzquierdo/></div>
            <div className="app__content">
                <Route  path="/persona" component={Persona} exact/>
                <Route  path="/servicio" component={Servicio} exact/>
                <Route  path="/producto" component={Producto} exact/>
                <Route  path="/actividad" component={Actividad} exact/>
                <Route  path="/reqregistrar" component={ReqRegistrar} exact/>
                <Route  path="/listapendientes" component={ListaPendientes} exact/>
                <Route  path="/listasolicitados" component={ListaSolicitados} exact/>
                <Route  path="/reqatender" component={ReqAtender} exact/>
                <Route  path="/infogeneral" component={InfoGeneral} exact/>
                <Route  path="/resumen" component={Resumen} exact/>
                <Route  path="/opcionesunidad" component={OpcionesUnidad} exact/>
                <Route  path="/plantilla" component={Plantilla} exact/>
                <Route  path="/causa" component={Causa} exact/>
                <Route  path="/etapa" component={Etapa} exact/>
                <Route  path="/listaadministrar" component={ListaAdministrar} exact/>
                <Route path="/" component={CatalogoCliente} exact/>
            </div>  
            <div className="app__footer"><PiePagina /></div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}


export default Home;
