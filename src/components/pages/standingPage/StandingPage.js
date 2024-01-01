import Ranking from '../../Elements/Ranking/Ranking';
import {React, useState , useEffect} from 'react'
import './standingPage.css';
import groups from '../../../data/groupes.json';
function StandingPage() {
    /*---------------Scroll to Top----------*/
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const [groupsList,setgroupsList]=useState(groups);
    return (
    <>
    <div className='standingPage'>
        <p className='standingTitle'>
         Standings
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