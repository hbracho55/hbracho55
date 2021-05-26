import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './MenuSuperiorRequerimiento.css'

export default function MenuSuperiorRequerimiento() {
    return (
        <Container fluid className="menusuperiorrequerimiento__container">
            <Row>
                <Col xs="auto">
                    Requerimientos
                    </Col>
                <Col xs="auto">
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option defaultValue>Pendientes</option>
                        <option >Solicitados</option>
                        <option >No asignados</option>
                    </select>
                </Col>
            </Row>
        </Container>
    )
}
