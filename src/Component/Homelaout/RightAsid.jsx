import React from 'react';
import SocalLogin from './Socallogin';
import FindUs from './FindUs';
import Qzon from './Qzon';
import SystemStatus from './SystemStatus';
import MarketTrends from './MarketTrends';
import AIAudioBriefing from './AIAudioBriefing';

const RightAsid = () => {
    return (
        <div className='flex flex-col gap-6'>
            <SocalLogin></SocalLogin>
            <SystemStatus></SystemStatus>
            <FindUs></FindUs>
            <AIAudioBriefing></AIAudioBriefing>
            <MarketTrends></MarketTrends>
            <Qzon></Qzon>
        </div>
    );
};

export default RightAsid;