import React from 'react';
import Navigation from '../TaskMain/Navigation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Select from 'react-select'
import json from './subjectrfs.json'

import { ReactComponent as Logo } from '../../images/map.svg';


var options = [];

json.map((obj, i) => {

    let temp = {
        value: obj.title,
        label: obj.title,
        id: obj.id,
        sortId: obj.id
    }
    return (
        options.push(temp)
    );
})

// console.log(options)

function InteractiveMap() {

    return (
        <div className="map">
            <div className="tooptips">Подсказка</div>
            <Navigation />
            <Container className="container-map">
                <Row className="first-row">
                    <Col className="firts-col">
                        <Register className="select-input" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    state = {
        selectedOption: null,
        cityTitle: null,
    };

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption),
        );

        // console.log(`Option selected:`, selectedOption)

        let allRegion = document.querySelector('.main-map')
        let chosenRegion = allRegion.getElementById(selectedOption.id) 
        let tooptips = document.querySelector('.tooptips')

        // console.log(chosenRegion);

        if (allRegion.getElementsByClassName("on-select")) {

            var allActive = allRegion.getElementsByClassName('on-select');
            while (allActive.length) {
                allActive[0].classList.remove("on-select");
            }

            chosenRegion.classList.add("on-select")

            tooptips.style.top = (chosenRegion.getBoundingClientRect().top -75) + 'px'
            tooptips.style.left = (chosenRegion.getBoundingClientRect().left - 100) + 'px'
            tooptips.style.display = 'block'
            tooptips.innerHTML = selectedOption.value

            console.log('Top:', chosenRegion.getBoundingClientRect().top, 'Left:', chosenRegion.getBoundingClientRect().left);
            console.log(chosenRegion.getBoundingClientRect());

        }

    };

    onHover() {
        // console.log('hover on ALL map');

        let containerMap = document.querySelector('.main-map')
        let allPath = containerMap.querySelectorAll('path')
        let tooptips = document.querySelector('.tooptips')

        // console.log(allPath);

        allPath.forEach(path => {
            path.addEventListener("mouseover", mouseOver);
            path.addEventListener("mouseout", mouseOut);
            path.addEventListener("click", mouseClick);

            function filterId() {
                let resul = options.find(obj => {
                    return obj.sortId === Number(path.id)
                })
                // console.log(resul.value);
                tooptips.innerHTML = resul.value
            }

            function mouseOver() {
                var allActive = document.getElementsByClassName('on-select');
                while (allActive.length) {
                    allActive[0].classList.remove("on-select");
                }
                path.classList.add("my-class")
                tooptips.style.top = (path.getBoundingClientRect().top - 75) + 'px'
                tooptips.style.left = (path.getBoundingClientRect().left - 100) + 'px'
                tooptips.style.display = 'block'

                filterId()
            }
    
            function mouseOut() {
                path.classList.remove("my-class");
                if(!document.getElementsByClassName('on-select')[0]) {
                    tooptips.style.display = 'none'
                }
                
                // console.log('no hover');
            }

            function mouseClick() {
                var allActive = document.getElementsByClassName('on-select');
                while (allActive.length) {
                    allActive[0].classList.remove("on-select");
                }
                path.classList.add("on-select")

                filterId()
            }
        });      
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="map-container">
                <div className="select-block">
                    <h1>Интерактивная карта</h1>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="Выбрать регион"
                    />
                </div>
                <Logo className="main-map" onMouseEnter={this.onHover} />
            </div>
        );
    }
}

export default InteractiveMap;