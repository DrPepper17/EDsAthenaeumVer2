import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Study() {
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
                        <div className="graybook mr-md-3">
                            <ul className="nav nav-tabs" id="studioTabs">
                                <li className="nav-item"><a className="nav-link active" href="#redRoom" role="tab" data-toggle="tab">Crimson Room</a></li>
                                <li className="nav-item"><a className="nav-link" href="#indigoRoom" role="tab" data-toggle="tab">Indigo Room</a></li>
                                <li className="nav-item"><a className="nav-link" href="#turquoiseRoom" role="tab" data-toggle="tab">Neon Room</a></li>
                            </ul>
                            <div className="tab-content text-center">
                                <div role="tabpanel" className="tab-pane fade show active" id="redRoom">
                                    <h2>Crimson Room</h2>
                                    <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/seating.jpg" width='500' alt="Crimson Room"/>

                                    <div className="text-right">
                                        <a role="button" className="btn btn-sm btn-secondary" data-toggle="modal" id="bookCrimson">Book Study</a>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="indigoRoom">
                                    <h2>Indigo Room</h2>
                                    <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath4.jpg" width='550' alt="Indigo Room"/>

                                    <div className="text-right">
                                        <a role="button" className="btn btn-sm btn-secondary" data-toggle="modal" id="bookIndigo">Book Study</a>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="turquoiseRoom">
                                    <h2>Neon Room</h2>
                                    <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath2.jpg" width='550' alt="Turquoise Room"/>

                                    <div className="text-right">
                                        <a role="button" className="btn btn-sm btn-secondary" data-toggle="modal" id="bookNeon">Book Study</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

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
                        <div className="graybook mr-md-3">
                            <ul className="nav nav-tabs" id="conferenceTabs">
                                <li className="nav-item"><a className="nav-link active" href="#grandOak" role="tab" data-toggle="tab">Grand Oak Tree</a></li>
                                <li className="nav-item"><a className="nav-link" href="#sugarMaple" role="tab" data-toggle="tab">Sugar Maple</a></li>
                            </ul>
                            <div className="tab-content text-center">
                                <div role="tabpanel" className="tab-pane fade show active" id="grandOak">
                                    <h2>Grand Oak Tree</h2>
                                    <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath1.jpg" width='550' alt="Grand Oak Room"/>

                                    <div className="text-right">
                                        <a role="button" className="btn btn-sm btn-secondary" data-toggle="modal" id="bookOak">Book Study</a>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="sugarMaple">
                                    <h2>Sugar Maple</h2>
                                    <img className="img-thumbnail m-auto" src="../assets/images/athenaeum/cozyath6.jpg" width='550' alt="Sugar Maple Room"/>

                                    <div className="text-right">
                                        <a role="button" className="btn btn-sm btn-secondary" data-toggle="modal" id="bookMaple">Book Study</a>
                                    </div>
                                </div>
                            </div>
                        </div>

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

export default Study;   