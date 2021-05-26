import './MenuIzquierdo.css';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {menu} from '../../../datos/MenuIzquierdo.json';

function MenuIzquierdo() {

    return (
        <div className="">
            <Accordion defaultActiveKey="1">
                {menu.map((modulo)=>
                    <Card key={modulo.id}>
                        <Card.Header className="menu__titulo">
                            <Accordion.Toggle as={Card.Header} eventKey={String(modulo.id)}>
                                {modulo.titulo}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={String(modulo.id)}>
                            <Card.Body className="menu__body__enlaces">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav flex-column">
                                    {modulo.nodos.map((nodo)=>
                                        <li className="nav-item menu__enlace" key={nodo.id}>
                                            <a className="nav-link" key={nodo.id} href={nodo.enlace}>{nodo.nombre}</a>
                                        </li>
                                    )}
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
        </div>
    );
}

export default MenuIzquierdo;
  