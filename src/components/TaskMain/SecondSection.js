import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import ItemImg1 from '../../images/services1.png'
import ItemImg2 from '../../images/services2.png'
import ItemImg3 from '../../images/services3.png'
import ItemImg4 from '../../images/services4.png'
import ItemImg5 from '../../images/services5.png'

function SecondSection() {
    return (
        <div className="second-section">
            <Container className="second-section-container">
                {/* <Row className="align-items-center first-row"> */}
                    <Row className="row-in-row">
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Штрафы ГИБДД</h3>
                                <p>Воспользуйтесь онлайн-оплатой и настройте получение уведомлений о штрафах</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg1} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Запись на прием к врачу</h3>
                                <p>Выберите поликлинику и запишитесь к специалисту</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg2} alt=""/>
                            </div>
                        </div>
                    </Row>
                    <Row className="row-in-row">
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Извещение о состоянии лицевого <br></br>счета в ПФР</h3>
                                <p>Навигатор для начинающих предпринимателей</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg3} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Налоговая задолженность</h3>
                                <p>Узнайте состояние лицевого счета в системе обязательного пенсионного страхования</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg4} alt=""/>
                            </div>
                        </div>
                    </Row>
                    <Row className="row-in-row">
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Замена или получение паспорта</h3>
                                <p>Узнайте состояние лицевого счета в системе обязательного пенсионного страхования</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg5} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Оформление загранпаспорта <br></br>гражданина РФ</h3>
                                <p>Навигатор для начинающих предпринимателей</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg4} alt=""/>
                            </div>
                        </div>
                    </Row>
                    {/* <Col className="first-col">
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Штрафы ГИБДД</h3>
                                <p>Воспользуйтесь онлайн-оплатой и настройте получение уведомлений о штрафах</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg1} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Запись на прием к врачу</h3>
                                <p>Выберите поликлинику и запишитесь к специалисту</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg2} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex">
                            <div className="item-text">
                                <h3>Извещение о состоянии лицевого <br></br>счета в ПФР</h3>
                                <p>Навигатор для начинающих предпринимателей</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg3} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col className="second-col">
                        <div className="item-flex item-flex-2">
                            <div className="item-text">
                                <h3>Налоговая задолженность</h3>
                                <p>Узнайте состояние лицевого счета в системе обязательного пенсионного страхования</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg4} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex item-flex-2">
                            <div className="item-text">
                                <h3>Замена или получение паспорта</h3>
                                <p>Узнайте состояние лицевого счета в системе обязательного пенсионного страхования</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg5} alt=""/>
                            </div>
                        </div>
                        <div className="item-flex item-flex-2 item-flex-2-last">
                            <div className="item-text">
                                <h3>Оформление загранпаспорта <br></br>гражданина РФ</h3>
                                <p>Навигатор для начинающих предпринимателей</p>
                            </div>
                            <div className="item-pic">
                                <img src={ItemImg4} alt=""/>
                            </div>
                        </div>
                    </Col> */}
                {/* </Row> */}
                <Row className="second-row">
                    <div className="item-row">Для автомобилистов</div>
                    <div className="item-row">Медицина</div>
                    <div className="item-row">Для молодых родителей</div>
                    <div className="item-row">Для малого бизнеса</div>
                    <div className="item-row">Студентам</div>
                    <div className="item-row">Все услуги</div>
                </Row>
            </Container>
        </div>
    );

}

export default SecondSection;