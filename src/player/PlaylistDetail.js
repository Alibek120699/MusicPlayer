import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PlaylistDetailRow } from "./PlaylistDetailRow";

export class PlaylistDetail extends Component {
    getLinkClasses = () => `btn btn-secondary m-1
        ${this.props.songsNumber === 0 ? "disabled" : ""}`;


    render(){
        return (
            <div className="m-3">
                <h2 className="text-center">Your Playlist</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PlaylistDetailRow playlist={this.props.playlist}
                            removeFromPlaylist={this.props.removeFromPlaylist} />
                    </tbody>
                </table>
                <div className="text-center">
                    <Link className="btn btn-primary m-1"
                        to="/mop">
                            Save Playlist
                    </Link>
                </div>
            </div>
        );
    }
}