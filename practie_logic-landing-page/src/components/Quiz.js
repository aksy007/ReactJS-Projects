import React from 'react';
import IsLock from './IsLock';

const Quiz = ({quizImgSrc,quizName,quizText,isLock})=>{
    return(
        <li className="quiz-wrapper">
            <div className="quiz">
                <div className="quiz-img">
                    <img src={quizImgSrc} alt="" />
                    {
                        <IsLock  isLock={isLock} />
                    }
                </div>
                <div className="quiz-text">
                    <h4> {quizName} </h4>
                    <p> {quizText} </p>
                </div>
                <div className="quiz-progress" />
            </div>
        </li>
    );
}

export default Quiz;