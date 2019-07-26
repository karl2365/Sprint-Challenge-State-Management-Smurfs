import React from 'react';
import './components.css';

const Smurf = (props) =>  {
    return (
        <div className='smurfContainer'>
            <p className='smurfName'>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>X</button>
        </div>
    )
    
}


export default Smurf;