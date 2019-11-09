import React from "react";
import logo from "./logo.png";

export function Animation(){
    return (
        <div className="col-md-4">
            <img src={logo}
                className="thumbnail img-responsive"
                alt="Music Oriented Platform" />
        </div>
    );
}