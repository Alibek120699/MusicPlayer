import React, { Component } from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { SongsList } from "./SongsList";

export class Player extends Component {

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-dark text-white">
                        <div className="navbar-brand">Music Oriented Platform</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <CategoryNavigation baseUrl="/mop/songs"
                            categories={this.props.categories} />
                    </div>
                    <div className="col-9 p-2">
                        <SongsList songs={this.props.songs} />
                    </div>
                </div>
            </div>
        );
    }
}
