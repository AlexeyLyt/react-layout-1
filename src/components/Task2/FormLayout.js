import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Navigation from '../TaskMain/Navigation';
import { Button } from 'react-bootstrap';

import { IMaskInput } from 'react-imask';

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
                                <div className="mb-3">
                                    <Form.Check
                                        custom
                                        id="1"
                                        type={'checkbox'}
                                        label={`Пункт`}
                                    />

                                    <Form.Check
                                        custom
                                        id="2"
                                        type={'checkbox'}
                                        label={`Наведение`}
                                    />

                                    <Form.Check
                                        custom
                                        id="3"
                                        defaultChecked
                                        type={'checkbox'}
                                        label={`Выбранный`}
                                    />

                                    <Form.Check
                                        custom
                                        id="4"
                                        disabled
                                        type={'checkbox'}
                                        label={`Неактивный невыбранный`}
                                    />

                                    <Form.Check
                                        custom
                                        id="5"
                                        defaultChecked
                                        disabled
                                        type={'checkbox'}
                                        label={`Неактивный выбранный`}
                                    />
                                </div>
                                <div className="mb-3">

                                    <Form.Check
                                        custom
                                        id="1-1"
                                        name="group2"
                                        type={'radio'}
                                        label={`Пункт`}
                                    />

                                    <Form.Check
                                        custom
                                        id="1-2"
                                        name="group2"
                                        type={'radio'}
                                        label={`Наведение`}
                                    />

                                    <Form.Check
                                        custom
                                        id="1-3"
                                        defaultChecked
                                        type={'radio'}
                                        label={`Выбранный`}
                                    />

                                    <Form.Check
                                        custom
                                        id="1-4"
                                        disabled
                                        type={'radio'}
                                        label={`Неактивный невыбранный`}
                                    />

                                    <Form.Check
                                        custom
                                        id="1-5"
                                        defaultChecked
                                        disabled
                                        type={'radio'}
                                        label={`Неактивный выбранный`}
                                    />

                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Register />
            </Container>
        </div>
    );
}

// eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            email: null,
            password: null,
            telephone: null,
            errors: {
                login: '',
                email: '',
                password: '',
                telephone: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'login':
                errors.login =
                    value.length < 5
                        ? 'В имени должно быть не менее 5 символов'
                        : !isNaN(value)
                            ? 'Имя не может состоять только из цифр'
                            : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Введите корректный Email!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Пароль должен содержать не менее 8 символов!'
                        : '';
                break;
            case 'telephone':
                errors.telephone =
                    value.length < 18
                    ? 'Введите корректный номер телефона'
                    : '';
                break;
            default:
        break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <Row className='second-row'>

                <Form onSubmit={this.handleSubmit} className="form-box" noValidate>
                    <Form.Group>
                        <Form.Label htmlFor="login">Ваш логин</Form.Label>
                        <Form.Control onChange={this.handleChange} name="login" type="text" placeholder="Введите логин" noValidate />
                        {errors.login.length > 0 &&
                            <Form.Text className="text-muted">{errors.login}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Ваш email</Form.Label>
                        <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Введите email" noValidate />
                        {errors.email.length > 0 &&
                            <Form.Text className="text-muted">{errors.email}</Form.Text>}
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label htmlFor="telephone">Ваш телефон</Form.Label><br></br>
                        <IMaskInput
                            className='input-telephone'
                            name="telephone"
                            mask='+{7} (000) 000-00-00'
                            onChange={this.handleChange}
                            radix="."
                            
                            unmask={true} // true|false|'typed'
                            onAccept={
                                // depending on prop above first argument is
                                // `value` if `unmask=false`,
                                // `unmaskedValue` if `unmask=true`,
                                // `typedValue` if `unmask='typed'`
                                (value, mask) => console.log(value)
                            }
                            // ...and more mask props in a guide

                            // input props also available
                            placeholder='Введите телефон'
                        />
                        {errors.telephone.length > 0 &&
                            <Form.Text className="text-muted">{errors.telephone}</Form.Text>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="password">Пароль</Form.Label>
                        <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Введите пароль" noValidate />
                        {errors.password.length > 0 &&
                            <Form.Text className="text-muted">{errors.password}</Form.Text>}
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Row>
        );
    }
}

export default FormLayout;