import React from 'react';

function QuestionCounter(props) {

    return (
        <div className="questionCounter">
          - QUESTION - <br/>
            <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );

}

export default QuestionCounter;