import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                    <div className="row m-5" id="footer">             
                        <div className="col">
                            <p><u><strong>Hours:</strong></u><br/>
                                <div className="text-right">
                                <em>Monday thru Thursday: 7 am - 10 pm<br/>
                                Friday, Saturday: 7 am - 8 pm<br/>
                                Sunday: 12 pm - 10 pm</em></div></p>
                            <p><u><strong>Address:</strong></u><br/>
                                <div className="text-right"><em>280 Main St, Omaha, NE 68102</em></div></p>
                        </div>
                        <div className="col-md-6">
                            <p><u><strong>Contact:</strong></u></p>  
                            <div className="text-center">
                                <a role="button" class="btn btn-link" href="tel:+14023397717"><i className="fa fa-phone fa-lg text-primary"> 1-402-339-7717</i></a><br />
                                <a role="button" class="btn btn-link" href="mailto:emily@edathenaeum.com"><i className="fa fa-envelope fa-lg text-primary" > emily@edathenaeum.com</i></a><br/>
                                <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/emilydickinson.museum/"><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/emily.dickinson.museum/"><i className="fa fa-facebook" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/e_dickinson/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=55kqNg88JqI"><i className="fa fa-youtube" /></a>{' '}
                            </div>                    
                        </div>
                    </div>
            </footer>
        );
    }
}

export default Footer;