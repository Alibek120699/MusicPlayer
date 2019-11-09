import React, { Component } from "react";
import { DataTypes } from "../data/Types";

export class DataGetter extends Component {

    render(){
        return (
            <React.Fragment>{this.props.children}</React.Fragment>
        );
    }

    componentDidUpdate = () => this.getData();
    componentDidMount = () => this.getData();

    getData = () => {
        const dsData = this.props.songs_params || {};
        const rtData = {
            _limit: this.props.pageSize || 10,
            _sort: this.props.sortKey || "title",
            _page: this.props.match.params.page || 1,
            category_like: (this.props.match.params.category || "") === "all"
                ? "" : this.props.match.params.category
        }

        if(Object.keys(rtData).find(key => dsData[key] !== rtData[key])){
            this.props.loadData(DataTypes.SONGS, rtData);
        }
    }
}