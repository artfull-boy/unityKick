import React, { useState } from "react";
import score from "../../../images/matchscore.png"
import MOTM from "../../../images/MOTM.png"
import terrain from "../../../images/terrain.png"
import matches_data from "../../../data/matches.json";
import "./StatisticsPage.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function StatisticsPage() {
    const { match_id } = useParams();
    const desired = matches_data.matches.map((matchDATA)=>(
        matchDATA.info.find((matchID) => matchID.index == match_id)
    ));
    const match=desired[0];
    const scoreArray = match.score.split(' - ');
    const team1Score = parseInt(scoreArray[0], 10);
    const team2Score = parseInt(scoreArray[1], 10);
    var ManOTM = match.t1LineUp[8].name;
    const goalsHome = [];
    for (let i = 0; i < team1Score; i++) {
        let minutes = Math.floor(Math.random() * (93 - 5 + 1) + 5);
        let player = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        goalsHome.push(<p key={i}>{`${match.t1LineUp[player].name} ${minutes}'`}</p>);
        ManOTM = match.t1LineUp[player].name;
    }
    const goalsAway = [];
    for (let i = 0; i < team2Score; i++) {
        let minutes = Math.floor(Math.random() * (93 - 5 + 1) + 5);
        let player = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        goalsAway.push(<p key={i}>{`${match.t2LineUp[player].name} ${minutes}'`}</p>);
        ManOTM = match.t2LineUp[player].name;
    }
    return (
        <div className="StatisticsPage">
            <div className="MatchScore">
                <div className="backgroundImages">
                    <img src={match.t1Logo}></img>
                    <img src={match.t2Logo}></img>
                </div>
                <p className="stadium">Lusail Stadium</p>
                <div className="score">
                    <div className="Home">
                        <img className="flag" src={match.t1Logo} />
                        <p className="country">{match.t1}</p>
                    </div>
                    <div className="scoreMatch">
                        <p>{match.score}</p>
                    </div>
                    <div className="Away">
                        <img className="flag" src={match.t2Logo} />
                        <p className="country">{match.t2}</p>
                    </div>
                </div>
                <div className="soccers">
                    <div className="left">
                        {goalsHome}
                    </div>
                    <div className="right">
                        {goalsAway}
                    </div>
                </div>
            </div>
            <div className="ManOTM">
                <p>Man of The Match : <span>{` ${ManOTM}`}</span></p>
            </div>
            <div className="lineups">
                <div className="formation">
                    <p>Team Formation</p>
                    <div className="Teams">
                        <div className="Home">
                            <img className="flag" src={match.t1Logo} />
                            <div>
                                <p>{match.t1}</p>
                                <p>4-3-3</p>
                            </div>
                        </div>
                        <p style={{color: "#A4A4A4", fontFamily: "Inter", fontSize: "16px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"}}>FT</p>
                        <div className="Away">
                            <img className="flag" src={match.t2Logo} />
                            <div>
                                <p>{match.t2}</p>
                                <p style={{color:"#A4A4A4", textAlign:"right"}}>4-3-3</p>
                            </div>
                        </div>
                    </div>
                    <div className="lineup">
                    <img src={terrain} />
                        <div className="Home">
                            <div className="gk">
                                <div></div>
                            </div>
                            <div className="df">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ml">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="at">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="Away">
                            <div className="gk">
                                <div></div>
                            </div>
                            <div className="df">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ml">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="at">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lineup">
                    <div className="TeamLineup">
                        <img className="flag" src={match.t1Logo} />
                        <p>
                            Team Line Up
                        </p>
                        <img className="flag" src={match.t2Logo} />
                    </div>
                    <div className="trait"></div>
                    <div className="lineupPlayers">
                        <div className="Home">
                            {match.t1LineUp.map((player)=>(
                                <p><span className="player">{player.pos} </span>{player.name}</p>
                            ))}
                        </div>
                        <div className="Away">
                            {match.t2LineUp.map((player)=>(
                                <p>{player.name}<span className="player">{player.pos} </span></p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}