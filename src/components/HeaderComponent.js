import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid style={{ backgroundImage: `url("../assets/images/jumbo.jpg")` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <NavbarBrand href="/home"><img src="../assets/images/emilydaguero.png" fluid alt="Emily Dickinson Daguerreotype"/></NavbarBrand>
                            </div>
                            <div className="col-md align-self-center text-center">
                                <h1 className="d-none d-md-block">ED's Athenaeum</h1>
                                <h2 className="d-md-none">ED's Athenaeum</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
    
                <Navbar dark sticky="top" className="d-md-none" style={{ backgroundImage: `url("../assets/images/grayscalealice4.png")`, backgroundSize: 'contain'}} id="microNavbar">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} id="togButton" className="ml-auto">
                            <img src="../assets/images/mytoggle2.png" height='30'  />
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg" /> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/cafe"><i className="fa fa-coffee fa-lg" /> Café</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/book"><i className="fa fa-book fa-lg" /> Books</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/study"><i className="fa fa-key fa-lg" /> Studies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/event"><i className="fa fa-calendar fa-lg" /> Events</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/author"><i className="fa fa-user-circle-o fa-lg" /> Authors</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/garden"><i className="fa fa-leaf fa-lg" /> Garden</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"><i className="fa fa-volume-control-phone fa-lg" /> Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/outsidelinks"><i className="fa fa-external-link fa-lg" /> Links</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;