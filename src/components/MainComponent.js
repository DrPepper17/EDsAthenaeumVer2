import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Shelf from './ShelfComponent';
import Home from './HomeComponent';
import Author from './AuthorComponent';
import Book from './BookComponent';
import Cafe from './CafeComponent';
import Contact from './ContactComponent';
import Event from './EventComponent';
import Garden from './GardenComponent';
import OutsideLinks from './LinkComponent';
import Study from './StudyComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div style={{ backgroundImage: 'url("../assets/images/bookbggray.png")', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Header />
                <div className="row">
                    <div className="col mx-5">
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/cafe' render={() => <Cafe />} />
                            <Route exact path='/book' render={() => <Book />} />
                            <Route exact path='/study' render={() => <Study />} />
                            <Route exact path='/event' render={() => <Event />} />
                            <Route exact path='/author' render={() => <Author />} />
                            <Route exact path='/garden' render={() => <Garden />} />
                            <Route exact path='/contact' render={() => <Contact />} />
                            <Route exact path='/outsidelinks' render={() => <OutsideLinks />} />
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                    <div className="col-md-3 col-lg-2 d-none d-md-block p-0 mt-5 mr-lg-5 mr-xl-0">
                        <Shelf />
                    </div>
                </div>
                <hr />
                <Footer />
                <div className="text-center">
                    <img src="../assets/images/emilydaguero.png" width='100' alt="Emily Dickinson" style={{marginBottom:'75px'}}/>
                </div>
            </div>
        );
    }
}

export default Main;