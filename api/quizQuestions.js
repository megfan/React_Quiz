var quizQuestions = [
    {
        question: "What kind of application architecture is widely used together with React JS?",
        answers: ["Flux","Flux with MVC","MVC","Singleton"],
        correct: 1
    },
    {
        question: "PropTypes is used for:",
        answers: ["Typechecking" ,"getPropsValue","Validation" ,"getDefaultProps", "All of the above"],
        correct: 2
    },
    {
        question: "Which of the following correctly explains the term mounting?",
        answers: ["A component is being inserted into the Virtual DOM","A component is being removed from the DOM","A component is being re-rendered",
            "A component is being inserted into the DOM"],
        correct: 0
    },
    {
        question: "React JS focuses on which of the following part when considering MVC?",
        answers: ["Model","View","Controller", "All of the above"],
        correct: 1
    },
    {
        question: "Which statement about React JS is incorrect?",
        answers: ["You must know JavaScript to write React JS app","React JS alone can be used to write native applications for Android and iOS",
            "React JS app can be render on the server", "React JS encourages writing html inside js file"],
        correct: 1
    },
    {
        question: "Which function is invoked just before render() during initial rendering?",
        answers: ["componentDidMount","componentBeforeOccur","componentReceiveWillMount",
            "componentWillMount"],
        correct: 3
    },
    {
        question: "What method is used to change state?",
        answers: ['changeState()','onChange()','setState()',"stateSet()"],
        correct: 2
    },
    {
        question: "Which of the following method is called after getInitialState method?",
        answers: ["componentDidMount","componentWillMount","getDefaultProps","render"],
        correct: 1
    },
    {
        question: "Which of the following is TRUE about the difference between undefined and null:",
        answers: ["A variable is undefined when it's been declared but hasn't been assigned a value",
            "Null is purposely assigned as a representation of 'no value'",
            "Undefined is returned when trying to access a non-existant property of an object","All of the above"],
        correct: 3
    },
    {
        question: "What function allows you to render React content in a HTML page?",
        answers: ['ReactDOM.start()','React.render()','ReactDOM.render()',"React.mount()"],
        correct: 2
    },
    {
        question: "Which of the following is true about passing by value vs reference?",
        answers: ["Objects, arrays, and functions are passed by reference","string, number, boolean, symbol, null and undefined are passed by value"
            ,"Primitive types are passed by value and non-primitive types are passed by reference", "All of the above"],
        correct: 3
    },
    {
        question: "How can you change a 'name' property inside a 'React.Component' Class component?",
        answers: ["props['name'] = 'new name'","this.props.name = 'new name'","You cannot"],
        correct: 3
    },
    {
        question: "An arrow function:",
        answers: ['does not have its own "this"','has its own "this"','has its own "this" in strict-mode only','has its own "this" when passed in the methods call() or apply()'],
        correct: 0
    },
    {
        question: "How is let different from var?",
        answers: ['Let is block scoped',"Let isn't hoisted","Let can't be redeclared","All of the above"],
        correct: 3
    },
    {
        question: "How transform JSX code in browser?",
        answers: ['Standard Babel and react preset','JSXTransformer is recommended by Facebook',"You can't use JSX in browser","All of the above"],
        correct: 0
    },
    {
        question: "Which of the following is FALSE about the pure functional Components:",
        answers: ['No Class needed',"Aren't useful for presentational components", 'Are easy to test' ,'No THIS keyword needed'],
        correct: 1
    },
    {
        question: "Which feature can we use to cause a component to render only when its ID changes?",
        answers: ['shouldComponentUpdate()','constructor()', 'componentWillUnmount()' ,'componentDidCatch()'],
        correct: 0
    },
    {
        question: "What is a promise?",
        answers: ['An object that represents a possible future value','An object that\'s used for deferred and asynchronous computations',
            'A proxy for a value that will eventually become available',"All of the above"],
        correct: 3
    },
    {
        question: "ShallowRenderer.render():",
        answers: ['require DOM','renders a single level deep', "you can't test components isolated from children",'does support refs'],
        correct: 1
    },
    {
        question: "Which of the following API is a MUST for every React JS component?",
        answers: ['render','getInitialState', "renderComponent","All of the above"],
        correct: 0
    },


];

export default quizQuestions;
