import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Contact() {
    return (
        <div>
            <ScrollToTopOnMount />
            
            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact</BreadcrumbItem>
            </Breadcrumb>

            <div className="row">
                <div className="col">
                    <h1 className="d-none d-md-block">Contact Information</h1>
                    <h2 className="d-md-none pt-3">Contact Information</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col p-md-0 align-self-center">
                    <p>So come on down and visit us. We are located right in the heart of the historical Omaha Old Market distric on Main Street that you can't miss us. If you have any quesitons, please don't hesitate to email or give us a call. All our contact info is listed below. We look forward to meeting you.</p>
                </div>
                <div className="col-md align-self-center mr-md-3">
                    <img src="../assets/images/map2.jpg" alt="location on map"/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col mr-md-3">
                    <table className="table" id="map">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" colspan="3">Contact Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Address:</th>
                                <td className="text-left text-primary" colspan="2">280 Main St, Omaha, NE 68102</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone:</th>
                                <td className="text-left" colspan="2"><a className="text-primary" href="tel:+14023397717"><i className="fa fa-phone fa-lg text-primary p-0"></i> 1-402-339-7717</a></td>
                            </tr>
                            <tr>
                                <th scope="row">Email:</th>
                                <td className="text-left" colspan="2"><a className="text-primary" href="mailto:emily@edathenaeum.com"><i className="fa fa-envelope fa-lg text-primary"></i> emily@edathenaeum.com</a></td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="3">Hours:</th>
                                <td className="text-left text-primary">Monday-Thursday</td>
                                <td className="text-left text-primary">7am-10pm</td>
                            </tr>
                            <tr>                
                                <td className="text-left text-primary">Friday, Saturday</td>
                                <td className="text-left text-primary">7am-8pm</td>
                            </tr>
                            <tr>                                   
                                <td className="text-left text-primary">Sunday</td>
                                <td className="text-left text-primary">12pm-10pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contact;   