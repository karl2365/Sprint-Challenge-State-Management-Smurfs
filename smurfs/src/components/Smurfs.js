import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';

import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';

const Smurfs = () => {
    const { smurfs, setSmurfs } = useContext(SmurfContext);
    const [newSmurf, setNewSmurf] = useState({name: '', age: 0, height: ''});


    const handleChanges = e => {
        setNewSmurf ({
            ...newSmurf, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        //e.preventDefault();
        console.log(newSmurf)
     
            Axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log(res);
                this.props.setSmurfs(res.data);
                window.location.reload();
              
            })
            .catch(err => console.log(err.response))
  
    }

    return (
        <div>
            {smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} setSmurfs={setSmurfs} />)}
            <h2 className="formTitle">Add Smurf</h2>
                <form className='form' onSubmit={handleSubmit}>
                
                <label>Name: </label>
                    <input type='text' name='name' onChange={handleChanges} value={newSmurf.name}  />
                
                <label>Age: </label>
                    <input type='number' name='age' onChange={handleChanges} value={newSmurf.age}  />    
                
                <label>Height: </label>
                    <input type='text' name='height' onChange={handleChanges} value={newSmurf.height}  />
                <button type='submit'>Add Smurf</button>
                </form>
        </div>
    )


}

export default Smurfs;