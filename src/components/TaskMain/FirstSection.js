import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { InputGroup, DropdownButton, Dropdown, FormControl, Button, Carousel, Modal, Form } from 'react-bootstrap';

import MainLogo from '../../images/eagle_heller_small.svg'
import LoginImg from '../../images/Group_3.svg'

function FirstSection() {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="first-section">
            <Container className="first-section-container">
                <Row className="align-items-center first-row">
                    <Col>
                        <div className="flexbox-main-logo-text">
                            <div className="block-logo">
                                <img src={MainLogo} alt="" className="main-logo" />
                            </div>
                            <div className="block-text">
                                <span className="item-1">Госуслуги</span>
                                <span className="item-2">Российской федерации</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="second-col">
                        <a href="/#">Каталог услуг</a>
                        <a href="/#">Оплата</a>
                    </Col>
                </Row>

                <InputGroup className="mb-3 search-form">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Для частных лиц"
                        id="input-group-dropdown-1"
                        className="search-form-dropdown"
                    >
                        <Dropdown.Item href="/#">Action</Dropdown.Item>
                        <Dropdown.Item href="/#">Another action</Dropdown.Item>
                        <Dropdown.Item href="/#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <FormControl className="search-form-input" aria-describedby="basic-addon1"
                        placeholder="Введите запрос">
                    </FormControl>
                    <InputGroup.Append className="search-form-button">
                        <div className="box-button">
                            <Button variant="outline-secondary">Найти</Button>
                        </div>
                    </InputGroup.Append>
                </InputGroup>

                <Row className="second-row">
                    <Col>
                        <div className="img-carousel"><img src={LoginImg} alt=''/></div>
                        <Carousel
                            className="first-section-carousel"
                            interval={0}
                            touch={false}
                            controls={false}
                            fade={true}
                            slide={false}
                        >
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <h3>Как открыть свое дело</h3>
                                    <p>Новая жизненная ситуация для начинающих предпринимателей. Узнайте, какая форма бизнеса подойдет для организации вашей идеи,  как зарегистрировать и вести свое дело.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col className="second-col">
                        <div className="img-carousel"><img src={LoginImg} alt=''/></div>
                        <div className="login">
                            <h3>Вход в личный кабинет</h3>
                            <p>Войдите или зарегистрируйтесь, чтобы получить полный доступ к электронным госуслугам</p>

                            <div className="box-buttons-login">
                                <Button className="btn-1" variant="primary" onClick={handleShow}>
                                    Войти
                                </Button>

                                <Button className="btn-2" variant="primary" onClick={handleShow}>
                                    Зарегистрироваться
                                </Button>

                                <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                        </div>
                    </Col>
                </Row>

            </Container>
        </div >

    );
}

export default FirstSection;