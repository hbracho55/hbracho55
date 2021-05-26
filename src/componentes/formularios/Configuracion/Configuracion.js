import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenuSecundarioConfiguracion from '../../layout/MenuSecundarioConfiguracion/MenuSecundarioConfiguracion'
import Servicio from '../Servicio/Servicio'
import './Configuracion.css';

export default function Configuracion() {
    return (
        <Container fluid className="configuracion__container">
            <div >
                <Row>
                    <Col className="configuracion__menusecundario">
                        <MenuSecundarioConfiguracion />
                    </Col>
                    <Col className="correo__lista">
                        <Servicio />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}