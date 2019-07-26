import React, { useContext } from 'react';

import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';

const Smurfs = () => {
    const { smurfs, setSmurfs } = useContext(SmurfContext);



    return (
        <div>
            {smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} setSmurfs={setSmurfs} />)}
        </div>
    )


}

export default Smurfs;