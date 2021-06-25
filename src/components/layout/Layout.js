import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import './Layout.css';
import {getSketchDataFromJson} from '../../store/sketch-service/Action'

export class Layout extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        getSketchDataFromJson()
    }

    render() {
        return (
            <Fragment>
                <NavBar />
                <Fragment>{/* Changing component */}
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/my-sketches" />
                        </Route>
                        {/* <Route exact path="/" render={() => (<Redirect to="/my-sketches" />)} /> */}
                        <Route exact path="/my-sketches" component={Home} />
                        <Route exact path="/my-sketches/about-me" component={About} />
                        {/* <Route path="/my-sketches/contact-me" component={Contact} /> */}
                        <Route component={(props) => <Fragment>Not Found !!!</Fragment>} />
                    </Switch>
                </Fragment>
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(Layout)
