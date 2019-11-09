import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends Component {

    render(){
        return (
            <div className="container">
                <ToggleLink to={`${this.props.baseUrl}/all`}
                    exact={false}>
                        All Songs
                </ToggleLink>
                {
                    this.props.categories && this.props.categories.map(c => 
                        <ToggleLink key={c}
                            to={`${this.props.baseUrl}/${c.toLowerCase()}`}>
                                {c}
                        </ToggleLink>)
                }
            </div>
        );
    }
}