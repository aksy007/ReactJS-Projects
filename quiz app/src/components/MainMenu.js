import React,{useContext} from 'react'
import { QuizContext } from '../Global/context'

const MainMenu = ()=> {
    
    const {setQuizState,setUserName} = useContext(QuizContext);
    const handleUserName = (e) =>{
        setUserName(e.target.value);
    }
    return (
        <div className="menu">
            <form onSubmit={()=> setQuizState('quiz')}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={handleUserName}
                    required    
                /> 
                <button>Start Quiz</button>
            </form>
        </div>
    )
}

export default MainMenu
