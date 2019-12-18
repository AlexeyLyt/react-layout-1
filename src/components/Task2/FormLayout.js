import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Navigation from '../TaskMain/Navigation';

function FormLayout() {
    return (
        <div className="form-layout">
            <Navigation />
            <Container>
                <Row className="main-row">
                    <Col className="first-col">
                        <h1>Элементы выбора</h1>
                        <div className="text">
                            Элементы выбора используются при вводе данных пользователем. Чекбоксы и радобаттоны используются либо в строку либо в столбец, комбинированные сетки недопустимы. Для 2-5 пунктов лучше использовать радобаттон, для 6-30 выпадающий список, для более 30 пунктов поле ввода с подсказкой.
                        </div>
                    </Col>
                    <Col className="second-col">
                        <div className="variant">
                            <div className="desktop">Десктоп</div>
                            <div className="mobile">Мобильная версия</div>
                        </div>
                        <div className="main-form">
                            <Form className="form-box">
                                {['checkbox', 'radio'].map(type => (
                                    <div key={`custom-${type}`} className="mb-3">
                                        <Form.Check
                                            custom
                                            type={type}
                                            id={`custom-${type}`}
                                            label={`Пункт`}
                                        />

                                        <Form.Check
                                            custom
                                            type={type}
                                            id={`custom-${type}`}
                                            label={`Наведение`}
                                        />

                                        <Form.Check
                                            custom
                                            defaultChecked
                                            type={type}
                                            id={`custom-${type}`}
                                            label={`Выбранный`}
                                        />

                                        <Form.Check
                                            custom
                                            disabled
                                            type={type}
                                            id={`custom-${type}`}
                                            label={`Неактивный невыбранный`}
                                        />

                                        <Form.Check
                                            custom
                                            defaultChecked
                                            disabled
                                            type={type}
                                            id={`custom-${type}`}
                                            label={`Неактивный выбранный`}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FormLayout;