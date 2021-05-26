import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenuSecundarioCorreo from '../../layout/MenuSecundarioCorreo/MenuSecundarioCorreo'
import MenuSuperiorCorreo from '../../layout/MenuSuperiorCorreo/MenuSuperiorCorreo'
import ListaCorreos from '../ListaCorreos/ListaCorreos'
import './Correo.css';

export default function Correo() {
    return (
        <Container fluid className="correo__container">
            <div className="correo__menusuperior">
                <MenuSuperiorCorreo />
            </div>
            <div >
                <Row>
                    <Col className="correo__menusecundario">
                        <MenuSecundarioCorreo />
                    </Col>
                    <Col className="correo__lista">
                        <ListaCorreos />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
