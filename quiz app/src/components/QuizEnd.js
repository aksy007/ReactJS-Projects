import React,{useContext} from 'react';
import { QuizContext } from '../Global/context';

const QuizEnd = ()=> {
    const {score,setQuizState} = useContext(QuizContext);
    return (
        <div className="quiz-end">
            <h1>Total Score : {score}</h1>
            <button onClick={()=> setQuizState("menu")}>Restart</button>
        </div>
    )
}

export default QuizEnd
