import React,{useState,useContext} from 'react';
import { quizQuestions } from '../Global/Questions';
import { QuizContext } from '../Global/context';

const Quiz = ()=> {
    
    const {setQuizState} = useContext(QuizContext);
    const [queIndex,setQueIndex] = useState(0);
    const qSize = quizQuestions.length;
    const {score,setScore} = useContext(QuizContext);
    
    const decrementIndex = () =>{
        setQueIndex(
            (queIndex > 0)? queIndex-1 : queIndex
        );
    }
    const incrementIndex = () =>{
        setQueIndex(
            (queIndex < qSize)? queIndex+1 : queIndex
        );
    }
    const updateScore = (e) =>{
        if(quizQuestions[queIndex].answer == e.target.value)
            setScore(score+1);
    }
    return (
        <div className="quiz">

            <div className="frame-questions">
                <div className="question">
                    <h2>{quizQuestions[queIndex].question}</h2>
                </div>
                <div className="options">
                    <button onClick={updateScore} value={quizQuestions[queIndex].options[0]}> {quizQuestions[queIndex].options[0]} </button>
                    <button onClick={updateScore} value={quizQuestions[queIndex].options[1]}> {quizQuestions[queIndex].options[1]} </button>
                    <button onClick={updateScore} value={quizQuestions[queIndex].options[2]}> {quizQuestions[queIndex].options[2]} </button>
                    <button onClick={updateScore} value={quizQuestions[queIndex].options[3]}> {quizQuestions[queIndex].options[3]} </button>
                </div>
            </div>
            
            <div className="btns">
                <button onClick={decrementIndex}>Prev</button>
                {
                (queIndex === qSize-1) ? 
                    <button onClick={()=> setQuizState("quiz-end")}> End Quiz </button> :
                    <button onClick={incrementIndex}>Next</button>
                }
            </div>
        </div>
    )
}

export default Quiz
