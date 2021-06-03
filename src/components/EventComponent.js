import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function Event(props) {
    return (
        <div>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Events</BreadcrumbItem>
            </Breadcrumb>

            <p>Hi !!</p>
            <p>This is our Events</p>
            <img src="../assets/images/grayscalealice4.png" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Event;   