import React from 'react'
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap'
import './MenuSuperiorCorreo.css'

export default function MenuSuperiorCorreo() {
    return (
        <Container fluid className="menusuperiorcorreo__container">
            <Row>
                <Col md="auto">
                    <Button variant="outline-primary" size="sm">Nuevo</Button>
                </Col>
                <Col md="auto">
                    <ButtonGroup>
                        <Button variant="outline-primary" size="sm">Responder</Button>
                        <Button variant="outline-danger" size="sm">Eliminar</Button>
                    </ButtonGroup>
                </Col>
                <Col md="auto">
                    <Button variant="outline-primary" size="sm">Convertir a Requerimiento</Button>
                </Col>
            </Row>
        </Container>
    )
}
