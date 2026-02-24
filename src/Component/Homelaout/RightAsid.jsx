import React from 'react';
import SocalLogin from './Socallogin';
import FindUs from './FindUs';
import Qzon from './Qzon';

const RightAsid = () => {
    return (
        <div className='space-y-8'>
            <SocalLogin></SocalLogin>
            <FindUs></FindUs>
            <Qzon></Qzon>
        </div>
    );
};

export default RightAsid;