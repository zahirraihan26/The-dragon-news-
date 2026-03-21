import React from 'react';
import SocalLogin from './SocalLogin';
import FindUs from './FindUs';
import Qzon from './Qzon';
import MarketTrends from './MarketTrends';
import AIAudioBriefing from './AIAudioBriefing';
import CyberWeather from './CyberWeather';

const RightAsid = () => {
    return (
        <div className='flex flex-col gap-6'>
            <SocalLogin></SocalLogin>
            <CyberWeather></CyberWeather>
            <FindUs></FindUs>
            <AIAudioBriefing></AIAudioBriefing>
            <MarketTrends></MarketTrends>
            <Qzon></Qzon>
        </div>
    );
};

export default RightAsid;