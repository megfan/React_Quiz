import React from 'react';
import App from './App.jsx';
import BackgroundFrame from './MainComponents/BackgroundFrame.jsx';
import FormUser from './MainComponents/FormUser.jsx';
import * as Scroll from "react-scroll/modules/index";
import movie from '../video/movie.mov';

    import {
        HashRouter,
        Route,
        Switch,
        Link,
    } from 'react-router-dom'


class Header extends React.Component{

    reloadPage(){
       return(
            <Link to='/'> </Link>
           )
        }
    render(){
        return(
            <div className='logoConatiner'>
                <div className='logo' onClick={() => this.reloadPage()}>
                    <Link to='/'>Q/RE<br/>ACT</Link>
                </div>
                <div className='signature'>MADE BY <strong>MEG</strong></div>
            </div>
        )
    }
}

class Main extends React.Component{
      render(){
        return(
            <div className='backgroundMain'>
                <BackgroundFrame />
                <video ref='video' id='backgroundVideo'  loop autoPlay >
                    <source src={movie} type='video/mp4'/>
                </video>
                <div className='formFrame'>
                    <FormUser/>
                </div>
                </div>
        )
    }
}

class AppQuiz extends React.Component{

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }
    render(){
        return(
            <div>
                <div className='backgroundFrame'><App /></div>
                <div className='backgroundText'>REACT</div>
            </div>
        )
    }
}

class NotFound extends React.Component{
        render(){
            return(
                <h1 className='notFound'>404 <br/> Nothing is here</h1>
            )
        }
}

export default class AppMain extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }

    render(){

        return(
            <HashRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/app" component={AppQuiz} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}