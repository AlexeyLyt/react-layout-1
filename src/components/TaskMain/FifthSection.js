import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Accordion, Card } from 'react-bootstrap'

import Arrow from '../../images/right_h2.svg'

function FifthSection() {
    return (
        <div className="fifth-section">
            <Container className="fifth-section-container">
                <Row className="first-row">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h2>Новое на портале</h2>
                                <img src={Arrow} alt="" />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <h3>Портал Госуслуг открывает специальный раздел для партнёров</h3>
                                            <p>Как выйти на страховую пенсию по старости?Вы собираетесь на пенсию?</p>
                                            <span>31 марта 2017</span>
                                        </Col>
                                        <Col>
                                            <h3>Сформируйте и подайте электронную декларацию по форме 3-НДФЛ через Госуслуги</h3>
                                            <p>До 30 апреля 2017 года физические лица должны подать декларацию по форме…</p>
                                            <span>31 марта 2017</span>
                                        </Col>
                                        <Col className="fifth-section-col-last">
                                            <h3>Гектар земли бесплатно на Дальнем Востоке</h3>
                                            <p>Напоминаем, что для получения бесплатно 1 га земли на Дальнем Востоке в рамках государственной программы надальнийвосток.рф необходима подтвержденная...</p>
                                            <span>31 марта 2017</span>
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

export default FifthSection;