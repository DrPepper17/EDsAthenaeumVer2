import React, { Component, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
}

const activeBook = 'url("../assets/images/dickens2.jpg")'

class StudyTabs extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1',
        tabCrim: activeBook,
        tabInd: '',
        tabNeon: ''
      };
    }
  
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

    toggleCrimson(tab) {
        this.toggle(tab);
        this.setState({
            tabCrim: activeBook,
            tabInd: '',
            tabNeon: ''
        });
    }

    toggleIndigo(tab) {
        this.toggle(tab);
        this.setState({
            tabCrim: '',
            tabInd: activeBook,
            tabNeon: ''
        });
    }

    toggleNeon(tab) {
        this.toggle(tab);
        this.setState({
            tabCrim: '',
            tabInd: '',
            tabNeon: activeBook
        });
    }

    render() {
        return (
            <div className="grayBook" style={{backgroundImage: 'url("../assets/images/grayscalealice4.png")'}}>
                <Nav tabs id="studioTabs">
                    <NavItem>
                        <NavLink style={{backgroundImage: this.state.tabCrim}} className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleCrimson('1'); }} >
                            Crimson Room
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundImage: this.state.tabInd}} className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleIndigo('2'); }} >
                            Inidigo Room
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundImage: this.state.tabNeon}} className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggleNeon('3'); }} >
                            Neon Room
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1" id="crimsonRoom">
                        <h2>Crimson Room</h2>
                        <Col>
                            <Row>                   
                                <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/seating.jpg" width='500' alt="Crimson Room"/>
                            </Row>
                            <Row>
                                <a role="button" className="btn btn-sm btn-secondary ml-auto my-3 mr-3">Book Study</a>
                            </Row>
                        </Col>
                    </TabPane>
                    <TabPane tabId="2" id="indigoRoom">
                        <h2>Indigo Room</h2>
                        <Col>
                            <Row>
                                <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath4.jpg" width='550' alt="Indigo Room"/>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="text-right">
                                <a role="button" className="btn btn-sm btn-secondary ml-auto my-3 mr-3">Book Study</a>
                            </Row>
                        </Col>
                    </TabPane>
                    <TabPane tabId="3" id="neonRoom">
                        <h2>Neon Room</h2>
                        <Col>
                            <Row>   
                                <img className="img-humbnail m-auto" src="../assets/images/athenaeum/cozyath2.jpg" width='550' alt="Turquoise Room"/>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="text-right">
                                <a role="button" className="btn btn-sm btn-secondary ml-auto my-3 mr-3">Book Study</a>
                            </Row>
                        </Col>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

class GroupStudyTabs extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTabB: '1',
        tabOak: activeBook,
        tabSugar: '',
      };
    }
  
    toggle(tab) {
      if (this.state.activeTabB !== tab) {
        this.setState({
          activeTabB: tab
        });
      }
    }

    toggleOak(tab) {
        this.toggle(tab);
        this.setState({
            tabOak: activeBook,
            tabSugar: '',
        });
    }

    toggleSugar(tab) {
        this.toggle(tab);
        this.setState({
            tabOak: '',
            tabSugar: activeBook,
        });
    }

    render() {
        return (
            <div className="grayBook" style={{backgroundImage: 'url("../assets/images/grayscalealice4.png")'}}>
                <Nav tabs id="groupStudio">
                    <NavItem>
                        <NavLink style={{backgroundImage: this.state.tabOak}} className={classnames({ active: this.state.activeTabB === '1' })} onClick={() => { this.toggleOak('1'); }} >
                            Grand Oak Tree
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundImage: this.state.tabSugar}} className={classnames({ active: this.state.activeTabB === '2' })} onClick={() => { this.toggleSugar('2'); }} >
                            Sugar Maple
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTabB}>
                    <TabPane tabId="1" id="grandOak">
                        <h2>Grand Oak Tree</h2>
                        <Col>
                            <Row>                   
                                <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath1.jpg" width='500' alt="Crimson Room"/>
                            </Row>
                            <Row>
                                <a role="button" className="btn btn-sm btn-secondary ml-auto my-3 mr-3">Book Study</a>
                            </Row>
                        </Col>
                    </TabPane>
                    <TabPane tabId="2" id="sugarMaple">
                        <h2>Sugar Maple</h2>
                        <Col>
                            <Row>
                                <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath6.jpg" width='550' alt="Indigo Room"/>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="text-right">
                                <a role="button" className="btn btn-sm btn-secondary ml-auto my-3 mr-3">Book Study</a>
                            </Row>
                        </Col>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

class Study extends Component {
    render() {
        return (
            <div>
                <ScrollToTopOnMount />
                
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Studies</BreadcrumbItem>
                </Breadcrumb>

                
                <h1 className="d-none d-md-block">Private Studies</h1>
                <h2 className="d-md-none pt-3">Private Studies</h2>
                <hr/>
            
                <p>Studying for end of semester finals? </p>
                <p>Conducting Research for a paper?</p>
                <p>Doing homework?</p>
                <p>Working on a business proposal?</p>
                <p>Practicing the trombone?</p>
                <p>Conducting a meeting?</p>
                <p>Working on a group project?</p>
                <p className="mr-md-3">Got a terrible migraine that you just need a quiet place to rest your head a little?</p>
                <p className="mr-md-3">Whatever your situation we got you covered. For those needing a little bit more peace and quiet or privacy and sensitity our private study rooms are just what you need. Book yours from this page right and just come on in. We have both small rooms for individuals small group use as well as large conference rooms for larger assemblies of people. All rooms furnished with a computer, wall projector and an adapter cables for most commonly sold laptps. And these aren't your typical university conference rooms either with their unbearably uncomfortable office chairs and ghastly unsightly vague neutered aesthetic. No, ours have the most comfiest sofas and furniture, ornately designed walls and decor. When you walk in you would think you were in a 1700s Parisian salon rather than a boring meeting room. Which is probably just the way our patron saint Emily would have liked it.</p>

                <h2>Individual Studies</h2>

               <StudyTabs />
                
                <div className="media mr-md-3">   
                    <img className="img-thumbnail" src="../assets/images/birds/parus-rubidiventris-d0626a.jpg" alt="Illustrated songbirds."/>                         
                    <div className="media-body align-self-center d-none d-md-block">
                        <h3><q>The Bustle in a House<br/>
                            The Morning after Death<br/>
                            Is solemnest of industries<br/>
                            Enacted opon Earth –</q></h3>
                    </div>
                </div>

                <h2>Group Studies</h2>
                
                <GroupStudyTabs />

                <div className="media mr-md-3">    
                    <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/bluejay.jpg" alt="Illustrated Bluejay."/>                        
                    <div className="media-body align-self-center d-none d-md-block">
                        <h3><q>The Sweeping up the Heart<br/>
                            And putting Love away<br/>
                            We shall not want to use again<br/>
                            Until Eternity –</q></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Study;   