import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import './Layout.css';

export class Layout extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Fragment>{/* Changing component */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about-me" component={About} />
                        {/* <Route path="/contact-me" component={Contact} /> */}
                        <Route component={(props) => <Fragment>Not Found !!!</Fragment>} />
                    </Switch>
                </Fragment>
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(Layout)
