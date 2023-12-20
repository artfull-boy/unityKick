import React from "react";
import score from "../../../images/matchscore.png"
import MOTM from "../../../images/MOTM.png"
import terrain from "../../../images/terrain.png"
import "./StatisticsPage.css";

export default function StatisticsPage() {
    return (
        <div className="StatisticsPage">
            <div className="MatchScore">
                <div className="backgroundImages">
                    <img src={`https://media.api-sports.io/flags/PT.svg`}></img>
                    <img src={`https://media.api-sports.io/flags/BL.svg`}></img>
                </div>
                <p className="stadium">Lusail Stadium</p>
                <div className="score">
                    <div className="Home">
                        <img className="flag" src={`https://media.api-sports.io/flags/PT.svg`} />
                        <p className="country">Portugal</p>
                    </div>
                    <div className="scoreMatch">
                        <p>2 <span>FT</span> 3</p>
                    </div>
                    <div className="Away">
                        <img className="flag" src={`https://media.api-sports.io/flags/BL.svg`} />
                        <p className="country">Belgium</p>
                    </div>
                </div>
                <div className="soccers">
                    <div className="left">
                        <p>C. Ronaldo 15’</p>
                        <p>E. Hazard 90 ’+3</p>
                    </div>
                    <div className="right">
                        <p>R. Lukaku 42’</p>
                        <p>E. Hazard 58’</p>
                        <p>E. Hazard 90 ’+3</p>
                    </div>
                </div>
            </div>
            <div className="ManOTM">
                <p>Man of The Match</p>
                <p>Eden Hazard</p>
            </div>
            <div className="lineups">
                <div className="formation">
                    <p>Team Formation</p>
                    <div className="Teams">
                        <div className="Home">
                            <img className="flag" src={`https://media.api-sports.io/flags/PT.svg`} />
                            <div>
                                <p>Portugal</p>
                                <p>4-3-3</p>
                            </div>
                        </div>
                        <p style={{color: "#A4A4A4", fontFamily: "Inter", fontSize: "16px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"}}>FT</p>
                        <div className="Away">
                            <img className="flag" src={`https://media.api-sports.io/flags/BL.svg`} />
                            <div>
                                <p>Belgium</p>
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
                        <img className="flag" src={`https://media.api-sports.io/flags/PT.svg`} />
                        <p>
                            Team Line Up
                        </p>
                        <img className="flag" src={`https://media.api-sports.io/flags/BL.svg`} />
                    </div>
                    <div className="lineupPlayers">
                        <div className="Home">
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                            <p><span className="player">GK </span>Diogo Costa</p>
                        </div>
                        <div className="Away">
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                            <p>Diogo Costa <span className="player">GK</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}