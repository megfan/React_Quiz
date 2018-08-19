import React from 'react';
import * as Scroll from "react-scroll/modules/index";


export default class BackgroundFrame extends React.Component{

    scrollTo() {
        Scroll.animateScroll.scrollTo(1800);
    }
    render(){
        return(
            <div className='backgroundFrame'>
                <div className='title'>
                    <div className='mainTitle'>
                        REACT / QUIZ
                    </div>
                    <h1>Take a chance and check Your knowledge about <br /><span>React JS</span></h1>
                    <div className='scroll' onClick={this.scrollTo}>
                        <svg className='scrollSVG' viewBox='0 0 250 250' xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                            <path d="M38.399 76.8c1.637 0 3.274.625 4.524 1.875l85.075 85.076 85.075-85.076c2.5-2.5 6.55-2.5 9.05 0s2.5 6.55 0 9.05l-89.6 89.601c-2.5 2.5-6.551 2.5-9.051 0l-89.6-89.601c-2.5-2.5-2.5-6.55 0-9.05 1.252-1.25 2.89-1.875 4.527-1.875z"/></svg>
                    </div>
                </div>
            </div>
        )
    }
}