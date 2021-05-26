import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenuSecundarioRequerimiento from '../../layout/MenuSecundarioRequerimiento/MenuSecundarioRequerimiento'
import MenuSuperiorRequerimiento from '../../layout/MenuSuperiorRequerimiento/MenuSuperiorRequerimiento'
import ListaPendientes from '../ListaPendientes/ListaPendientes'
import './Requerimiento.css';

export default function Requerimiento() {
    return (
        <Container fluid className="requerimiento__container">
            <div className="requerimiento__menusuperior">
                <MenuSuperiorRequerimiento />
            </div>
            <div >
                <Row>
                    <Col className="requerimiento__menusecundario">
                        <MenuSecundarioRequerimiento />
                    </Col>
                    <Col className="requerimiento__lista">
                        <ListaPendientes />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
