import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function Study(props) {
    return (
        <div>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Studies</BreadcrumbItem>
            </Breadcrumb>
            <p>Hi !!</p>
            <p>This is our Study</p>
            <img src="../assets/images/lewiscarrol.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Study;   