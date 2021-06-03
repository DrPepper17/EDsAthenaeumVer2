import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import '../css/shelf.css';

function Shelf(props) {
    return (
        <Navbar dark sticky="top" style={{backgroundImage: 'url("./assets/images/emptyshelftall3.png', backgroundRepeat: 'no-repeat', backgroundSize: '160px', backgroundPosition: 'Left' }}>
            <ul className="navbar-nav">
                <li className="nav-item active"><NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg" /> Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/cafe"><i className="fa fa-coffee fa-lg" /> Café</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/book"><i className="fa fa-book fa-lg" /> Books</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/study"><i className="fa fa-key fa-lg" /> Studies</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/event"><i className="fa fa-calendar fa-lg" /> Events</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/author"><i className="fa fa-user-circle-o fa-lg" /> Authors</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/garden"><i className="fa fa-leaf fa-lg" /> Garden</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact"><i className="fa fa-volume-control-phone fa-lg" /> Contact</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/outsidelinks"><i className="fa fa-external-link fa-lg" /> Links</NavLink></li>
            </ul>
        </Navbar> 
    );
}

export default Shelf;