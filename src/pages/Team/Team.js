import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Team.css';
import CEO from '../../assets/ceo.jpg';

const Team = () => {
    return (
        <>
        <Hero label='Meet The Team'/>
        <div className='team-page'>
            <div className="teams">
                <div className="team">
                    <div className="team-inner">
                    <div className="team_front"><div><h3>CEO</h3><h4>Mr Yussuf Abdul Waasii</h4></div></div>
                    <div className="team_back"><img src={CEO} alt="ceo" className='team-img' /></div>
                    </div>
                </div>
                {/* <div className="team">
                <div className="team-inner">
                    <div className="team_front">hello</div>
                    <div className="team_back">hi</div>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Team
