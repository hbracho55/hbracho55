import React from 'react';
//import {lista_pendientes} from "../../../datos/ListaPendientes.json";
import Card from 'react-bootstrap/Card';
import './ListaPendientes.css';
import { Col, Container, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { withRouter } from 'react-router';

function ListaPendientes(props) {
    
    return (
        <div>
            <div className="listapendientes__container">
                <div className="">
                    <br/>
                </div>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <Card>
                                <div className="card__body">
                                    <div className="card__numero"><a href="/reqatender"><span className="badge bg-danger" style={{fontSize: '14px'}}>144212</span></a> <strong>Modificación de reporte</strong></div>
                                    <div className="card__prioridad">Incidente</div>
                                    <div className="card__asunto">Se requiere agegar la columna de centro de beneficio al reporte de entregas para que se pueda saber si esta configurado bien el material</div>
                                    <div className="card__prioridad">Prioridad: Urgente</div>
                                    <div className="card__contacto">
                                        <Container className="card__contacto">
                                            <Row>
                                                <Col md="auto">
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 1000 }}
                                                        overlay={
                                                            <Popover>
                                                                <Popover.Title as="h3">Información de Usuario</Popover.Title>
                                                                <Popover.Content>
                                                                    <Row>
                                                                        <Col>Juan Andres Perez Bolivar</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col>Depto de Telecomunicaciones</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><br/></Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-envelope"/> <a href="/#">hbracho55@hotmail.com</a></Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-phone-volume"/> Teléfono interno: 12312</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-comments"/><a href="/#"> Escribir en mensajeria interna</a></Col>
                                                                    </Row>
                                                                </Popover.Content>
                                                            </Popover>}
                                                            >
                                                        <div> <i className="fas fa-id-badge" ></i> Juan Andres Perez Bolivar</div>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col md="auto"> Recibido el 01/04/2021 13:00
                                                </Col>
                                            </Row>
                                        </Container>
                                        </div>
                                    <div className="card__estado">Estado: En proceso</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <Card>
                                <div className="card__body">
                                    <div className="card__numero"><a href="/reqatender"><span className="badge bg-warning" style={{fontSize: '14px'}}>142355</span></a> <strong>Instalación de impresora</strong></div>
                                    <div className="card__prioridad">Solicitud</div>
                                    <div className="card__asunto">Se requiere instalar una impresora nueva que sea multifuncioanl en el área de Contabilidad</div>
                                    <div className="card__prioridad">Prioridad: Media</div>
                                    <div className="card__contacto">
                                        <Container className="card__contacto">
                                            <Row>
                                                <Col md="auto">
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 1000 }}
                                                        overlay={
                                                            <Popover>
                                                                <Popover.Title as="h3">Información de Usuario</Popover.Title>
                                                                <Popover.Content>
                                                                    <Row>
                                                                        <Col>Maria Alejandra Colmenarez García</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col>Depto de Contabilidad</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><br/></Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-envelope"/> <a href="/#">hbracho55@hotmail.com</a></Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-phone-volume"/> Teléfono interno: 12312</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-comments"/><a href="/#"> Escribir en mensajeria interna</a></Col>
                                                                    </Row>
                                                                </Popover.Content>
                                                            </Popover>}
                                                            >
                                                        <div> <i className="fas fa-id-badge" ></i> Maria Alejandra Colmenarez García</div>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col md="auto"> Recibido el 22/04/2021 16:20
                                                </Col>
                                            </Row>
                                        </Container>
                                        </div>
                                    <div className="card__estado">Estado: En proceso</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <Card>
                                <div className="card__body">
                                    <div className="card__numero"><a href="/reqatender"><span className="badge bg-success" style={{fontSize: '14px'}}>144212</span></a> <strong>Asesoría en funcionamiento de sistema</strong></div>
                                    <div className="card__prioridad">Solicitud</div>
                                    <div className="card__asunto">Necesito que me expliquen como puedo registrar un pedido de ventas en el sistema</div>
                                    <div className="card__prioridad">Prioridad: Baja</div>
                                    <div className="card__contacto">
                                        <Container className="card__contacto">
                                            <Row>
                                                <Col md="auto">
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 1000 }}
                                                        overlay={
                                                            <Popover>
                                                                <Popover.Title as="h3">Información de Usuario</Popover.Title>
                                                                <Popover.Content>
                                                                    <Row>
                                                                        <Col>Juan Andres Perez Bolivar</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col>Depto de Telecomunicaciones</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><br/></Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-envelope"/> <a href="/#">hbracho55@hotmail.com</a></Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-phone-volume"/> Teléfono interno: 12312</Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col><i className="fas fa-comments"/><a href="/#"> Escribir en mensajeria interna</a></Col>
                                                                    </Row>
                                                                </Popover.Content>
                                                            </Popover>}
                                                            >
                                                        <div> <i className="fas fa-id-badge" ></i> Juan Andres Perez Bolivar</div>
                                                    </OverlayTrigger>
                                                </Col>
                                                <Col md="auto">Recibido el 01/04/2021 13:00
                                                </Col>
                                            </Row>
                                        </Container>
                                        </div>
                                    <div className="card__estado">Estado: En proceso</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default withRouter(ListaPendientes)