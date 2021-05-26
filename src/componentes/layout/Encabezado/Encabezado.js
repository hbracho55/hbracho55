import React from 'react';
import './Encabezado.css'
import { withRouter } from 'react-router';
import { Dropdown, DropdownButton, Button, Modal, ButtonGroup } from 'react-bootstrap';

function Encabezado(props) {

    const [modalSalir, setModalSalir] = React.useState(false);
    
    const cerrarSesion = () =>{
      ocultarModalSalir();
      props.history.push("/");
    }

    const mostrarModalSalir = () =>{
        setModalSalir(true);    
    }

    const ocultarModalSalir = () =>{
        setModalSalir(false);    
    }

    return (
          <div className="encabezado__container">
              <a className="navbar-brand animate__animated animate__heartBeat" href="/infogeneral" ><h3> Oficina Virtual</h3></a>
              <div>
                <input type="text" placeholder="Requerimiento" className="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              </div>
              <button className="btn btn-outline-primary btn-sm" type="submit"><i className="fas fa-search"></i></button>
              <div></div>
              <div>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example"><option defaultValue>Depto de Sistemas de Información</option></select>
              </div>
              <div></div>
              <a className="" aria-current="page" href="/listapendientes"><i className="fas fa-bell"></i><span className="badge bg-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Requerimientos pendientes">3</span></a>
              <ButtonGroup style={{borderBlockColor: 'white' }}>
                <DropdownButton variant="outline-primary" size="sm" as={ButtonGroup} title={<i className="fas fa-user" ></i>} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1" variant="outline-primary" style={{fontSize: '13px'}} size="sm">Cambiar contraseña</Dropdown.Item>
                    <Dropdown.Item eventKey="1" variant="outline-primary" style={{fontSize: '13px'}} onClick={mostrarModalSalir} size="sm">Cerrar sesion</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <Modal
                show={modalSalir}
                onHide={ocultarModalSalir}
                backdrop="static"
                keyboard={false}
                size="sm"
                scrollable={false}
            >
                <Modal.Header>
                    <Modal.Title>Cerrar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Esta seguro de cerrar la sesión?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary btn-sm" onClick={cerrarSesion}>
                        Aceptar
                    </Button>
                    <Button variant="secondary btn-sm" onClick={ocultarModalSalir}>
                        Cancelar
                    </Button>
                </Modal.Footer>
              </Modal>
          </div>
    );
  }
  
  export default withRouter(Encabezado);
  