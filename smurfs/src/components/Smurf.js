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

    
    handleChanges = e => {
        this.setState ({
            ...this.state, 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
            Axios
            .post('http://localhost:3333/smurfs', this.state)
            .then(res => {
                console.log(res);
                this.props.setSmurfs(res.data);

              
            })
            .catch(err => console.log(err.response))
      
    }

    render (){
        return (
            <div className='smurfContainer'>
                {this.props.smurf.name}
                <h2 className="formTitle">Add Smurf</h2>
                <form className='form' onSubmit={this.handleSubmit}>
                
                <label>Name: </label>
                    <input type='text' name='name' onChange={this.handleChanges} value={this.state.name}  />
                
                <label>Age: </label>
                    <input type='number' name='age' onChange={this.handleChanges} value={this.state.age}  />    
                
                <label>Height: </label>
                    <input type='text' name='height' onChange={this.handleChanges} value={this.state.height}  />
                <button type='submit'>Add Smurf</button>
                </form>
            </div>
        )
    }    
}


export default Smurf;