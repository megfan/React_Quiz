import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Question from './Question.jsx'
import QuestionCounter from './Counter.jsx'
import Answers from './Answers.jsx'

import Stopwatch from './stoper.jsx'

export default class Quizz extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

        return(
            <ReactCSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
                transitionAppear
                transitionAppearTimeout={500}
            >
            <div className='quiz' key={this.props.questionId}>
                <QuestionCounter counter={this.props.questionId} total={this.props.questionTotal}/>
                <Question title={this.props.question}/>
                <ul className="answerOptions">
                    <Answers answerOptions={this.props.answerOptions} answerCallback={this.props.answerCallback}/>
                </ul>
            </div>
                <Stopwatch />
            </ReactCSSTransitionGroup>
        )
    }
}
