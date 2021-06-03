import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../css/body.css';

function Garden(props) {
    return (
        <div>
            <p>Hi !!</p>
            <p>This is our Garden</p>
            <img src="../assets/images/map2.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Garden;   