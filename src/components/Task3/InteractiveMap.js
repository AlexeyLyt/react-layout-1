// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../TaskMain/Navigation';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Select from 'react-select'
import json from './subjectrfs.json'

import { ReactComponent as Logo } from '../../images/map.svg';
import svgMap from '../../images/map.svg';

var options = [];

var s = [...document.getElementsByTagName("path")]
// console.log(s);

var coll = document.getElementsByTagName('path');
var arr = [];
for(var i = 0; i < coll.length; i++) arr.push(coll[i]);

console.log(coll);

// s.forEach(obj => {
//     obj.addEventListener("mouseover", mouseOver);
//     obj.addEventListener("mouseout", mouseOut);
// });
    
    
function mouseOver() {
    // options.forEach(obj => {
    //     let hoverId = this.s.attr('id')
    //     if(hoverId = obj.id) {
    //         console.log(obj.value)
    //     }
    // });
    console.log('hover');
}
  
function mouseOut() {
    console.log('no hover');
}

json.map((obj, i) => {

    let temp = {
        value: obj.title,
        label: obj.title,
        id: obj.id
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
                        
                        {/* <img src={Mapsvg} alt=""/> */}
                        <Logo className="main-map" />
                        {/* <Test /> */}
                        {/* <Example2 /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];

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

        if (allRegion.getElementsByClassName("my-class")) {

            var allActive = allRegion.getElementsByClassName('my-class');
            while (allActive.length) {
                allActive[0].classList.remove("my-class");
            }
            
            chosenRegion.classList.add("my-class")

            tooptips.style.top = (chosenRegion.getBoundingClientRect().top - 45) + 'px'
            tooptips.style.left = (chosenRegion.getBoundingClientRect().left - 70) + 'px'
            tooptips.style.display = 'block'
            tooptips.innerHTML = selectedOption.value

            console.log( 'Top:', chosenRegion.getBoundingClientRect().top, 'Left:', chosenRegion.getBoundingClientRect().left );
            console.log(chosenRegion.getBoundingClientRect());
            
        }

    };

    render() {
        const { selectedOption } = this.state;

        return (

            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
            
        );
    }
}


export default InteractiveMap;