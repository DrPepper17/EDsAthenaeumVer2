import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Shelf from './ShelfComponent';
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
                <Home 

                />
            );
        }

        return (
            <div style={{ backgroundImage: 'url("../assets/images/bookbggray.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Header />
                <div className="row mt-5">
                    <div className="col mx-5">
                        <Switch>
                            <Route path='/home' component={HomePage} />

                            <Redirect to='/home' />
                        </Switch>
                    </div>
                    <div className="col-md-3 col-lg-2 d-none d-md-block p-0">
                        <Shelf />
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default Main;