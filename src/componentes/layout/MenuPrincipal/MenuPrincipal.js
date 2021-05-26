import React from 'react'
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap'
import {menu} from '../../../datos/MenuPrincipal.json';

export default function MenuPrincipal() {
    return (
        <div style={{width: '55px'}} className="d-flex flex-column">
            <ListGroup variant="flush">
                {menu.map((modulo)=>
                    <OverlayTrigger
                        placement="right"
                        key={modulo.id}
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip key={modulo.id} >
                                {modulo.titulo}
                            </Tooltip>}
                    >
                        <ListGroup.Item 
                            key={modulo.id}
                            action
                            href={modulo.enlace}
                        >
                            <div className="color__imagenes"><i className={modulo.imagen}></i></div>
                        </ListGroup.Item>
                    </OverlayTrigger>
                )}
            </ListGroup>
        </div>
    )
}
