import React from "react";
import MusicPlayer from "react-responsive-music-player";
import { Link } from "react-router-dom";
import { Animation } from "../Animation";

const AudioPlayer = require("react-responsive-audio-player");

const playlist = [
    {
        url: "./ArticMonkeys-505.mp3",
        cover: "../public/logo512.png",
        title: "Artic Monkeys - 505.mp3",
        artist: [
            "Artic Monkeys"
        ]
    },
    {
        url: "./ArticMonkeys-DoIWannaKnow.mp3",
        cover: "../public/logo512.png",
        title: "Do I Wanna Know.mp3",
        artist: [
            "Artic Monkeys"
        ]
    },
]

const playlist2 = [
    {
        url: "./ArticMonkeys-505.mp3",
        title: "Artic Monkeys - 505.mp3",
    },
    {
        url: "./ArticMonkeys-DoIWannaKnow.mp3",
        title: "Do I Wanna Know.mp3",
    },
]
export function PlayerPage(props){
    return (
        <div>
            <div className="navbar navbar-expand-sm bg-info">
                <h1>Player Page</h1>
                <Animation />
            </div>
            <br />
            <Link
                className="btn btn-danger"
                to="/mop/songs">
                    Back to Home Page
            </Link>
            <MusicPlayer playlist={playlist} />
            <AudioPlayer playlist={playlist2} autoplay={true} />
        </div>
    );
}

