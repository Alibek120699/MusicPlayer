import React from "react";

export function PlayerButton(props){
    return (
        <div className="btn-block row">
            {/* <button className="btn btn-primary"
                background="../staticData/ArticMonkeys.jpg">
                    Play
            </button> */}
            <i class="fas fa-fast-backward m-5"></i>
            <i class="fas fa-play-circle"></i>
            <i class="fas fa-fast-forward m-5"></i>
        </div>
    );
}