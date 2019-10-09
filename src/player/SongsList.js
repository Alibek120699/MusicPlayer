import React, { Component } from "react";

export class SongsList extends Component {

    render(){
        if(this.props.songs == null || this.props.songs.length === 0){
            return <h5 className="p-2">No Songs in this Category</h5>
        }
        return (
            this.props.songs.map(s => 
                <div className="card m-1 p-1 bg-light"
                    key={s.id}>
                        <h4>{s.title}</h4>
                        <div className="card-text bg-white p-1">
                            {s.artist}
                        </div>
                </div>
            )
        );
    }
}