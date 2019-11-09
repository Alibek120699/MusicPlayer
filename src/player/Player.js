import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CategoryNavigation } from "./CategoryNavigation";
import { SongsList } from "./SongsList";
import { Playlist } from "./Playlist";
import { SongsPageConnector } from "./SongsPageConnector";
import { PaginationControls } from "../PaginationControls";

const SongsPages = SongsPageConnector(PaginationControls);

export class Player extends Component {

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-dark text-white">
                        <div className="navbar-brand">Music Oriented Platform</div>
                        <div className="float-right">
                            <Playlist {...this.props} />
                            <Link 
                                className="btn btn-sm btn-dark border border-white float-right"
                                to="/mop/signup">
                                    Logout
                            </Link>
                            <Link 
                                className="btn btn-sm btn-dark border border-white float-right"
                                to="/mop/player">
                                    <i className="fas fa-music"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <CategoryNavigation baseUrl="/mop/songs"
                            categories={this.props.categories} />
                    </div>
                    <div className="col-9 p-2">
                        <SongsPages />
                        {/* <SongsList songs={this.props.songs} /> */}
                        <SongsList {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}
