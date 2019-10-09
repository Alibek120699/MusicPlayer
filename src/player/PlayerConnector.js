import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Player } from "./Player";
import { PlayerPage } from "../staticData/PlayerPage";
import { SignUp } from "../auth/SignUp";
import { Login } from "../auth/Login";

const mapStateToProps = dataStore => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData
}

const filterSongs = (songs=[], category) => 
    (!category || category==="All Songs")
        ? songs : songs.filter(s => s.category.toLowerCase() === category.toLowerCase());

export const PlayerConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render(){
            return (
                <Switch>
                    <Route path="/mop/player"
                        render={ () => <PlayerPage /> } />
                    <Route path="/mop/signup"
                        render={() => <SignUp />} />
                    <Route path="/mop/login"
                        render={() => <Login />} />
                    <Route path="/mop/songs/:category?"
                        render={ routeProps => 
                            <Player {...this.props}
                                {...routeProps}
                                songs={filterSongs(this.props.songs, routeProps.match.params.category)} />} />
                    <Redirect to="/mop/songs" />
                </Switch>
            );
        }

        componentDidMount(){
            this.props.loadData(DataTypes.SONGS);
            this.props.loadData(DataTypes.CATEGORIES);
        }
    }
)