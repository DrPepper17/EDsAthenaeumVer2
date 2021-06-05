import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Author() {
    return (
        <div>
            <ScrollToTopOnMount />
            
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Authors</BreadcrumbItem>
            </Breadcrumb>

            <p>Hi !!</p>
            <p>This is our Authors</p>
            <img src="../assets/images/dickens.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Author;   