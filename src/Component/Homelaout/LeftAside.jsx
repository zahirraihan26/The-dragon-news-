import React, { Suspense } from 'react';
import Catagoris from '../Catagoris';

const LeftAside = () => {
    return (
        <div>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
             <Catagoris></Catagoris>
          </Suspense>
        </div>
    );
};

export default LeftAside;