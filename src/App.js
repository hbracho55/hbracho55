import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Encabezado from './componentes/layout/Encabezado/Encabezado';
import MenuPrincipal from './componentes/layout/MenuPrincipal/MenuPrincipal';
import PiePagina from './componentes/layout/PiePagina/PiePagina';
import Login from './componentes/formularios/Login/Login';
import Rutas from './Rutas';

const App = () => {

  return (
    <div className="app__principal">
      <Router>      
        <Switch>
          <Route path="/" component={Login} exact/>
          <div className="app__container">
            <div className="app__header"><Encabezado /></div>
            <div className="app__content">
              <div className="app__menu"><MenuPrincipal /></div>
              <Rutas />
            </div>  
            <div className="app__footer"><PiePagina /></div>
          </div>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
