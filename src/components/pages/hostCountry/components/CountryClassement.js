import React from "react";
import standingData from "../../../../data/groupes.json"
import RankRow from '../../../Elements/Ranking/RankRow/RankRow'

export default function CountryClassement(props) {
    const foundGroup = standingData.groups.map((group) => {
        const found = group.teams.some((t) => {
            if (t.team == props.team) {
                return true
            }
        })
        if (found) {
            return group
        }
    }).filter(group => group !== undefined)
    const founded = foundGroup[0]
    return <>
        <div className='group-ranking'>
            <div className='ranking-head'>
                <div className='rr-team'><p className='group-name'>{founded?founded.name:'none'}</p></div>
                <div className='rr-right'> <div className='rr-point'>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>Points</p>
                </div></div>
                <div className='rr-history'> <p>Last Match</p></div>
            </div>
            {founded && founded.teams.map((team) => (
                <RankRow rank={team.rank} flag={team.flag} team={team.team} win={team.win} draw={team.draw} lost={team.lost} history={team.history} />
            ))}

        </div>
    </>
}