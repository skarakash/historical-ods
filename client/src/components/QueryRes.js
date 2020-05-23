import React from 'react'

export const QueryRes = ({ data }) => {
    if (data && data.lenght === 0) {
        return (
            <>no results</>
        )
    }



    return (
        <>
            {data && data.map(match => {
                return <div key={match['_id']}>{`${match.homeTeam} - ${match.awayTeam}  ${match.homeScore} : ${match.awayScore}  total: ${match.totalGoals > 2.5 ? 'over' : 'under'}`}</div>
            })}
        </>
    )
}