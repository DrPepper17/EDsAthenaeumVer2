import React from 'react';

import '../css/body.css';

function Home(props) {
    return (
        <div className="my-5">
            <h1 className="d-none d-md-block">Welcome</h1>
                        <h2 className="d-md-none pt-3">Welcome</h2>
                        <hr/>

                        <h2 className="d-none d-md-block">About Us</h2>
                        <h3  className="d-md-none">About Us</h3>
                        <p className="mr-md-3">Hello there, and welcome, to ED's Athenaeum. And what is an Athenaeum you might ask? Well good question. As according to the Meriam Webster's Dictionary, dating back to 1799, which is close to the time our beloved Emily once roamed and verywell therefore may have been commonly spoken by her own lips, an Athenaeum is defined as <q>a building or room in which books, periodicals, and newspapers are kept for use; [often of] literary or scientific association</q>. </p>

                        <div className="media mr-md-3">
                            <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/lark.jpg" alt="Illustration of Skylark feeding its young."/>                            
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>Split the Lark - and You'll find the Music -<br/>
                                    Bulb after Bulb, in Silver rolled -</q></h3>
                            </div>
                        </div>

                        <p className="mr-md-3">Or in more simpler terms, a glorified library. Though no not your typical local neighborhood public library of your childhood but rather a prestigious instituion of high stature where the virtues of intellectual stimuliation, philsophical understanding and the persuit of knowledge are both celebrated and promoted to the highest pedestal. It is a place where inquisitive minds and eternal-scholars gather.</p>
                        

                        <div className="media mr-md-3">                            
                            <img className="img-thumbnail" src="../assets/images/birds/nyctiornis.jpg" alt="Colorful bird catching a bug."/>
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>Scantily dealt to the Summer Morning<br/>
                                    Saved for your Ear, when Lutes be old -</q></h3>
                            </div>                          
                        </div>

                        <p className="mr-md-3">Here at ED's Athenaeum we seek to be a refuge and a safe haven for all those curious old souls, hopeless romantics, vagabond artists and beatnicks poets. We are both a place and a nurturing community where all those of inquisitive minds meet to puruse their goals and further their acumen under our shared unified love of literature.</p>

                        <div className="media mr-md-3">                            
                            <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/halycon.jpg" alt="Illustrated blue bird flying above a marsh."/>
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>Loose the Flood - you shall find it patent -<br/>
                                    Gush after Gush, reserved for you -</q></h3>
                            </div>                    
                        </div>

                        <p className="mr-md-3">Sure we may appear as just another typical coffee shop and small retail book store in the front, we promise we are much more than that. The coffee is only secondary, our love of good books comes first. Come on in deeper into our little time capsule and you'll discover a vault of book shelves stretching as far as the eye can see. Every wall and every spot spare of furniture has been consumed by shelves stocked full of all the literary classics. Whether it be Herman Melville or Walt Whitman, whoever is your favorite, we got them. So feel free to walk on in, grab your favorite novelist off the shelf and squat down in one of our cozy little spots and proceed to read.</p>

                        <div className="media mr-md-3">                            
                            <img className="img-thumbnail" src="../assets/images/birds/jennywren.jpg" alt="Illustrated bird caught a dragonfly."/>
                            <div className="media-body align-self-center d-none d-md-block">
                                <h3><q>Scarlet Experiment! Sceptic Thomas!<br/>
                                    Now, do you doubt that your Bird was True?</q></h3>
                            </div>                          
                        </div>

                        <p className="mr-md-3">Despite our labrynthe of quaint dusty old shelves, you would never susepect it but our Athenaeum is also filled to the brim with most coziest old sofas, stools, beanbag chairs and soft blankets available for you to hunker down and get lost into your book. Virtually any corner can become your secret little hiding spot to read undisterbed.</p> 

                        <div className="media">                            
                            <img className="img-thumbnail" src="../assets/images/athenaeum/cozyath3.jpg" width='70%' alt="Cozy reading space above a secret window."/> 
                        </div>
                        
                        <p className="mr-md-3">But if a secluded nook close to an an always lit fireplace is not for you and you feel like you need a little bit of fresh air, then feel free to just sneak out back door and immerse yourself in our beautiful garden and patio. Whether reading under the shade of a tree or writing poetry from the middle of the rose, our English style garden will rejuvenate and inspire you.</p>

                        <div className="media">                            
                            <img className="img-thumbnail" src="../assets/images/garden/garden1.jpg" width='70%' alt="Garden Bench."/> 
                        </div>

                        <p className="mr-md-3">However if you're not in the mood to read out amongst the public or a little bit more privacy is needed, we do provide private study rooms. These rooms are great for if you are conducting research or working on a personal or collaborative project. We offer both small single individual study rooms as well as larger group sized conference rooms that can be reserved in advance orline or checked out in person on a first come first serve basis. Just come to the front desk and a staff member will be sure to help you out. Our study and conference rooms provide all modern utilities available at your convenience.</p>

                        <div className="media">                   
                            <img className="img-thumbnail" src="../assets/images/athenaeum/cozyath1.jpg" width='70%' alt="Small studio."/> 
                        </div>
                        
                        <p className="mr-md-3">Lasty, thanks for visiting out our site. Be sure to come on down sometime and check us out. The fire is warm, the bookshelves are packed, and there is plenty of delicious coffee to get you through you your day. So come on down, come participate in one of our literary workshops, we look forward to meeting you, you never know just what you will find.</p>
                        
                        <div className="media">                            
                            <img className="img-thumbnail" src="../assets/images/athenaeum/fireplace.jpg" width='70%' alt="Fireplace."/> 
                        </div>
            
        </div>
    );
}

export default Home;   