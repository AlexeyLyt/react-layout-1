import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import OtherImg from '../../images/Other.svg'
import SearchImg from '../../images/search.svg'
import AvatarImg from '../../images/avatar.svg'

function Navigation() {

    return (
        <Nav variant="pills" activeKey="1" onSelect="">
            <Container>
                <Row className="navigation-row">
                    <Col className="nav-1">
                        <Nav.Item>
                            <Nav.Link className="other-projects" eventKey="1" href="#/home">
                            <img src={OtherImg} alt=""/>
                                Другие сайты государства
                            </Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col className="nav-2">
                        <Nav.Item>
                            <Nav.Link className="search-nav" eventKey="2" title="Item">
                                <img src={SearchImg} alt=""/>
                                Найти
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">
                                Москва
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">
                                English
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="login-nav">
                            <img src={AvatarImg} className='nav-avatar-img'/>
                            <NavDropdown className="nav-user-dropdown" title="Личный кабинет" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                    </Col>
                </Row>
            </Container>
        </Nav>
    );
}

export default Navigation;