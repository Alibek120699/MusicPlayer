import React, { Component } from "react";

export class SongsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            p_id: null,
        }
        this.toggleStatus = this.toggleStatus.bind(this);
        this.onChangeOfId = this.onChangeOfId.bind(this);
    }

    onChangeOfId(id){
        this.setState({p_id: id});
        this.toggleStatus(id);
    }

    toggleStatus(id){
        const btn = document.getElementById(id);
        let status = btn.innerText;
        //console.log(status);
        btn.innerText = status === 'Play' && id ? 'Pause' : 'Play';
    }

    render(){
        if(this.props.songs == null || this.props.songs.length === 0){
            return <h5 className="p-2">No Songs in this Category</h5>
        }
        return (
            this.props.songs.map(s => 
                <div className="card m-1 p-1 bg-light"
                    key={s.id}>
                        <div className="row">
                            {/* <button
                                id={s.id}
                                onClick={(ev) => this.onChangeOfId(ev.target.id)}
                                className="btn btn-primary"
                            >
                                    Play
                            </button> */}
                            
                            <h4 className="ml-3">{s.title}</h4>
                        </div>
                        <div className="card-text bg-white p-1">
                            {s.artist}
                            <button className="btn btn-success btn-sm float-right"
                                onClick={() => this.props.addToPlaylist(s)}>
                                    +
                            </button>
                        </div>
                </div>
            )
        );
    }
}