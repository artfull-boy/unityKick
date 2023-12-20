import Ranking from '../../Elements/Ranking/Ranking';
import {React, useState} from 'react'
import './standingPage.css';
import groups from '../../../data/groupes.json';
function StandingPage() {
    const [groupsList,setgroupsList]=useState(groups);
    return (
    <>
    <div className='standingPage'>
        <p className='standingTitle'>
        🏆 Standings
        </p>
        <div className='standingSection'>
        <div className='standings-list'>
                {groupsList.groups.map((group)=>(
                    <Ranking group={group.name} groupTeams={group}/>
                ))}
            </div>
        </div>
    </div>
    </>
    )
}
export default StandingPage;