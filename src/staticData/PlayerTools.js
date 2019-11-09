import React from "react";

export function PlayerTools(props){
    return (
        // <div className="btn-group btn-group-lg">
        //     <button className="btn btn-secondary">Prev</button>
        //     <button className="btn btn-primary">Play</button>
        //     <button className="btn btn-secondary">Next</button>
        // </div>

        <div class=" container-fluid row">
            <div class="col-md-2"></div>
            <div class="btn-group btn-group-lg" >
                <button type="button" 
                    className="btn btn-info"
                    // onClick={() => props.prevTitle()}
                    >
                        <i className="fas fa-angle-double-left"></i>
                </button>
                <button type="button" 
                    className="btn btn-primary">
                        <i className="fas fa-play"></i>
                </button>
                <button type="button" 
                    className="btn btn-info"
                    //onClick={() => props.nextTitle()}
                    >
                        <i className="fas fa-angle-double-right"></i>
                </button>
            </div>
            <div class="col-md-2"></div>
        </div>
    );
}