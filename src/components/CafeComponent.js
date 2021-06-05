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

function Cafe() {
    return (
        <div>
            <ScrollToTopOnMount />

            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Café</BreadcrumbItem>
            </Breadcrumb>
            
            <h1 className="d-none d-md-block"> Evergreens Café</h1>
                        <h2 className="d-md-none py-3">Evergreens Café</h2>
                        <div className="media text-center">
                            <a href="https://www.emilydickinsonmuseum.org/the-museum/our-site/the-evergreens/" id="evergreens">
                                <img className="img-thumbnail" src="../assets/images/evergreens.jpg" width='80%' alt="The famed Evergreens house of Amherst Massachusettes."/></a>
                        </div>
                        <hr />

                        <p className="mr-md-3">Now what is a good book without ample amounts of coffee? Answer: Still a good book. We kid around, we know nobody reads solely for the coffee. And as avid readers, even with parched throats we all would still read on through our tomes and novellas. But hey, if you're going to be spending time with us then you migh as well stay hydrated.</p>

                        <p className="mr-md-3">That is why we here at ED's Athenaeum we are proud to offer our own inhouse coffee service, the Evergreens Café. Inspired by the <a href="https://www.emilydickinsonmuseum.org/the-museum/our-site/the-evergreens/">adult home</a> of Austin Dickinson built in 1856, our coffee shop seeks to invoke the aesthetic of the famed house's Italianate domestic architecture while serving you great coffee. Our coffee blends are crafted by our own staff and served at cost to save you every penny. Cause after all, our focus here isn't on the coffee or the money, but solely on our love of literature. The coffee is just meant as an added bonus so we strongly recommend that you try some. Afterall, you cannot read on an empty stomach.</p>

                        <div id="evergreensCarousel" className="carousel slide cafecarousel" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block h-100" src="../assets/images/coffee/evergreencoffeebar2.jpg" alt="Coffee Bar" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block h-100" src="../assets/images/coffee/coffeelounge.jpg" alt="Coffee Lounge" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block h-100" src="../assets/images/coffee/happypatron.jpg" alt="A Hapyy Patron" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#evergreensCarousel" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#evergreensCarousel" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                        </div>

                        <hr/>

                        <h2>Our Menu</h2>

                        <div className="row">
                            <div className="col order-lg-last">
                                <div className="card mx-3">
                                    <h4 className="card-header bg-success text-left">Coffee</h4>
                                    <div className="card-body bg-info">
                                        <dl className="row text-left">
                                            <dd className="col-6">American Brew</dd>
                                            <dt className="col-6">$0.75</dt>
                                            <dd className="col-6">Dark Roast</dd>
                                            <dt className="col-6">$1.00</dt>
                                            <dd className="col-6">Vanilla Mocha</dd>
                                            <dt className="col-6">$2.00</dt>
                                            <dd className="col-6">French Press</dd>
                                            <dt className="col-6">$2.00</dt>
                                            <dd className="col-6">Latte</dd>
                                            <dt className="col-6">$3.00</dt>
                                            <dd className="col-6">Iced Coffee</dd>
                                            <dt className="col-6">$3.00</dt>
                                            <dd className="col-6">Added Espresso Shot</dd>
                                            <dt className="col-6">$0.75 per shot</dt>
                                            <dd className="col-12">**All coffees come served complimentary whipped cream and your choice of chooclate or caramel syrup.</dd>
                                            <dd className="col-12">*** For simplicity, we only serve in 12 oz size cups.</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 align-self-center">
                                <div id="coffeeCarousel" className="carousel slide coffeecarousel" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block h-100" src="../assets/images/coffee/americanbrew.jpg" alt="American Brew"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">American Brew</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block h-100" src="../assets/images/coffee/darkroast.jpg" alt="Dark Roast"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">Dark Roast</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block h-100" src="../assets/images/coffee/vanillamocha.jpg" alt="Vanilla Mocha"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">Vanilla Mocha</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block h-100" src="../assets/images/coffee/frenchpress.jpg" alt="French Press"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">French press</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block h-100" src="../assets/images/coffee/latte.jpg" alt="Latte"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">Latte</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block h-100" src="../assets/images/coffee/icedcoffee.jpg" alt="Iced Coffee"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">Iced Coffee</h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block h-100" src="../assets/images/coffee/espressoshot.jpg" alt="Espresso Shot"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="align-self-bottom">Espresso</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#coffeeCarousel" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#coffeeCarousel" role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </div>
                                  
                            </div>
                        </div>

                        <div className="media mr-md-3">                            
                            <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/dancingfeatherthumbnail.jpg" alt="Illustration dancing bird."/>  
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>"Hope" is the thing with feathers -<br/>
                                    That perches in the soul -<br/>
                                    And sings the tune without the words -<br/>
                                    And never stops - at all -</q></h3>
                            </div>                        
                        </div>

                        <div className="row">
                            <div className="col order-lg-last align-self-center">
                                <div className="card mx-3 ">
                                    <h4 className="card-header bg-success text-left">Tea</h4>
                                    <div className="card-body bg-info">
                                        <dl className="row text-left">
                                            <dd className="col-4">Black</dd>
                                            <dd className="col-4">Green</dd>
                                            <dd className="col-4">Mint</dd>
                                            <dd className="col-4">Herbal </dd>
                                            <dd className="col-4">Chai </dd>
                                            <dd className="col-4">Peach</dd>
                                            <dd className="col-4">Ice Tea</dd>
                                            <dd className="col-4">Sweet Tea</dd>
                                            <dd className="col-4">Kombucha</dd>
                                            <dd className="col-6">English Breakfast</dd>
                                            <dd className="col-6">Citrus Chamomile</dd>
                                            
                                            <dt className="col-12">** All teas are $0.50</dt>
                                            <dt className="col-12">*** Hot water refills are free, however new tea bags are not.</dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="media">    
                                    <img src="../assets/images/coffee/on-the-tip-toe-of-expectation.jpg" width='90%' alt="Little girl peering over table waiting on tea time."/> 
                                </div>
                            </div>
                        </div>

                        <div className="media mr-md-3">                  
                            <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/muscipeta.jpg" alt="Illustrated red bird soaring."/>  
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>And sweetest - in the Gale - is heard -<br/>
                                    And sore must be the storm -<br/>
                                    That could abash the little Bird<br/>
                                    That kept so many warm -</q></h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col order-lg-last align-self-center">
                                <div className="card mx-3 my-4">
                                    <h4 className="card-header bg-success text-left">Non-Caffeinated</h4>
                                    <div className="card-body bg-info">
                                        <dl className="row text-left">
                                            <dd className="col-8">Apple Juice</dd>
                                            <dt className="col-4">$1.00</dt>
                                            <dd className="col-8">Orange Juice</dd>
                                            <dt className="col-4">$1.00</dt>
                                            <dd className="col-8">Cranberry Juice</dd>
                                            <dt className="col-4">$1.00</dt>
                                            <dd className="col-8">V8 Juice</dd>
                                            <dt className="col-4">$2.00</dt>
                                            <dd className="col-8">Hot Apple Cider</dd>
                                            <dt className="col-4">$2.00</dt>
                                            <dd className="col-8">Lavender Lemonade</dd>
                                            <dt className="col-4">$2.50</dt>
                                            <dd className="col-8">Hot Cocoa</dd>
                                            <dt className="col-4">$2.00</dt>
                                            <dd className="col-8">Hot Cocoa loaded w/ marshmallows and peppermint</dd>
                                            <dt className="col-4">$3.00</dt>
                                            <dd className="col-8">Old Fashioned Sasparilla</dd>
                                            <dt className="col-4">$1.50</dt>
                                            <dd className="col-8">Fresh Fruit Smoothies**</dd>
                                            <dt className="col-4">$2.50</dt>
                                            <dd className="col-8">Energy Drinks (<em>Monster, Red Bull et cetera</em>)</dd>
                                            <dt className="col-4">$2.50</dt>
                                            <dd className="col-12"><em>**pending availibility of ingredients</em></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg align-self-center">
                                <div className="media">
                                    <img className="img-thumbnail" src="../assets/images/coffee/lavenderlemonade.jpg" alt="Lavender Leonade."/>
                                </div>
                            </div>
                        </div>

                        <div className="media mr-md-3">    
                            <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/pericrocotussolaris.jpg" alt="Colorful illustrated orange and yellow birds."/>                         
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>I’ve heard it in the chillest land -<br/>
                                    And on the strangest Sea -<br/>
                                    Yet - never - in Extremity,<br/>
                                    It asked a crumb - of me.</q></h3>
                            </div>                         
                        </div>

                        <div className="row">
                            <div className="col order-lg-last align-self-center">
                                <div className="card mx-3 my-4">
                                    <h4 className="card-header bg-success text-left">Finger Foods</h4>
                                    <div className="card-body bg-info">
                                        <dl className="row text-left">
                                            <dd className="col-8">Fresh Fruit**</dd>
                                            <dt className="col-4">$1.00</dt>
                                            <dd className="col-8">Rice Cripsy Treats</dd>
                                            <dt className="col-4">$1.00</dt>
                                            <dd className="col-8">Assorted Muffins</dd>
                                            <dt className="col-4">$1.50</dt>
                                            <dd className="col-8">Kettle Chips</dd>
                                            <dt className="col-4">$1.50</dt>
                                            <dd className="col-8">Banana Nut Bread</dd>
                                            <dt className="col-4">$1.50</dt>
                                            <dd className="col-8">Large M&amp;M Cookie</dd>
                                            <dt className="col-4">$1.50</dt>
                                            <dd className="col-8">BLT Sandwich</dd>
                                            <dt className="col-4">$2.00</dt>
                                            <dd className="col-8">Ham &amp; Swiss Panini</dd>
                                            <dt className="col-4">$3.50</dt>
                                            <dd className="col-8">Bagel</dd>
                                            <dt className="col-4">$1.25</dt>
                                            <dd className="col-3"></dd>
                                            <dd className="col-5"><em>add schmear</em></dd>
                                            <dt className="col-4">$0.75</dt>
                                            <dd className="col-3"></dd>
                                            <dd className="col-5"><em>add lox</em></dd>
                                            <dt className="col-4">$1.00</dt>
                                            <dd className="col-8">Donuts***</dd>
                                            <dt className="col-4">$1.25</dt>
                                            <dd className="col-12"><em>**Pending season and availability.</em></dd>
                                            <dd className="col-12"><em>***Saturday mornings only.</em></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg align-self-center">
                                <img className="img-thumbnail" src="../assets/images/coffee/bagel.jpg" alt="Schmear Lox Bagel." />
                            </div>
                        </div>

                        <div className="media mt-5">
                            <img className="img-thumbnail" src="../assets/images/evergreensside.jpg" alt="Evergreens house sideview."/>
                        </div>

        </div>
    );
}

export default Cafe;   