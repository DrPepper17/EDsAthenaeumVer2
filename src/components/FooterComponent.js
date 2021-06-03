import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row" >             
                    <div class="col">
                        <p><u>Hours:</u><br/>
                            <div class="text-right">
                            <em>Monday thru Thursday: 7 am - 10 pm<br/>
                            Friday, Saturday: 7 am - 8 pm<br/>
                            Sunday: 12 pm - 10 pm</em></div></p>
                        <p><u><strong>Address:</strong></u><br/>
                            <div class="text-right"><em>280 Main St, Omaha, NE 68102</em></div></p>
                    </div>
                    <div class="col-md-6">
                        <p><u>Contact:</u></p>  
                        <div class="text-center">
                            <a role="button" class="btn btn-link" href="tel:+14023397717"><i class="fa fa-phone fa-lg text-primary"></i> 1-402-339-7717</a><br />
                            <a role="button" class="btn btn-link" href="mailto:emily@edathenaeum.com"><i class="fa fa-envelope fa-lg text-primary"></i> emily@edathenaeum.com</a><br/>
                            <a class="btn btn-social-icon btn-instagram" href="https://www.instagram.com/emilydickinson.museum/"><i class="fa fa-instagram"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/emily.dickinson.museum/"><i class="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/e_dickinson/"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-google" href="https://www.youtube.com/watch?v=55kqNg88JqI"><i class="fa fa-youtube"></i></a>
                        </div>                    
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;