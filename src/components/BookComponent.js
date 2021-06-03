import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import '../css/body.css';

function Book(props) {
    return (
        <div>
            <p>Book !!</p>
            <p>This is our Books</p>
            <img src="../assets/images/dickens2.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Book;   