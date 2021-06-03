import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../css/body.css';

function Cafe(props) {
    return (
        <div>
            <p>Hi !!</p>
            <p>This is our cafe</p>
            <img src="../assets/images/evergreens.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Cafe;   