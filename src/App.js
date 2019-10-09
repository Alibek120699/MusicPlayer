import React, { Component } from "react";
import { PlayerDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
    from "react-router-dom";
import { PlayerConnector } from "./player/PlayerConnector";


export default class App extends Component {

    render(){
        return (
            <Provider store={PlayerDataStore}>
                <Router>
                    <Switch>
                        <Route path="/mop"
                            component={ PlayerConnector } />
                        <Redirect to="/mop" />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

