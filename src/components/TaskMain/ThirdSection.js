import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Accordion, Card} from 'react-bootstrap'

import Eagle from '../../images/eagle_heller_small_black.svg'
import Arrow from '../../images/right_h2.svg'

function ThirdSection() {
    return (
        <div className="third-section">
            <Container className="third-section-container">
                <Row className="first-row">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h2>Популярные жизненные ситуации</h2>
                                <img src={Arrow} alt=""/>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row className="row-1">
                                        <div className="accordion-main-item accordion-main-item-1">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3>Как открыть свое дело</h3>
                                                <p>Навигатор для начинающих предпринимателей</p>
                                            </div>
                                        </div>
                                        <div className="accordion-main-item">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3>Помощь пенсионерам</h3>
                                                <p>О государственных льготах и услугах, положенных всем пенсионерам по старости, и о том, как их получить</p>
                                            </div>
                                        </div>                                    
                                    </Row>  
                                    <Row>
                                        <div className="accordion-main-item accordion-main-item-1">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3>Как выйти на страховую пенсию по старости?</h3>
                                                <p>Как выйти на страховую пенсию по старости? Вы собираетесь на пенсию? Рассказываем, как установить выплату пенсии и из чего она рассчитывается</p>
                                            </div>
                                        </div>
                                        <div className="accordion-main-item">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3>Ваши документы утеряны или украдены?</h3>
                                                <p>Вы потеряли сумку с документами или ваши вещи были украдены? Узнайте, что делать и как восстановить все документы</p>
                                            </div>
                                        </div>
                                    </Row>    
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>

                <hr/>

                <Row className="second-row">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h2>Популярные органы власти</h2>
                                <img src={Arrow} alt=""/>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row className="row-1">
                                        <div className="accordion-main-item accordion-main-item-1">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3 className="h3-small">Министерство внутренних дел</h3>
                                                <p>Штрафы ГИБДД, Регистрация граждан…</p>
                                            </div>
                                        </div>
                                        <div className="accordion-main-item">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3 className="h3-small">Министерство образования и науки</h3>
                                                <p>Запись в детский сад, Присвоение ученых званий…</p>
                                            </div>
                                        </div>                                    
                                    </Row>  
                                    <Row>
                                        <div className="accordion-main-item accordion-main-item-1">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3 className="h3-small">ГУВМ МВД России (ФМС)</h3>
                                                <p>Паспорт гражданина РФ, Заграничный паспорт…</p>
                                            </div>
                                        </div>
                                        <div className="accordion-main-item">
                                            <img src={Eagle} alt=""/>
                                            <div className="text-item">
                                                <h3 className="h3-small">Министерство здравоохранения</h3>
                                                <p>Вызов врача на дом, Запись к врачу…</p>
                                            </div>
                                        </div>
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

export default ThirdSection;