import RankRow from './RankRow/RankRow';
import React from "react"

import './Ranking.css';
export default function Ranking(props){
    const teamsGr=props.groupTeams;
    return <>
        <div className='group-ranking'>
            <div className='ranking-head'>
                <div className='rr-team'><p className='group-name'>{props.group}</p></div>
                <div className='rr-right'> <div className='rr-point'>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>Points</p>
                </div></div>
                <div className='rr-history'> <p>Last Match</p></div>
            </div>
            {teamsGr.teams.map((team)=>(
                <RankRow rank={team.rank} flag={team.flag} team={team.team} win={team.win} draw={team.draw} lost={team.lost} history={team.history}/>
            ))}
            
        </div>
    </>
}