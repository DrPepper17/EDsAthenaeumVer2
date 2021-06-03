import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../css/body.css';

function Author(props) {
    return (
        <div>
            <p>Hi !!</p>
            <p>This is our Authors</p>
            <img src="../assets/images/dickens.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Author;   