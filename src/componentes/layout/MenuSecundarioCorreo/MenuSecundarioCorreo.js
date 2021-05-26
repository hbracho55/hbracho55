import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function MenuSecundarioCorreo() {
    return (
        <div style={{width: '160px'}} className="d-flex flex-column">
            <ListGroup variant="flush" >
                    <ListGroup.Item 
                        key="1"
                        action
                        style={{ background: 'whitesmoke'}}
                    >
                        Bandeja de entrada
                    </ListGroup.Item>
                    <ListGroup.Item 
                        key="2"
                        action
                        style={{ background: 'whitesmoke'}}
                    >
                        Enviados
                    </ListGroup.Item>
                    <ListGroup.Item 
                        key="3"
                        action
                        style={{ background: 'whitesmoke'}}
                    >
                        Eliminados
                    </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
