import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Blog from "../Blog/Blog";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/blog-post" component={Blog} />
                </Switch>
            </Router>
        )
    }
}