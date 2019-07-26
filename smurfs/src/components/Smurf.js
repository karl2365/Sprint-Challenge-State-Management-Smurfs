import React, { useEffect, useContext } from 'react';
import Axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';

class Smurf extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: 0,
            height: ''
        }
    }

    


    render (){
        return (
            <div className='smurfContainer'>
                {this.props.smurf.name}
  
            </div>
        )
    }    
}


export default Smurf;