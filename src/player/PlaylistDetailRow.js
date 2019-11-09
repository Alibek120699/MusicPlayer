import React from "react";

export class PlaylistDetailRow extends React.Component {
    render(){
        if(!this.props.playlist || this.props.playlist.length === 0){
            return (
                <tr>
                    <td colSpan="5">Your Playlist is empty</td>
                </tr>
            );
        }
        return (
            <React.Fragment>
                { this.props.playlist.map(item => 
                    <tr key={item.song.id}>
                        <td>{item.song.title}</td>
                        <td>{item.song.artist}</td>
                        <td>
                            <button className="btn btn-sm btn-danger"
                                onClick={() => 
                                    this.props.removeFromPlaylist(item.song)}>
                                        -
                            </button>
                        </td>
                    </tr>)}
            </React.Fragment>
        );
    }
}