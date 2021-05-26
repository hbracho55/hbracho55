import React from react;
import {Route, Redirect} from 'react-router-dom';

const estaAutorizado = () =>{
    if (localStorage.getItem('token') !== null){
        return true;
    }
    return false;
}

const RutaPrivada = ({Component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => estaAutorizado() ? 
            (
              <Component {...props} />
            ) : (
                <Redirect to={{
                        pathname: '/',
                        state: {message: 'Usuario no autorizado'}
                    }}
                />
            )}
        /> 
    )
}

export default RutaPrivada