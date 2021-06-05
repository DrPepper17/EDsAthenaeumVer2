import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Book() {
    return (
        <div>
            <ScrollToTopOnMount />

            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Books</BreadcrumbItem>
            </Breadcrumb>


            <p>Book !!</p>
            <p>This is our Books</p>
            <img src="../assets/images/dickens2.jpg" class="img-fluid" alt="evergreens cafe"/>
        </div>
    );
}

export default Book;   