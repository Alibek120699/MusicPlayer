import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Player } from "./Player";
import { PlayerPage } from "../staticData/PlayerPage";
import { SignUp } from "../auth/SignUp";
import { Login } from "../auth/Login";
import { addToPlaylist, removeFromPlaylist,
        clearPlaylist } from "../data/PlaylistActionCreator";
import { PlaylistDetail } from "./PlaylistDetail";
import { DataGetter } from "../data/DataGetter";

const mapStateToProps = dataStore => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData, addToPlaylist, removeFromPlaylist, clearPlaylist
}

// const filterSongs = (songs=[], category) => 
//     (!category || category==="All Songs")
//         ? songs : songs.filter(s => s.category.toLowerCase() === category.toLowerCase());

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


                    {/* For pagination */}
                    <Redirect from="/mop/songs/:category"
                        to="/mop/songs/:category/1" exact={true} />
                    <Route path="/mop/songs/:category/:page"
                        render={routeProps => 
                            <DataGetter {...this.props} {...routeProps} >
                                <Player {...this.props} {...routeProps} />
                            </DataGetter>} />

                    
                    {/* <Route path="/mop/songs/:category?"
                        render={ routeProps => 
                            <Player {...this.props}
                                {...routeProps}
                                songs={filterSongs(this.props.songs, routeProps.match.params.category)} />} /> */}
                    <Route path="/mop/playlist" render={(routeProps) => 
                        <PlaylistDetail {...this.props} {...routeProps} />} />
                    <Redirect to="/mop/songs/all/1" />
                </Switch>
            );
        }

        componentDidMount(){
            // this.props.loadData(DataTypes.SONGS);
            this.props.loadData(DataTypes.CATEGORIES);
        }
    }
)