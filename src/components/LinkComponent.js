import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function OutsideLinks(props) {
    return (
        <div>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Links</BreadcrumbItem>
            </Breadcrumb>

            <p>Hi !!</p>
            <p>This is our Links</p>
            <img src="../assets/images/mytoggle2.png" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default OutsideLinks;   