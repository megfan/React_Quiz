import React from 'react';

import {
    Link
} from 'react-router-dom'

export default class FormUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            age: '',
            id: 0,
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        });
    };

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state)

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }


    render(){
        return(
            <div id='userForm'>
            <form className='formBox'>
                <span className='formTitle'>Let's start</span>
                <div className="formNameInput">
                    <input className="input1" type="text" name="name" autoComplete='off'
                     value={this.state.name} onChange={this.handleNameChange} placeholder={this.state.name}/>
                    <span className="focus-input1" >
                        <span className='inputTitle'><p>NAME</p></span>
                    </span>
                </div>
                <div className="formNameInput">
                    <input className="input1" type="text" name="age" autoComplete='off'
                           value={this.state.age} onChange={this.handleAgeChange}/>
                    <span className="focus-input1" ><p>AGE</p></span>
                </div>
                <div className="formSubmitBtn">
                    <div className='start' onClick={this.submitForm}>
                        <Link className="btnLink" to='/app'><button
                            className='btnStart'>START</button></Link>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}