import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function Author(props) {
    return (
        <div>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Authors</BreadcrumbItem>
            </Breadcrumb>
            <p>Hi !!</p>
            <p>This is our Authors</p>
            <img src="../assets/images/dickens.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Author;   