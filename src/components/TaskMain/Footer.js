import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Vk from '../../images/vk.svg'
import Fb from '../../images/Fb.svg'
import Twitter from '../../images/Twitter.svg'
import Odnoklass from '../../images/Odnoklass.svg'

function Footer() {
    return (
        <div className="footer">
            <Container className="footer-container">
                <Row className="first-row">
                    <Col className="first-col">
                        <div className="telephone">
                            <span className="number">8 800 100-70-10</span>
                            <br/>
                            <span className="text">бесплатно в РФ</span>
                        </div>
                        <div className="telephone">
                            <span className="number">+7 499 550-18-39</span>
                            <br/>
                            <span className="text">по тарифам оператора</span>
                        </div>
                        <div className="telephone">
                            <span className="number">115</span>
                            <br/>
                            <span className="text">бесплатно в РФ<br/>(для звонков с мобильных телефонов)</span>
                        </div>
                        <div className="block-footer">
                            <h3>Помощь и поддержка</h3>
                            <a href="/#">Поддержка в Telegram</a>
                            <a href="/#">Частые вопросы</a>
                            <a href="/#">Новости</a>
                            <a href="/#">О защите персональных данных</a>
                            <a href="/#">Мобильные приложения</a>
                        </div>
                    </Col>
                    <Col className="second-col">
                        <div className="block-footer">
                            <h3>Обратная связь</h3>
                            <a href="/#">Оставить отзыв: support@gosuslugi.ru</a>
                        </div>
                        <div className="block-footer">
                            <h3>Полезные ресурсы</h3>
                            <a href="/#">Российская общественная инициатива</a>
                            <a href="/#">Интернет-портал правовой информации</a>
                        </div>
                        <div className="block-footer">
                            <h3>Для провайдеров услуг</h3>
                            <a href="/#">Информация по ЕСИА</a>
                            <a href="/#">Открытая платформа госуслуг</a>
                            <a href="/#">Нормативно-правовые и методические материалы</a>
                            <a href="/#">Информация о платных услугах</a>
                        </div>
                    </Col>
                    <Col className="third-col">
                        <div className="block-footer">
                            <h3>Наши проекты</h3>
                            <a href="/#">Наши проекты</a>
                            <a href="/#">Качество связи</a>
                            <a href="/#">Старый портал</a>
                            <a href="/#">Регистрация юридического лица</a>
                            <a href="/#">Контроль инвестиционных программ</a>
                            <a href="/#">Информационно-справочная система ЖКХ</a>
                            <a href="/#">Досудебное обжалование</a>
                            <a href="/#">Беженцам с Юго-Востока Украины</a>
                        </div>
                    </Col>
                </Row>

                <hr/>

                <Row className="second-row">
                    <Col className="first-col">
                        <span>Официальный интернет-портал государственных услуг, 2017 г.</span>
                    </Col>
                    <Col className="second-col">
                        <img src={Vk} alt=""/>
                        <img src={Fb} alt=""/>
                        <img src={Twitter} alt=""/>
                        <img src={Odnoklass} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;