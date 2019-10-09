import React from "react";
import anime from 'animejs/lib/anime.es.js';
import "./App.css";

let animation = anime.timeline({
    duration: 1000, 
    easing: 'easeInOutSine',   
    loop: true
  });           
  
let run = () => animation.add({
    targets: '.one',
    keyframes: [
      {translateY: -50, backgroundColor: 'rgb(255, 0, 0)' },
      {translateY: 0, backgroundColor: 'rgb(128, 128, 128)'}
    ]
  }).add({
    targets: '.two',
    keyframes: [
      {translateY: -50, backgroundColor: 'rgb(0, 255, 0)' },
      {translateY: 0, backgroundColor: 'rgb(128, 128, 128)'}
    ]
  }, '-=900').add({
    targets: '.three',
    keyframes: [
      {translateY: -50, backgroundColor: 'rgb(0, 0, 255)' },
      {translateY: 0, backgroundColor: 'rgb(128, 128, 128)'}
    ]
  }, '-=800');

export class Animation extends React.Component {
    render()
    {
        return (
            <React.Fragment>
                <div className="ball one"></div>
                <div className="ball two"></div>
                <div className="ball three"></div>
                <br />
                <button className="btn btn-primary"
                    onClick={() => run()}>
                        Play
                </button>
            </React.Fragment>
        );
    }
}