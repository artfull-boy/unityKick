import './MatchInfo.css'
import React from "react"

export default function MatchInfo(props){
    const styleComing={
        background: 'rgba(0, 155, 58, 0.10)',
    };
    const styleComingTxt={
        color: 'rgba(0, 155, 58, 1)',
    }
    const styleFinished={
        background: 'rgba(250, 14, 14, 0.10)',
    };
    const styleFinishedTxt={
        color: '#FA0E0E',
    }
    const bgColor1={
        background: '#FBFBFB',
    }
    const bgColor2={
        background: '#FFFFFF',
    }
    const TimeStyleBg=props.coming?styleComing:styleFinished;
    const TimeStyleTxt=props.coming?styleComingTxt:styleFinishedTxt;
    const BgColor=props.index%2==0?bgColor1:bgColor2;
    return <>
        <div className="MI-container" style={BgColor}>
            <div className="MI-teams">
                <div className="MI-team team1">
                    <img src={props.t1Logo}></img>
                    <h3>{props.t1}</h3>
                </div>
                <div className="MI-score">
                    <p>{props.score}</p>
                </div>
                <div className="MI-team team2">
                    <h3>{props.t2}</h3>
                    <img src={props.t2Logo}></img>
                </div>
            </div>
            <div className="MI-time" style={TimeStyleBg}>
                <p style={TimeStyleTxt}>{props.time}</p>
            </div>
            <div className="MI-status">
                <p>{props.date}</p>
            </div>
        </div>
    </>
}