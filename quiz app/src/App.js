import React,{useState, useContext} from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import QuizEnd from './components/QuizEnd';
import { QuizContext } from './Global/context';

function App() {

  const [quizState,setQuizState] = useState("menu");
  const [score,setScore] = useState(0);
  const [userName,setUserName] = useState("");
  return (
    <div className="App">

      <section className="container">
        <h1>Quiz</h1>
        <div className="underline" style={{height:"4px",width:"10%",margin:"5px auto",background:"#fff",borderRadius:"25%" }} ></div>
          
        <QuizContext.Provider value={{quizState,setQuizState,score,setScore,userName,setUserName}} >
          {
            (quizState==="menu" ? 
              <MainMenu /> :
              ((quizState==="quiz")? <Quiz /> : <QuizEnd />))
          }
        </QuizContext.Provider>
      </section>
    </div>
  );
}

export default App;
