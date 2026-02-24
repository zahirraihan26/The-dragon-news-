import React from 'react';
import swmming from "../../assets/swimming.png"
import classimg from "../../assets/class.png"
import playgroundimg from "../../assets/playground.png"

const Qzon = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold md-5'> QZone</h2>
            <div className="space-y-5">
                <img src={swmming} alt="" />
                <img src={classimg} alt="" />
                <img src={playgroundimg} alt="" />
            </div>
        </div>
    );
};

export default Qzon;