import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Quiz from './components/Quiz.jsx';
import quizQuestions from "../api/quizQuestions";
import Result from './components/Result.jsx';
import * as Scroll from "react-scroll/modules/index";

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            question: quizQuestions[0].question,
            questionId: 1,
            answerOptions: quizQuestions[0].answers,
            answer: '',
            answerCounter: 0,
            result: 0,
            correct: quizQuestions[0].correct
        }
    }
    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }

    CheckAnswer = (e) => {
        this.setState({
            answer: e.currentTarget.value
        });
        if(this.state.correct === e.currentTarget.value){
            this.setState({
                result: this.state.result + 1
            });
        }
        if(this.state.questionId <= 20) {
            this.setNextQuestion(e);
        }
    };

    setNextQuestion = () => {
        const counter = this.state.answerCounter += 1;
        const questionId = this.state.questionId += 1;

        if(this.state.questionId <= 20) {
            this.setState({
                answersCounter: counter,
                questionId: questionId,
                question: quizQuestions[counter].question,
                answerOptions: quizQuestions[counter].answers,
                correct: quizQuestions[counter].correct
            });
        }
    };

    renderQuiz () {
        return(
            <ReactCSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
                transitionAppear
                transitionAppearTimeout={800}
            >
            <Quiz
                question={this.state.question}
                questionId={this.state.questionId}
                questionTotal={quizQuestions.length}
                answerOptions={this.state.answerOptions}
                answerCallback={this.CheckAnswer}
            />
            </ReactCSSTransitionGroup>
        )
    }

    finishQuiz() {
        return(
            <Result quizResult={this.state.result} questions={this.state.questionId}/>
        )
    }

    render(){
        return(
            <div className="App">
                <div>
                    {this.state.questionId <= quizQuestions.length
                    ? this.renderQuiz() :this.finishQuiz()}
                </div>

            </div>
        )
    }
}