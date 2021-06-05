import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Event() {
    return (
        <div>
            <ScrollToTopOnMount />
            
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Events</BreadcrumbItem>
            </Breadcrumb>
            
            <div className="row">
                <div className="col">
                    <h1 className="d-none d-md-block">Join Us</h1>
                    <h2 className="d-md-none pt-3">Join Us</h2>
                    <h2 className="d-none d-md-block">Have Fun</h2>
                    <h2 className="d-none d-md-block">Learn a Little</h2>
                    <h2 className="d-none d-md-block">Indulge the Mind</h2>
                    <h2 className="d-none d-md-block">Grow</h2>
                    <h3 className="d-md-none text-center">Have Fun</h3>
                    <h3 className="d-md-none text-center">Learn a Little</h3>
                    <h3 className="d-md-none text-center">Indulge the Mind</h3>
                    <h3 className="d-md-none text-center">Grow</h3>
                    <hr/>

                    <p className="mr-md-3">As part of our mission towards fostering a conductive learning environment. And out of our devotion towards the literary field. We at ED's Athenaeum go out of our way to host both regularly scheduled recreational and educational seminars.</p> 

                    <div className="media mr-md-3">   
                        <img className="img-thumbnail" src="../assets/images/birds/reddy.jpg" alt="Little Red Bird"/>                         
                        <div className="media-body align-self-center d-none d-md-block">
                            <h3><q>I felt a Funeral, in my Brain,<br/>
                                And Mourners to and fro<br/>
                                Kept treading - treading - till it seemed<br/>
                                That Sense was breaking through -</q></h3>
                        </div>
                    </div>

                    <p className="mr-md-3">We try to keep mix things up often so as to keep our offerings divoce, so make sure to check our events page often to keep in the know. But common things you might find are wine and cheese nights in the garden, live jazz music on Thursday, writing workshops on the weekends, publication seminars and even sometimes a rare book signing with a nationally aclaimed author. You never know just what you might be walking into when you come in through our doors. So be sure to check the site and visit the Athenaeum often. But like we said, we are more than just a coffee shop-book store. Our primary focus is the arts and it is our personal mission to help and assist all of you in your self-development.</p>

                    <div className="media mr-md-3">   
                        <img className="d-flex m-auto img-thumbnail order-last" src="../assets/images/birds/machaeropterus-regulus-1841-male-2fa3b9.jpg" alt="Redheaded Bird"/>                         
                        <div className="media-body align-self-center d-none d-md-block">
                            <h3><q>And when they all were seated,<br/> 
                                A Service, like a Drum -<br/>
                                Kept beating - beating - till I thought<br/>
                                My mind was going numb -</q></h3>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>

            <div className="row text-center ">
                <div className="col mr-md-5">
                    <hr/>
                    <h2>Special Events</h2>

                    <div id="accordion">
                        <div className="card">
                            <div role="tab" className="card-header">
                                <h4 className="pt-4">
                                    <a data-toggle="collapse" data-target="#walter">
                                        Life &amp; Times of Walt Whitman<br/><small>Tuesday May 11th 2021</small>
                                    </a>
                                </h4>
                                <div className="collapse" id="walter" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="text-warning text-right font-weight-bold h4">6:00 pm - 8:00 pm</div>
                                        <p>The man who penned <em>Leaves of Grass</em> and an alleged notorious tree hugger, but one of the most beautifully-written wordsmiths and poets in the English langauge and American prose and Genre, Walt Whitman is truly one of the greatest. Friday Evening join us for a lecture on the life, style, inspirations, influences and congributions of the great Walt Whitman presented by English Lit proffesor Dr Scott Alouet from our local university UNO.</p>

                                        <div className="media text-center ">   
                                            <img className="d-flex m-auto img-thumbnail ml-5" src="../assets/images/authbooks/whitman.webp" width='35%' alt="Walt Whitman"/>                         
                                            <div className="media-body align-self-center text-warning font-italic">
                                                <h5><q>I sing the body electric, <br/>
                                                    The armies of those I love engirth me and I engirth them, <br/>
                                                    They will not let me off till I go with them, respond to them, <br/>
                                                    And discorrupt them, and charge them full with the charge of the soul.</q></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div role="tab" className="card-header">
                                <h4 className="pt-4">
                                    <a className="collapsed" data-toggle="collapse" data-target="#thrones">
                                        Game of Thrones Lockin<br/><small>Friday May 28th 2021</small>
                                    </a>
                                </h4>
                                <div className="collapse" id="thrones" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="text-warning text-right font-weight-bold h4">7:00 pm - Monday</div>
                                        <p>First time we've ever done something like this before. But its the Friday before Memorial Day and you all know what that means, <strong className="text-danger bg-light">THREE DAY WEEKEND!!!!!!</strong> So to celebrate the extra day off, we are going to be marathoning through all eight seasons of HBO's masterpiece, Game of Thrones.</p>

                                        <p>If you can't stay for the whole thing, that's fine. Just show up whenever you like and stay for however long you can make the time. But for those who are fully committed, we will be starting promptly at 7:oo pm Friday evening and we'll be going through all the episodes in order from beginning to end for however long it takes (with a twenty minute restroom break ever three episoes).</p> 
                                            
                                        <p>So come on down, bring snacks, maybe even bring a cot in case you get tired. Perhaps even bring your own copies of the novels to read along. But we're planning on a fun time for all.</p>

                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/eVyxnMM3ldc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div role="tab" className="card-header">
                                <h4 className="pt-4">
                                    <a className="collapsed" data-toggle="collapse" data-target="#prophets">
                                        Prophets of Science Fiction<br/><small>Tuesday June 22nd 2021</small>
                                    </a>
                                </h4>
                                <div className="collapse" id="prophets" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="text-warning text-right font-weight-bold h4">6:00 pm - 8:00 pm</div>
                                        <p>Join us for an interesting evening as we welcome dinstingues Hollywood director Ridley Scott as he adopts his popular tv series Prophets of Science Fiction into a one night in person lecture where he discusses the greatest names in literary Science Fiction and their contributions to the field. Topics will include Arthur C Scott, HG Wells, Jules Verne, Isaac Asimov and many more.</p>

                                        <div id="scifiCarousel" className="carousel slide scificarousel m-5" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img className="d-block h-100" src="../assets/images/authbooks/ridley.jpg" alt="Ridley Scott"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5 className="align-self-bottom">Ridley of Scott</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/Clark.jpg" alt="Arthur C Clark"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5 className="align-self-bottom">Arthur C Clark</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/spaceodyssey.jpg" alt="2001 Space Odyssey"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/rama.jpg" alt="Rendezvous With Rama"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/rama2.jpg" alt="Rama II"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/rama3.jpg" alt="Rama Illustration"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block h-100" src="../assets/images/authbooks/hgwells.jpg" alt="HG Wells"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5 className="align-self-bottom">HG Wells</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/warofworlds.jpg" alt="War of the Worls"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/julesverne.jpg" alt="Jules Verne"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5 className="align-self-bottom">Jules Verne</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/20leagues.jpg" alt="20 Thousand Leagues Below the Sea"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/asimov.jpg" alt="Isaac Asimov"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5 className="align-self-bottom">Isaac Asimov</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/cavesofsteel.jpg" alt="Caves of Steel"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/robotsofdawn.jpg" alt="Robots of Dawn"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/maryshelley.jpg" alt="Mary Shelley"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h5 className="align-self-bottom">Mary Shelley</h5>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img className="d-block " src="../assets/images/authbooks/frankenstein.jpg" alt="Frankenstein"/>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#scifiCarousel" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#scifiCarousel" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-scifiCarousel="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div role="tab" className="card-header">
                                <h4 className="pt-4">
                                    <a className="collapsed" data-toggle="collapse" data-target="#self">
                                        Publishing Seminar<br/><small>Saturday July 10th 2021</small>
                                    </a>
                                </h4>
                                <div className="collapse" id="self" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="text-warning text-right font-weight-bold h4">1:00 pm - 3:00 pm</div>
                                        <p>For all our aspiring amateur writers in our congregation here at the Athenaeum dreaming of their own one day publishing success and fame, we will be howing a workshop put on by folks at both <a href="https://nebraskawriters.org"><small>Nebraska Writers Guild</small></a> and <a href="https://www.conciergemarketing.com"><small>Concierge Marketing</small></a> who will go over the entire publishing process. They will go over all the do's and dont's. How to query a literary agent. When to get a publicist. How to edit a manuscript as well as how to hire an editor. They'll cover both traditional publishing and for the adventurous, how to self-publish. For those seeking fame and publication, this seminar is a must.</p>

                                        <img src="../assets/images/authbooks/openbook.jpg" alt="An open book"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div role="tab" className="card-header">
                                <h4 className="pt-4">
                                    <a className="collapsed" data-toggle="collapse" data-target="#jk">
                                        Book Signing: JK Rowling<br/><small>Sunday October 31st 2021</small>
                                    </a>
                                </h4>
                                <div className="collapse" id="jk" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className="text-warning text-right font-weight-bold h4">12:00 pm - 3:00 pm</div>
                                        <div className="media text-center mt-5 ml-5">   
                                            <img className="d-flex m-auto img-thumbnail" src="../assets/images/authbooks/jkrowling.jpg" alt="Jk Rowling"/>                         
                                            <div className="media-body align-self-center">
                                                <p>Just in time for Spooky Season itself, this Halloween 2021 we will for three hours be lucky enough to host the queen of witchcraft and magic JK Rowling signing books and meeting fans. This is definitely our biggest highlight of the year for us here at the Athenaeum. You wont want to miss it.</p>
                                            </div>
                                        </div>
                                        <img src="../assets/images/jackolantern.png" alt="Jack-o-lantern" />
                                        <img className="img-thumbnail" src="../assets/images/authbooks/harrypotter.jpg" alt="Harry Potter"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="media mr-md-3 mt-5">   
                        <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/beytrag-zur-naturgeschichte-der-vogel-4-tafel-26-f3e388.jpg" alt="Woodpecker"/>                         
                        <div className="media-body align-self-center d-none d-sm-block">
                            <h3><q>And then a Plank in Reason, broke,<br/>
                                    And I dropped down, and down -<br/>
                                    And hit a World, at every plunge,<br/>
                                    And Finished knowing - then -</q></h3>
                        </div>
                    </div>

                    <hr />

                </div>
            </div>
    </div>
    );
}

export default Event;   