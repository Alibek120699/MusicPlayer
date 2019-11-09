import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Playlist extends Component {

    getCreatedPlaylistItemsNumber = () => {
        if(this.props.songsNumber > 0){
            return (
                <span>
                    {this.props.songsNumber} song(s)
                </span>
            );
        } else {
            return (
                <span>
                    Playlist is empty
                </span>
            );
        }
    }

    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white ${this.props.songsNumber === 0
            ? "disabled": ""}`;
    }

    render(){
        return (
            <div className="">
                <small>
                    {this.getCreatedPlaylistItemsNumber()}
                    <Link className={this.getLinkClasses()}
                        to="/mop/playlist">
                            <i className="fa fa-list" aria-hidden="true"></i>
                    </Link>
                </small>
            </div>
        );
    }
}