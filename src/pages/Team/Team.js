import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Team.css'

const Team = () => {
    return (
        <>
        <Hero label='Meet The Team'/>
        <div className='team-page'>
            <div className="teams">
                <div className="team">
                    <div className="team-inner">
                    <div className="team_front">hello</div>
                    <div className="team_back">hi</div>
                    </div>
                </div>
                <div className="team">
                <div className="team-inner">
                    <div className="team_front">hello</div>
                    <div className="team_back">hi</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Team
