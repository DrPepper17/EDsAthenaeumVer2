import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function Contact(props) {
    return (
        <div>
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact</BreadcrumbItem>
            </Breadcrumb>

            <p>Hi !!</p>
            <p>This is our cafe</p>
            <img src="../assets/images/evergreensside.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Contact;   