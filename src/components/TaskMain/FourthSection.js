import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Accordion, Card } from 'react-bootstrap'

import Arrow from '../../images/right_h2.svg'
import AddCross from '../../images/AddBlack.svg'

function FourthSection() {
    return (
        <div className="fourth-section">
            <Container className="fourth-section-container">
                <Row className="first-row">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h2>Популярные вопросы</h2>
                                <img src={Arrow} alt="" />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Accordion className="accordion-in">

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h3>Как записаться на прием к врачу
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>Hello! I'm the body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                                        <h3>Как узнать о наличии налоговой задолженности
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="1">
                                                        <Card.Body>Hello! I'm another body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                                        <h3>Как записаться на прием к врачу
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="2">
                                                        <Card.Body>Hello! I'm another body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                                        <h3>Как узнать о наличии налоговой задолженности
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="3">
                                                        <Card.Body>Hello! I'm another body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                            </Accordion>
                                        </Col>
                                        <Col>
                                            <Accordion className="accordion-in">

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <h3>Зачем нужен Личный кабинет
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>Hello! I'm the body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                                        <h3>Как узнать о наличии налоговой задолженности
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="1">
                                                        <Card.Body>Hello! I'm another body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                                        <h3>Зачем нужен Личный кабинет
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="2">
                                                        <Card.Body>Hello! I'm another body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                                        <h3>Как узнать о наличии налоговой задолженности
                                                            <img src={AddCross} alt="" />
                                                        </h3>
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="3">
                                                        <Card.Body>Hello! I'm another body</Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>

                                            </Accordion>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>
            </Container>
        </div>
    );
}

export default FourthSection;