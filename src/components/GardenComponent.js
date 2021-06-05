import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Garden() {
    return (
        <div>
            <ScrollToTopOnMount />
            
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Garden</BreadcrumbItem>
            </Breadcrumb>

            <h1 className="d-none d-md-block">Our Garden &amp; Patio</h1>
            <h2 className="d-md-none pt-3">Our Garden &amp; Patio</h2>
            <hr/>

            <p className="mr-md-3">Now everyone knows that Emily Dickinson, our patron saint and muse behind the Athenaeum, was a first class and famous poet. But lesser known she was also an avid gardener, having all her life maintatined large flower garden on her family's estate in Amherst, Massachusettes.</p>

            <p className="mr-md-3">Inspired by this little lesser known tidbit, we here at ED's Athenaeum have opened up our back lot to the public and landscaped it into a beautiful English garden, featuring lots of trees, a pond and all the flowers that Emaily would have planted. So if the weather's nice, then do please come outside, it's the perfect calm, serene and peaceful place to get away from the world and pursue your own passions.</p>

            <div className="media mr-md-3">   
                <img className="d-flex m-auto img-thumbnail" src="../assets/images/birds/hummer-the-ruby-throated-hummingbird-b3ebc1.jpg" alt="Illustrated Humming Bird"/>                         
                <div className="media-body align-self-center d-none d-md-block">
                    <h3><q>Because I could not stop for Death – <br/>
                    He kindly stopped for me – <br/>
                    The Carriage held but just Ourselves – <br/>
                    And Immortality.</q></h3>                
                </div>
            </div>
                        
            <div className="media">
                <img className="img-thumbnail" src="../assets/images/garden/garden2.jpg" width='80%' alt="Stone Path."/>
            </div>

            <div className="media mr-md-3">   
                <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/spooky-the-screech-owl-d62027.jpg" alt="Illustrated Sleeping Owl"/>                         
                <div className="media-body align-self-center d-none d-md-block">
                    <h3><q>We slowly drove – He knew no haste<br/>
                        And I had put away<br/>
                        My labor and my leisure too,<br/>
                        For His Civility – </q></h3>
                </div>
            </div>

            <div className="media">
                <img className="img-thumbnail" src="../assets/images/garden/garden3.jpg" width='80%' alt="Garden Arch."/>
            </div>

            <div className="media mr-md-3">   
                <img className="img-thumbnail" src="../assets/images/birds/snowflake-the-snow-bunting-wanderer-the-horned-lark-0c6acd.jpg" alt="Illustrated Birds in Snow"/>                         
                <div className="media-body align-self-center d-none d-md-block">
                    <h3><q>We passed the School, where Children strove<br/>
                        At Recess – in the Ring – <br/>
                        We passed the Fields of Gazing Grain – <br/>
                        We passed the Setting Sun – </q></h3>
                </div>
            </div>

            <div className="media">
                <img className="img-thumbnail" src="../assets/images/garden/garden7.jpg" width='80%' alt="Water Feature."/>
            </div>

            <div className="media mr-md-3">   
                <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/rusty-crow-blackbird-1-male-2-female-3-young-black-haw-b4811c.jpg" alt="Illustrated Blackbird"/>                         
                <div className="media-body align-self-center d-none d-md-block">
                    <h3><q>Or rather – He passed us – <br/>
                        The Dews drew quivering and chill – <br/>
                        For only Gossamer, my Gown – <br/>
                        My Tippet – only Tulle – </q></h3>
                </div>
            </div>

            <div className="media">
                <img className="img-thumbnail" src="../assets/images/garden/garden6.jpg" width='80%' alt="Garden Bench."/>
            </div>

            <div className="media mr-md-3">   
                <img className="img-thumbnail" src="../assets/images/birds/the-crow-and-the-pitcher-project-gutenberg-etext-19994-1d5ab7.jpg" alt="Illustrated Crow"/>                         
                <div className="media-body align-self-center d-none d-md-block">
                    <h3><q>We paused before a House that seemed<br/>
                        A Swelling of the Ground – <br/>
                        The Roof was scarcely visible – <br/>
                        The Cornice – in the Ground –</q></h3>
                </div>
            </div>

            <div className="media">
                <img className="img-thumbnail" src="../assets/images/garden/garden4.jpg" width='80%' alt="Garden Hedge."/>
            </div>

            <div className="media mr-md-3">   
                <img className="img-thumbnail order-last ml-md-3" src="../assets/images/birds/warbler.jpg" alt="Illustrated Warbler."/>                         
                 <div className="media-body align-self-center d-none d-md-block">
                    <h3><q>Since then – 'tis Centuries – and yet<br/>
                        Feels shorter than the Day<br/>
                        I first surmised the Horses' Heads<br/>
                        Were toward Eternity – </q></h3>
                </div>
            </div>

            <div className="media">
                <img className="img-thumbnail" src="../assets/images/garden/garden5.jpg" width='80%' alt="Poppies and Flowers."/>
            </div>            
        </div>
    );
}

export default Garden;   