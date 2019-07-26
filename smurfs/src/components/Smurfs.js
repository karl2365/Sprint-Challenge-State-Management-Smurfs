import React, { useContext } from 'react';

import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';

const Smurfs = () => {
    const { smurfs, setSmurfs } = useContext(SmurfContext);
    return (
        <div>
            <Smurf />
        </div>
    )


}

export default Smurfs;