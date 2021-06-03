import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../css/shelf.css';

function Shelf(props) {
    return (
        <Navbar dark sticky="top" style={{backgroundImage: 'url("./assets/images/emptyshelftall3.png', backgroundRepeat: 'no-repeat', backgroundSize: '160px', backgroundPosition: 'Left' }}>
            <ul className="navbar-nav">
                <li className="nav-item active"><Link className="nav-link" to="/home"><i className="fa fa-home fa-lg" /> Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-coffee fa-lg" /> Café</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-book fa-lg" /> Books</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-key fa-lg" /> Studies</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-calendar fa-lg" /> Events</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-user-circle-o fa-lg" /> Authors</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-leaf fa-lg" /> Garden</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-volume-control-phone fa-lg" /> Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/home"><i className="fa fa-external-link fa-lg" /> Links</Link></li>
            </ul>
        </Navbar> 
    );
}

export default Shelf;