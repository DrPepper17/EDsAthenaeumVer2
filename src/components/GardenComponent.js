import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function Garden(props) {
    return (
        <div>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Garden</BreadcrumbItem>
            </Breadcrumb>

            <p>Hi !!</p>
            <p>This is our Garden</p>
            <img src="../assets/images/map2.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Garden;   