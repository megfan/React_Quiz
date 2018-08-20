import React from 'react';
import 'whatwg-fetch';
import * as Scroll from "react-scroll/modules/index";

class HandleResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.result <= '10'){
            return (
                <h1> It could be better <strong>{this.props.name}</strong>.<br/>
                    You should try again!</h1>
            )
        }if(this.props.result > '10' &&  this.props.result <= '16'){
            return (
                <h1> Weel done <strong>{this.props.name}</strong>.<br/>
                    You are quite good with React!</h1>
            )
        }else{
            return (
                <h1> Very good <strong>{this.props.name}</strong>.<br/>
                    You are master in React already!</h1>
            )
        }
}}

export default class ResultList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: '',
            age: '',
            id: '',
            results: [],
            times: [],
            pending: true
        }
    }

    scrollTo() {
        Scroll.animateScroll.scrollTo(1800);
    }

    componentDidMount() {
        fetch('http://localhost:3000/users', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    name: data[data.length -1].name,
                    age: data[data.length -1].age,
                    id: data.length -1,
                    users: data,
                    pending: false
                })
            });

        fetch('http://localhost:3000/results', {
        method: 'GET',
          })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    results: data,
            })
        });

        fetch('http://localhost:3000/times', {
        method: 'GET',
        })
        .then(res => res.json())
            .then(data => {
                this.setState({
                    times: data,
            })
        })
    }

    render() {
        if(this.state.pending) {
            return (
                <p> Loading... </p>
            )
        }
        return (
            <div>
                <div className='resultUserData'>
                    <HandleResult result = {this.props.result} name={this.state.name}/>
                    <h3> You are {this.state.id + 1} person who finished JS Quiz</h3>
                </div>
                <div className='scroll' onClick={this.scrollTo}>
                    <svg className='scrollSVG' viewBox='0 0 250 250' xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                        <path d="M38.399 76.8c1.637 0 3.274.625 4.524 1.875l85.075 85.076 85.075-85.076c2.5-2.5 6.55-2.5 9.05 0s2.5 6.55 0 9.05l-89.6 89.601c-2.5 2.5-6.551 2.5-9.051 0l-89.6-89.601c-2.5-2.5-2.5-6.55 0-9.05 1.252-1.25 2.89-1.875 4.527-1.875z"/></svg>
                </div>
                <div className='resultList'>
                    <div className='usersList'>
                        <ul>
                        {this.state.users.map((item, index) => {
                        return (
                            <li key={index}>{item.name}</li>)})}
                        </ul>
                    </div>
                    <div className='usersList'>
                        <ul>
                            {this.state.users.map((item, index) => {
                                return (
                                    <li key={index}>{item.age}</li>)})}
                        </ul>
                    </div>
                    <div className='usersList'>
                        <ul>
                            {this.state.results.map((item, index) => {
                                return (
                                    <li key={index}>{item.userResult}</li>)})}
                        </ul>
                    </div>
                    <div className='usersList'>
                        <ul>
                            {this.state.times.map((item, index) => {
                                return (
                                    <li key={index}>{item.min}:{item.sec}:{item.msec}</li>)})}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
