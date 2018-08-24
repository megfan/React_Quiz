import React from 'react';
import ResultList from './ResultList.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userResult: this.props.quizResult,
        }
    }

    componentDidMount() {

        fetch('http://localhost:3000/results', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                className="container result"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
                transitionAppear
                transitionAppearTimeout={800}
            >
                <h1>Quiz Results</h1>
                <div className='resultCounter'> {this.submitResult}
                    Your total score is<br/>
                    <strong>{this.props.quizResult} </strong>
                    for <strong>{this.props.questions - 1}</strong>!
                </div>
                <ResultList result={this.state.userResult}/>

            </ReactCSSTransitionGroup>
        );
    }
}

