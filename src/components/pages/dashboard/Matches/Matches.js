import { useState,useEffect } from 'react';
import MatchInfo from '../../../Elements/matchInfo/MatchInfo';
import './Matches.css';
import React from 'react';
import matchesData from '../../../../data/matches.json';
export default function Matches(props){
    const [comingMatch,setComingMatch]=useState(false);
    const [matchData, setMatchData] = useState(matchesData);
    let matchResult;
    if (props.team) {
        if (comingMatch) {
            const comingMatches = matchData.matches.find((matchType) => matchType.type === 'coming');
            matchResult = (
            <div className='matches-result coming-match'>
                {comingMatches.info.map((match,index)=>{
                    if ((match.t1 == props.team) ||(match.t2 == props.team)) {
                    return (<MatchInfo t1Logo={match.t1Logo} t1={match.t1} score={match.score} t2Logo={match.t2Logo} t2={match.t2} time={match.time} date={match.date} coming={match.coming} index={index}/>)}
                }) }
            </div>
            );
        } else {
            const comingMatches = matchData.matches.find((matchType) => matchType.type === 'latest');
            matchResult = (
            <div className='matches-result coming-match'>
                {comingMatches.info.map((match,index)=>{
                    if ((match.t1 == props.team) ||(match.t2 == props.team)) {
                    return (<MatchInfo t1Logo={match.t1Logo} t1={match.t1} score={match.score} t2Logo={match.t2Logo} t2={match.t2} time={match.time} date={match.date} coming={match.coming} index={index}/>)}
                }) }
            </div>
            );
        }
    }
    else {
        if (comingMatch) {
            const comingMatches = matchData.matches.find((matchType) => matchType.type === 'coming');
            matchResult = (
            <div className='matches-result coming-match'>
                {comingMatches.info.map((match,index)=>{
                    return (<MatchInfo t1Logo={match.t1Logo} t1={match.t1} score={match.score} t2Logo={match.t2Logo} t2={match.t2} time={match.time} date={match.date} coming={match.coming} index={index}/>)
                }) }
            </div>
            );
        } else {
            const comingMatches = matchData.matches.find((matchType) => matchType.type === 'latest');
            matchResult = (
            <div className='matches-result coming-match'>
                {comingMatches.info.map((match,index)=>{
                    return (<MatchInfo t1Logo={match.t1Logo} t1={match.t1} score={match.score} t2Logo={match.t2Logo} t2={match.t2} time={match.time} date={match.date} coming={match.coming} index={index}/>)
                }) }
            </div>
            );
        }
    }
    return <>
        <div className='matches'>
            <div className='matches-title'>
                <h3>Football Match</h3>
                <div className='matches-menu'>
                    <div className='mm-line'>
                        <div className='mm-line-active' style={{ marginLeft: comingMatch ? '140px' : '0' }}></div>
                    </div>
                    <div className='mm-subTitle'>
                        <h3 className={`mm-sub ${!comingMatch ? 'active' : ''}`} onClick={() => setComingMatch(false)}>Latest Match</h3>
                        <h3 className={`mm-sub ${comingMatch ? 'active' : ''}`} onClick={() => setComingMatch(true)}>Coming Match</h3>
                    </div>
                </div>
            </div>
            {matchResult}
        </div>
    </>
}