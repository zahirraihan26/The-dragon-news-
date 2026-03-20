import React, { Suspense } from 'react';
import Catagoris from '../Catagoris';
import NeuralRecommendations from './NeuralRecommendations';

const LeftAside = () => {
    return (
        <div className="flex flex-col gap-6">
          <Suspense fallback={<span className="loading loading-spinner text-primary loading-xl"></span>}>
             <Catagoris></Catagoris>
             <NeuralRecommendations></NeuralRecommendations>
          </Suspense>
        </div>
    );
};

export default LeftAside;